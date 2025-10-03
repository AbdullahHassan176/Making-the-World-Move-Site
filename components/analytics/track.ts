export type AppEvent =
  | { name: 'hero_cta_click'; props: { cta_type: 'watch' | 'subscribe' | 'nominate' } }
  | { name: 'episode_play'; props: { episodeId: string; source?: string; chapter?: string } }
  | { name: 'episode_progress'; props: { episodeId: string; percent: 25 | 50 | 75 | 100 } }
  | { name: 'short_download'; props: { assetId: string; episodeId: string } }
  | { name: 'glossary_open'; props: { term: string } }
  | { name: 'stakeholder_map_use'; props: { elements: number; exportType: 'png' | 'pdf' } }
  | { name: 'poll_vote'; props: { episodeId: string; optionId: string } }
  | { name: 'newsletter_subscribe'; props: { source: string; ref?: string } }
  | { name: 'referral_signup'; props: { referrerId: string } }
  | { name: 'calendly_book'; props: { purpose: string } }
  | { name: 'media_kit_download'; props: { version: string } }
  | { name: 'question_submit'; props: { episodeId?: string; length: number } }
  | { name: 'feature_upvote'; props: { featureId: string } }
  | { name: 'episode_click'; props: { episode_id: string; episode_title: string; source: string } }
  | { name: 'filter_applied'; props: { filter_type: string } }
  | { name: 'episode_search'; props: { search_term: string; results_count: number } }
  | { name: 'sort_filter_changed'; props: { filter_type: string; filter_value: string } }
  | { name: 'tab_switch'; props: { tab_name: string } }
  | { name: 'glossary_search'; props: { search_term: string } }
  | { name: 'clause_expand'; props: { clause_type: string } }
  | { name: 'guest_profile_click'; props: { guest_id: string } }
  | { name: 'question_vote'; props: { question_id: string; vote_type: 'upvote' | 'downvote' } }
  | { name: 'episode_share'; props: { episode_id: string; platform: string } }
  | { name: 'transcript_search'; props: { episode_id: string; query: string } }
  | { name: 'contact_click'; props: { source: string; type: 'phone' | 'email' | 'social' } }
  | { name: 'partnership_learn_more'; props: { partnership_type: string } }
  | { name: 'partnership_discussion_start'; props: { partnership_type: string } }
  | { name: 'partnership_kit_download'; props: { partnership_type: string } }
  | { name: 'partnership_kit_downloaded'; props: { version: string; source: string } }

export function track<T extends AppEvent>(event: T) {
  if (typeof window === 'undefined') return

  // Send to Google Analytics
  if (window.dataLayer) {
    window.dataLayer.push({
      event: event.name,
      ...event.props,
    })
  }

  // Send to PostHog
  if (window.posthog) {
    window.posthog.capture(event.name, event.props)
  }

  // Development logging
  if (process.env.NODE_ENV === 'development') {
    console.log(`Analytics Event: ${event.name}`, event.props)
  }
}

// Helper functions for common tracking patterns
export const trackHeroCTA = (ctaType: 'watch' | 'subscribe' | 'nominate') => {
  track({ name: 'hero_cta_click', props: { cta_type: ctaType } })
}

export const trackEpisodePlay = (episodeId: string, source?: string) => {
  track({ name: 'episode_play', props: { episodeId, source } })
}

export const trackNewsletterSubscribe = (source: string, ref?: string) => {
  track({ name: 'newsletter_subscribe', props: { source, ref } })
}

export const trackGlossaryOpen = (term: string) => {
  track({ name: 'glossary_open', props: { term } })
}

export const trackStakeholderMapUse = (elements: number, exportType: 'png' | 'pdf') => {
  track({ name: 'stakeholder_map_use', props: { elements, exportType } })
}

