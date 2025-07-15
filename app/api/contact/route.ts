import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { Client as NotionClient } from '@notionhq/client';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message, needBy, services } = body;

    // Validate required fields
    if (!name || !email || !phone || !needBy || !services) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // --- SLACK INTEGRATION ---
    if (process.env.SLACK_WEBHOOK_URL) {
      const slackMessage = {
        text: `*New Quote Request*\n*Name:* ${name}\n*Email:* ${email}\n*Phone:* ${phone}\n*When Needed:* ${needBy}\n*Services:* ${(Array.isArray(services) ? services.join(', ') : services)}\n*Message:* ${message}`
      };
      await fetch(process.env.SLACK_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(slackMessage)
      });
    }

    // --- NOTION INTEGRATION ---
    if (process.env.NOTION_TOKEN && process.env.NOTION_DATABASE_ID) {
      try {
        const notion = new NotionClient({ auth: process.env.NOTION_TOKEN });
        
        // Create a simpler page with basic properties
        const response = await notion.pages.create({
          parent: { database_id: process.env.NOTION_DATABASE_ID },
          properties: {
            // Try common property names - adjust these based on your actual database
            'Name': { 
              title: [{ text: { content: name } }] 
            },
            'Email': { 
              rich_text: [{ text: { content: email } }] 
            },
            'Phone': { 
              rich_text: [{ text: { content: phone } }] 
            },
            'Message': { 
              rich_text: [{ text: { content: message || 'No additional message' } }] 
            },
            'Services': { 
              rich_text: [{ text: { content: Array.isArray(services) ? services.join(', ') : services } }] 
            },
            'When Needed': { 
              rich_text: [{ text: { content: needBy } }] 
            }
          }
        });
        
        console.log('Notion page created successfully:', response.id);
      } catch (notionError) {
        console.error('Notion integration error:', notionError);
        // Don't fail the entire request if Notion fails
      }
    }

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Email service not configured. Please try again later.' },
        { status: 500 }
      );
    }

    // Send email using Resend
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    try {
      await resend.emails.send({
        from: "Friday's Window Cleaning <info@fridayswindows.com>",
        to: ["info@fridayswindows.com"],
        subject: 'New Quote Request from Friday\'s Website',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #708B91;">New Quote Request</h2>
            <div style="background: #f9f8f5; padding: 20px; border-radius: 8px;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone}</p>
              <p><strong>Message:</strong></p>
              <div style="background: white; padding: 15px; border-radius: 4px; margin-top: 10px;">
                ${message.replace(/\n/g, '<br>')}
              </div>
              <p><strong>When do you need the work done by?:</strong> ${needBy}</p>
              <p><strong>Requested Services:</strong> ${Array.isArray(services) ? services.join(', ') : services}</p>
            </div>
            <p style="color: #78736E; font-size: 12px; margin-top: 20px;">
              This request was submitted from the Friday's Window Cleaning website.
            </p>
          </div>
        `
      });

      console.log('Email sent successfully via Resend');
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      return NextResponse.json(
        { error: 'Failed to send email. Please try again later.' },
        { status: 500 }
      );
    }

    // Return success response
    return NextResponse.json(
      { 
        success: true, 
        message: 'Quote request sent successfully. We\'ll get back to you soon.' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 