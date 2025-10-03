interface YouTubeStats {
  viewCount: number
  likeCount: number
  commentCount: number
  duration: string
  publishedAt: string
  chapters: Chapter[]
  retention?: RetentionData[]
}

interface Chapter {
  title: string
  startTime: number
  endTime?: number
}

interface RetentionData {
  time: number
  retention: number
}

export async function fetchVideoStats(videoId: string): Promise<YouTubeStats | null> {
  if (!process.env.YOUTUBE_API_KEY) {
    console.warn('YouTube API key not configured')
    return null
  }

  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=statistics,contentDetails,snippet&key=${process.env.YOUTUBE_API_KEY}`
    )

    if (!response.ok) {
      throw new Error(`YouTube API error: ${response.statusText}`)
    }

    const data = await response.json()
    
    if (!data.items || data.items.length === 0) {
      return null
    }

    const video = data.items[0]
    const stats = video.statistics
    const contentDetails = video.contentDetails
    const snippet = video.snippet

    // Parse chapters from description
    const chapters = parseChaptersFromDescription(snippet.description)

    return {
      viewCount: parseInt(stats.viewCount) || 0,
      likeCount: parseInt(stats.likeCount) || 0,
      commentCount: parseInt(stats.commentCount) || 0,
      duration: contentDetails.duration,
      publishedAt: snippet.publishedAt,
      chapters,
    }
  } catch (error) {
    console.error('Error fetching YouTube stats:', error)
    return null
  }
}

export async function fetchChannelStats(): Promise<{
  subscriberCount: number
  videoCount: number
  viewCount: number
} | null> {
  if (!process.env.YOUTUBE_API_KEY || !process.env.YOUTUBE_CHANNEL_ID) {
    console.warn('YouTube API key or channel ID not configured')
    return null
  }

  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?id=${process.env.YOUTUBE_CHANNEL_ID}&part=statistics&key=${process.env.YOUTUBE_API_KEY}`
    )

    if (!response.ok) {
      throw new Error(`YouTube API error: ${response.statusText}`)
    }

    const data = await response.json()
    
    if (!data.items || data.items.length === 0) {
      return null
    }

    const stats = data.items[0].statistics

    return {
      subscriberCount: parseInt(stats.subscriberCount) || 0,
      videoCount: parseInt(stats.videoCount) || 0,
      viewCount: parseInt(stats.viewCount) || 0,
    }
  } catch (error) {
    console.error('Error fetching channel stats:', error)
    return null
  }
}

function parseChaptersFromDescription(description: string): Chapter[] {
  const chapters: Chapter[] = []
  
  // Look for timestamp patterns like "02:15 Stakeholder Map" or "2:15 Stakeholder Map"
  const timestampRegex = /(\d{1,2}:\d{2})\s+(.+)/g
  let match

  while ((match = timestampRegex.exec(description)) !== null) {
    const timeString = match[1]
    const title = match[2].trim()
    
    // Convert time string to seconds
    const [minutes, seconds] = timeString.split(':').map(Number)
    const startTime = minutes * 60 + seconds
    
    chapters.push({
      title,
      startTime,
    })
  }

  // Add end times for chapters (next chapter start time - 1 second)
  for (let i = 0; i < chapters.length; i++) {
    if (i < chapters.length - 1) {
      chapters[i].endTime = chapters[i + 1].startTime - 1
    }
  }

  return chapters
}

// Mock retention data for development
export function getMockRetentionData(): RetentionData[] {
  return [
    { time: 0, retention: 100 },
    { time: 300, retention: 95 },
    { time: 600, retention: 87 },
    { time: 900, retention: 92 },
    { time: 1200, retention: 78 },
    { time: 1500, retention: 65 },
    { time: 1800, retention: 58 },
    { time: 2100, retention: 45 },
    { time: 2400, retention: 38 },
    { time: 2700, retention: 32 },
  ]
}

