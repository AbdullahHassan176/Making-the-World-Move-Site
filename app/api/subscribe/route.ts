import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const subscribeSchema = z.object({
  email: z.string().email(),
  source: z.string().optional(),
  ref: z.string().optional(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, source = 'website', ref } = subscribeSchema.parse(body)

    // Choose between ConvertKit or MailerLite based on environment
    const useConvertKit = process.env.CONVERTKIT_API_KEY && process.env.CONVERTKIT_FORM_ID
    const useMailerLite = process.env.MAILERLITE_API_KEY && process.env.MAILERLITE_GROUP_ID

    if (useConvertKit) {
      await subscribeToConvertKit(email, source, ref)
    } else if (useMailerLite) {
      await subscribeToMailerLite(email, source, ref)
    } else {
      throw new Error('No newsletter service configured')
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Successfully subscribed to newsletter' 
    })

  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to subscribe' },
      { status: 500 }
    )
  }
}

async function subscribeToConvertKit(email: string, source: string, ref?: string) {
  const response = await fetch(
    `https://api.convertkit.com/v3/forms/${process.env.CONVERTKIT_FORM_ID}/subscribe`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        api_key: process.env.CONVERTKIT_API_KEY,
        email,
        fields: {
          source,
          ref: ref || '',
        },
      }),
    }
  )

  if (!response.ok) {
    throw new Error(`ConvertKit API error: ${response.statusText}`)
  }
}

async function subscribeToMailerLite(email: string, source: string, ref?: string) {
  const response = await fetch(
    `https://api.mailerlite.com/api/v2/groups/${process.env.MAILERLITE_GROUP_ID}/subscribers`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-MailerLite-ApiKey': process.env.MAILERLITE_API_KEY!,
      },
      body: JSON.stringify({
        email,
        fields: {
          source,
          ref: ref || '',
        },
      }),
    }
  )

  if (!response.ok) {
    throw new Error(`MailerLite API error: ${response.statusText}`)
  }
}

