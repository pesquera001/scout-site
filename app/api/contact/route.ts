import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { Client as NotionClient } from '@notionhq/client';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, message, needBy, services, streetAddress, zipCode } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !needBy || !services) {
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
        text: `*New Quote Request*\n*Name:* ${firstName} ${lastName}\n*Email:* ${email}\n*Phone:* ${phone}\n*When Needed:* ${needBy}\n*Services:* ${(Array.isArray(services) ? services.join(', ') : services)}\n*Street Address:* ${streetAddress || ''}\n*Zip Code:* ${zipCode || ''}\n*Message:* ${message}`
      };
      await fetch(process.env.SLACK_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(slackMessage)
      });
    }

    // --- NOTION INTEGRATION ---
    console.log('Starting Notion integration check...');
    console.log('NOTION_TOKEN exists:', !!process.env.NOTION_TOKEN);
    console.log('NOTION_DATABASE_ID exists:', !!process.env.NOTION_DATABASE_ID);

    if (process.env.NOTION_TOKEN && process.env.NOTION_DATABASE_ID) {
      try {
        console.log('Creating Notion client...');
        const notion = new NotionClient({ auth: process.env.NOTION_TOKEN });
        
        console.log('Attempting to create Notion page...');
        // Create page with exact database properties
        const response = await notion.pages.create({
          parent: { database_id: process.env.NOTION_DATABASE_ID },
          properties: {
            'Customer Name': { 
              title: [{ text: { content: `${firstName} ${lastName}` } }] 
            },
            'Phone Number': { 
              phone_number: phone
            },
            'Email Address': { 
              email: email
            },
            'Service Type': { 
              multi_select: Array.isArray(services) ? services.map((s: string) => ({ name: s })) : [{ name: services }]
            },
            'Request Date': { 
              date: { start: new Date().toISOString().split('T')[0] } 
            },
            'Follow-Up Date': { 
              date: { start: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0] } // 7 days from now
            },
            'Address/Location': { 
              rich_text: [{ text: { content: 'From website form' } }] 
            },
            'Client Address': { 
              rich_text: [{ text: { content: streetAddress || '' } }] 
            },
            'Zip Code': { 
              rich_text: [{ text: { content: zipCode || '' } }] 
            },
            'Notes': { 
              rich_text: [{ text: { content: `When needed: ${needBy}\n\nAdditional message: ${message || 'No additional message'}` } }] 
            },
            'Lead Status': {
              select: { name: 'New' }
            }
          }
        });
        
        console.log('Notion page created successfully:', response.id);
      } catch (notionError: any) {
        console.error('Notion integration error details:', {
          message: notionError.message,
          code: notionError.code,
          status: notionError.status,
          body: notionError.body
        });
        // Don't fail the entire request if Notion fails
      }
    } else {
      console.log('Notion environment variables missing:', {
        hasToken: !!process.env.NOTION_TOKEN,
        hasDatabaseId: !!process.env.NOTION_DATABASE_ID
      });
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
              <p><strong>Name:</strong> ${firstName} ${lastName}</p>
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

    // Send confirmation email to customer
    try {
      await resend.emails.send({
        from: "Friday's Window Cleaning <info@fridayswindows.com>",
        to: [email],
        subject: "Received. Friday's Windows reporting for duty.",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #708B91; margin-bottom: 20px;">Hi ${firstName},</h2>
            
            <p style="color: #333; line-height: 1.6; margin-bottom: 20px;">
              Thanks for reaching out for a window cleaning quote! We've received your request and will get back to you within the day with your custom estimate.
            </p>
            
            <p style="color: #333; line-height: 1.6; margin-bottom: 20px;">
              In the meantime, feel free to check out our recent work:
            </p>
            
            <p style="margin-bottom: 20px;">
              <a href="https://www.instagram.com/fridayswindows/" style="color: #708B91; text-decoration: underline;">@https://www.instagram.com/fridayswindows/</a>
            </p>
            
            <p style="color: #333; line-height: 1.6; margin-bottom: 20px;">
              If you need to reach us directly, reply here or call/text us at <a href="tel:(480) 701-4847" style="color: #708B91; text-decoration: none;">(480) 701-4847</a>
            </p>
            
            <div style="border-top: 1px solid #e0e0e0; padding-top: 20px; margin-top: 30px;">
              <p style="color: #333; margin-bottom: 5px;">Talk soon,</p>
              <p style="color: #708B91; font-weight: bold; margin-bottom: 5px;">Aidan from Friday's Windows</p>
              <p style="color: #708B91; margin-bottom: 5px;">(480) 701-4847</p>
              <p style="color: #708B91; margin-bottom: 0;">fridayswindows.com</p>
            </div>
          </div>
        `
      });

      console.log('Confirmation email sent successfully to customer');
    } catch (confirmationEmailError) {
      console.error('Confirmation email sending failed:', confirmationEmailError);
      // Don't fail the entire request if confirmation email fails
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