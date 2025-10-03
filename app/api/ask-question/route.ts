import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const questionSchema = z.object({
  authorName: z.string().min(1),
  authorEmail: z.string().email().optional(),
  targetEpisode: z.string().optional(),
  text: z.string().min(10),
  category: z.string().optional(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { authorName, authorEmail, targetEpisode, text, category } = questionSchema.parse(body)

    // Send to Slack webhook
    if (process.env.SLACK_WEBHOOK_URL) {
      await sendToSlack({
        authorName,
        authorEmail,
        targetEpisode,
        text,
        category,
      })
    }

    // TODO: Save to Sanity CMS
    // await saveQuestionToSanity({ authorName, authorEmail, targetEpisode, text, category })

    return NextResponse.json({ 
      success: true, 
      message: 'Question submitted successfully' 
    })

  } catch (error) {
    console.error('Question submission error:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to submit question' },
      { status: 500 }
    )
  }
}

async function sendToSlack(data: {
  authorName: string
  authorEmail?: string
  targetEpisode?: string
  text: string
  category?: string
}) {
  const slackMessage = {
    text: 'New Question Submitted',
    blocks: [
      {
        type: 'header',
        text: {
          type: 'plain_text',
          text: 'New Question for Making the World Move',
        },
      },
      {
        type: 'section',
        fields: [
          {
            type: 'mrkdwn',
            text: `*Author:* ${data.authorName}`,
          },
          {
            type: 'mrkdwn',
            text: `*Email:* ${data.authorEmail || 'Not provided'}`,
          },
          {
            type: 'mrkdwn',
            text: `*Target Episode:* ${data.targetEpisode || 'Any guest'}`,
          },
          {
            type: 'mrkdwn',
            text: `*Category:* ${data.category || 'General'}`,
          },
        ],
      },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `*Question:*\n${data.text}`,
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

