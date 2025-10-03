import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const contactSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters long'),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, subject, message } = contactSchema.parse(body)

    // Send to Slack webhook (if configured)
    if (process.env.SLACK_WEBHOOK_URL) {
      await sendToSlack({
        firstName,
        lastName,
        email,
        subject,
        message,
      })
    }

    // Send email notification (if configured)
    if (process.env.SENDGRID_API_KEY) {
      await sendEmailNotification({
        firstName,
        lastName,
        email,
        subject,
        message,
      })
    }

    // TODO: Save to database (Sanity, Airtable, etc.)
    // await saveContactToDatabase({ firstName, lastName, email, subject, message })

    return NextResponse.json({ 
      success: true, 
      message: 'Contact form submitted successfully' 
    })

  } catch (error) {
    console.error('Contact form submission error:', error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Validation error',
          errors: error.errors 
        },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to submit contact form' 
      },
      { status: 500 }
    )
  }
}

async function sendToSlack(data: {
  firstName: string
  lastName: string
  email: string
  subject: string
  message: string
}) {
  const slackMessage = {
    text: 'New Contact Form Submission',
    blocks: [
      {
        type: 'header',
        text: {
          type: 'plain_text',
          text: 'New Contact Form Submission',
        },
      },
      {
        type: 'section',
        fields: [
          {
            type: 'mrkdwn',
            text: `*Name:* ${data.firstName} ${data.lastName}`,
          },
          {
            type: 'mrkdwn',
            text: `*Email:* ${data.email}`,
          },
          {
            type: 'mrkdwn',
            text: `*Subject:* ${data.subject}`,
          },
        ],
      },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `*Message:*\n${data.message}`,
        },
      },
    ],
  }

  const response = await fetch(process.env.SLACK_WEBHOOK_URL!, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(slackMessage),
  })

  if (!response.ok) {
    throw new Error(`Slack webhook error: ${response.statusText}`)
  }
}

async function sendEmailNotification(data: {
  firstName: string
  lastName: string
  email: string
  subject: string
  message: string
}) {
  // This would integrate with SendGrid, Resend, or another email service
  // For now, we'll just log the email data
  console.log('Email notification would be sent:', {
    to: 'abdullah.hassan@globalnext.rocks',
    from: data.email,
    subject: `Contact Form: ${data.subject}`,
    text: `Name: ${data.firstName} ${data.lastName}\nEmail: ${data.email}\nSubject: ${data.subject}\n\nMessage:\n${data.message}`,
  })
}

