const { Client } = require('@notionhq/client');
const fetch = require('node-fetch');
const { google } = require('googleapis');
const fs = require('fs');
require('dotenv').config();

const notion = new Client({ auth: process.env.NOTION_TOKEN });
const databaseId = process.env.NOTION_DATABASE_ID;
const SLACK_WEBHOOK_URL = 'https://hooks.slack.com/services/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';
const GOOGLE_KEY_PATH = './fridays-windows-jobs.json';

function getText(prop) {
  if (!prop) return '';
  if (prop.type === 'title' || prop.type === 'rich_text') {
    return prop[prop.type].map(t => t.plain_text).join(' ');
  }
  if (prop.type === 'select') {
    return prop.select?.name || '';
  }
  if (prop.type === 'multi_select') {
    return prop.multi_select.map(s => s.name).join(', ');
  }
  if (prop.type === 'date') {
    return prop.date?.start || '';
  }
  if (prop.type === 'number') {
    return prop.number?.toString() || '';
  }
  if (prop.type === 'phone_number') {
    return prop.phone_number || '';
  }
  if (prop.type === 'email') {
    return prop.email || '';
  }
  return '';
}

async function createCalendarEvent(assignedTo, jobDate, title, description) {
  try {
    const credentials = JSON.parse(fs.readFileSync(GOOGLE_KEY_PATH, 'utf8'));
    const scopes = ['https://www.googleapis.com/auth/calendar'];
    const auth = new google.auth.JWT(
      credentials.client_email,
      null,
      credentials.private_key,
      scopes,
      assignedTo // impersonate the cleaner
    );
    const calendar = google.calendar({ version: 'v3', auth });
    const event = {
      summary: title,
      description,
      start: { dateTime: jobDate },
      end: { dateTime: new Date(new Date(jobDate).getTime() + 60 * 60 * 1000).toISOString() }, // 1 hour event
    };
    await calendar.events.insert({
      calendarId: 'primary',
      resource: event,
      sendUpdates: 'all',
    });
    console.log(`Created calendar event for ${assignedTo} on ${jobDate}`);
  } catch (err) {
    console.error('Error creating Google Calendar event:', err);
  }
}

async function pollNotionAndTrigger() {
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        property: 'Lead Status',
        select: { equals: 'Ready' },
      },
    });

    for (const page of response.results) {
      const props = page.properties;
      const customerName = getText(props['Customer Name']);
      const serviceType = getText(props['Service Type']);
      const jobDate = getText(props['Job Date']);
      const clientAddress = getText(props['Client Address']);
      const zipCode = getText(props['Zip Code']);
      const notes = getText(props['Notes']);
      const assignedTo = getText(props['Assigned To']);
      const price = getText(props['Price']);
      const phoneNumber = getText(props['Phone Number']);
      const paymentType = getText(props['Payment Type']);

      // Format Slack message
      const slackMessage = {
        text: `*New Job Scheduled!*
*Customer Name:* ${customerName}
*Service Type:* ${serviceType}
*Job Date:* ${jobDate}
*Client Address:* ${clientAddress}
*Zip Code:* ${zipCode}
*Notes:* ${notes}
*Assigned To:* ${assignedTo}
*Price:* ${price}
*Phone Number:* ${phoneNumber}
*Payment Type:* ${paymentType}`
      };
      // Send to Slack
      await fetch(SLACK_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(slackMessage)
      });
      console.log(`Sent job to Slack for: ${customerName}`);

      // Create Google Calendar event
      if (assignedTo && jobDate) {
        const eventTitle = `Job - ${customerName}`;
        const eventDescription = slackMessage.text;
        await createCalendarEvent(assignedTo, jobDate, eventTitle, eventDescription);
      }

      // Mark as Scheduled
      await notion.pages.update({
        page_id: page.id,
        properties: {
          'Lead Status': { select: { name: 'Scheduled' } },
        },
      });
      console.log(`Processed job: ${page.id} (set to Scheduled)`);
    }
  } catch (err) {
    console.error('Error polling Notion:', err);
  }
}

// Run every 1 minute
setInterval(pollNotionAndTrigger, 60 * 1000);

// Run immediately on start
pollNotionAndTrigger(); 