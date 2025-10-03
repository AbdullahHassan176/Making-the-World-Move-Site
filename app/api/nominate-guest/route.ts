import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const nominationSchema = z.object({
  guestName: z.string().min(1),
  guestTitle: z.string().min(1),
  guestOrganization: z.string().min(1),
  guestBio: z.string().min(10),
  nominatorName: z.string().min(1),
  nominatorEmail: z.string().email(),
  nominatorTitle: z.string().optional(),
  nominatorOrganization: z.string().optional(),
  reason: z.string().min(10),
  dealType: z.string().optional(),
  dealValue: z.string().optional(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const nomination = nominationSchema.parse(body)

    // Save to Airtable or HubSpot
    if (process.env.AIRTABLE_API_KEY && process.env.AIRTABLE_BASE_ID) {
      await saveToAirtable(nomination)
    } else if (process.env.HUBSPOT_API_KEY) {
      await saveToHubSpot(nomination)
    } else {
      throw new Error('No lead management service configured')
    }

    // Send to Slack for notification
    if (process.env.SLACK_WEBHOOK_URL) {
      await notifySlack(nomination)
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Guest nomination submitted successfully' 
    })

  } catch (error) {
    console.error('Guest nomination error:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to submit nomination' },
      { status: 500 }
    )
  }
}

async function saveToAirtable(nomination: any) {
  const response = await fetch(
    `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${process.env.AIRTABLE_TABLE_NAME}`,
    {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.AIRTABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fields: {
          'Guest Name': nomination.guestName,
          'Guest Title': nomination.guestTitle,
          'Guest Organization': nomination.guestOrganization,
          'Guest Bio': nomination.guestBio,
          'Nominator Name': nomination.nominatorName,
          'Nominator Email': nomination.nominatorEmail,
          'Nominator Title': nomination.nominatorTitle || '',
          'Nominator Organization': nomination.nominatorOrganization || '',
          'Reason': nomination.reason,
          'Deal Type': nomination.dealType || '',
          'Deal Value': nomination.dealValue || '',
          'Status': 'New',
          'Date Submitted': new Date().toISOString(),
        },
      }),
    }
  )

  if (!response.ok) {
    throw new Error(`Airtable API error: ${response.statusText}`)
  }
}

async function saveToHubSpot(nomination: any) {
  const response = await fetch(
    'https://api.hubapi.com/crm/v3/objects/contacts',
    {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.HUBSPOT_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        properties: {
          firstname: nomination.guestName.split(' ')[0],
          lastname: nomination.guestName.split(' ').slice(1).join(' '),
          email: nomination.nominatorEmail,
          jobtitle: nomination.guestTitle,
          company: nomination.guestOrganization,
          hs_lead_status: 'NEW',
          lead_source: 'Guest Nomination',
          notes: `Guest Nomination: ${nomination.reason}`,
        },
      }),
    }
  )

  if (!response.ok) {
    throw new Error(`HubSpot API error: ${response.statusText}`)
  }
}

async function notifySlack(nomination: any) {
  const slackMessage = {
    text: 'New Guest Nomination',
    blocks: [
      {
        type: 'header',
        text: {
          type: 'plain_text',
          text: 'New Guest Nomination',
        },
      },
      {
        type: 'section',
        fields: [
          {
            type: 'mrkdwn',
            text: `*Guest:* ${nomination.guestName}`,
          },
          {
            type: 'mrkdwn',
            text: `*Title:* ${nomination.guestTitle}`,
          },
          {
            type: 'mrkdwn',
            text: `*Organization:* ${nomination.guestOrganization}`,
          },
          {
            type: 'mrkdwn',
            text: `*Nominator:* ${nomination.nominatorName}`,
          },
        ],
      },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `*Reason:*\n${nomination.reason}`,
        },
      },
    ],
  }

  await fetch(process.env.SLACK_WEBHOOK_URL!, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(slackMessage),
  })
}

