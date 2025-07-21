import { NextRequest, NextResponse } from 'next/server';
import { Client as NotionClient } from '@notionhq/client';
import { google } from 'googleapis';

const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL!;
const NOTION_TOKEN = process.env.NOTION_TOKEN!;
const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID!;
const GOOGLE_SERVICE_ACCOUNT_JSON = process.env.GOOGLE_SERVICE_ACCOUNT_JSON!;

function getText(prop: any): string {
  if (!prop) return '';
  if (prop.type === 'title' || prop.type === 'rich_text') {
    return prop[prop.type].map((t: any) => t.plain_text).join(' ');
  }
  if (prop.type === 'select') {
    return prop.select?.name || '';
  }
  if (prop.type === 'multi_select') {
    return prop.multi_select.map((s: any) => s.name).join(', ');
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

async function createCalendarEvent(assignedTo: string, jobDate: string, title: string, description: string) {
  try {
    const credentials = JSON.parse(GOOGLE_SERVICE_ACCOUNT_JSON);
    const scopes = ['https://www.googleapis.com/auth/calendar'];
    const auth = new google.auth.JWT(
      credentials.client_email,
      undefined,
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
    return { success: true };
  } catch (err) {
    return { success: false, error: (err as Error).message };
  }
}

export async function POST(request: NextRequest) {
  const notion = new NotionClient({ auth: NOTION_TOKEN });
  let processed = 0;
  let errors: any[] = [];
  try {
    const response = await notion.databases.query({
      database_id: NOTION_DATABASE_ID,
      filter: {
        property: 'Lead Status',
        select: { equals: 'Ready' },
      },
    });

    for (const page of response.results) {
      // @ts-ignore
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
        text: `*New Job Scheduled!*\n*Customer Name:* ${customerName}\n*Service Type:* ${serviceType}\n*Job Date:* ${jobDate}\n*Client Address:* ${clientAddress}\n*Zip Code:* ${zipCode}\n*Notes:* ${notes}\n*Assigned To:* ${assignedTo}\n*Price:* ${price}\n*Phone Number:* ${phoneNumber}\n*Payment Type:* ${paymentType}`
      };
      // Send to Slack
      try {
        await fetch(SLACK_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(slackMessage)
        });
      } catch (err) {
        errors.push({ page: page.id, error: 'Slack', details: (err as Error).message });
      }

      // Create Google Calendar event
      if (assignedTo && jobDate) {
        const eventTitle = `Job - ${customerName}`;
        const eventDescription = slackMessage.text;
        const calRes = await createCalendarEvent(assignedTo, jobDate, eventTitle, eventDescription);
        if (!calRes.success) {
          errors.push({ page: page.id, error: 'Calendar', details: calRes.error });
        }
      }

      // Mark as Scheduled
      try {
        await notion.pages.update({
          page_id: page.id,
          properties: {
            'Lead Status': { select: { name: 'Scheduled' } },
          },
        });
        processed++;
      } catch (err) {
        errors.push({ page: page.id, error: 'Notion', details: (err as Error).message });
      }
    }
    return NextResponse.json({ processed, errors });
  } catch (err) {
    return NextResponse.json({ processed, errors: [{ error: 'General', details: (err as Error).message }] }, { status: 500 });
  }
} 