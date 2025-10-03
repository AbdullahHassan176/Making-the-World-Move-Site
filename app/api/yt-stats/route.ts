import { NextRequest, NextResponse } from 'next/server'
import { fetchVideoStats } from '@/lib/youtube/fetch'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const videoId = searchParams.get('videoId')

  if (!videoId) {
    return NextResponse.json(
      { error: 'videoId parameter is required' },
      { status: 400 }
    )
  }

  try {
    const stats = await fetchVideoStats(videoId)
    
    if (!stats) {
      return NextResponse.json(
        { error: 'Video not found or API key not configured' },
        { status: 404 }
      )
    }

    return NextResponse.json(stats)
  } catch (error) {
    console.error('YouTube stats API error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch video stats' },
      { status: 500 }
    )
  }
}

