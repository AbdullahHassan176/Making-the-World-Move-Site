#!/usr/bin/env tsx

import { createClient } from '@sanity/client'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  token: process.env.SANITY_API_WRITE_TOKEN!,
  useCdn: false,
  apiVersion: '2023-12-01',
})

const sampleData = {
  episodes: [
    {
      _type: 'episode',
      title: 'The $50B Energy Merger',
      slug: { current: 'energy-mega-merger' },
      summary: 'How Sarah Mitchell orchestrated the largest energy deal of the decade, balancing stakeholder interests, regulatory demands, and market pressures to close a transformational merger.',
      videoId: 'dQw4w9WgXcQ', // Replace with actual YouTube video ID
      region: 'North America',
      valueBand: '$10B+',
      publishedAt: '2024-12-15T10:00:00Z',
      chapters: [
        { title: 'Stakeholder Map', startTime: 135 },
        { title: 'Term Sheet Negotiations', startTime: 522 },
        { title: 'Regulatory Pressure', startTime: 1110 },
        { title: 'The Close', startTime: 1938 },
      ],
      tags: ['M&A', 'Energy', 'Regulatory'],
      coverImage: {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: 'image-energy-merger', // This would be a real asset reference
        },
      },
    },
    {
      _type: 'episode',
      title: 'The Impossible Negotiation',
      slug: { current: 'impossible-negotiation' },
      summary: 'Behind the scenes of a historic peace agreement that changed a region forever. Ambassador Chen reveals the diplomatic strategies that brought decades of conflict to an end.',
      videoId: 'dQw4w9WgXcQ',
      region: 'Asia Pacific',
      valueBand: 'Historic',
      publishedAt: '2024-12-08T10:00:00Z',
      chapters: [
        { title: 'The Stalemate', startTime: 120 },
        { title: 'Building Trust', startTime: 480 },
        { title: 'The Breakthrough', startTime: 1200 },
        { title: 'Signing Ceremony', startTime: 2400 },
      ],
      tags: ['Peace Treaty', 'Diplomacy'],
      coverImage: {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: 'image-peace-treaty',
        },
      },
    },
  ],
  guests: [
    {
      _type: 'guest',
      name: 'Sarah Mitchell',
      slug: { current: 'sarah-mitchell' },
      role: 'CEO',
      organization: 'EnergyCore',
      bio: 'Sarah Mitchell is the CEO of EnergyCore, a leading renewable energy company. She has orchestrated over $100B in energy sector deals and is known for her ability to navigate complex regulatory environments.',
      headshot: {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: 'image-sarah-mitchell',
        },
      },
      featuredDeals: ['$50B Energy Merger', '$15B Solar Acquisition'],
    },
    {
      _type: 'guest',
      name: 'Ambassador Chen',
      slug: { current: 'ambassador-chen' },
      role: 'Former UN Diplomat',
      organization: 'United Nations',
      bio: 'Ambassador Chen served as a UN diplomat for over 20 years, specializing in conflict resolution and peace negotiations. He has been instrumental in brokering peace agreements across multiple regions.',
      headshot: {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: 'image-ambassador-chen',
        },
      },
      featuredDeals: ['Historic Peace Agreement', 'Regional Trade Pact'],
    },
  ],
  terms: [
    {
      _type: 'term',
      name: 'Power Purchase Agreement (PPA)',
      slug: { current: 'power-purchase-agreement' },
      definition: 'A contract between an electricity generator and purchaser that defines the terms of the sale of electricity over a period of time.',
      examples: [
        '20-year PPA for solar farm output',
        'Corporate PPA for renewable energy',
        'Virtual PPA for carbon neutrality',
      ],
      category: 'Energy',
    },
    {
      _type: 'term',
      name: 'Waterfall Structure',
      slug: { current: 'waterfall-structure' },
      definition: 'A method of distributing returns to investors that establishes a hierarchy of payment priorities.',
      examples: [
        'Preferred return to LPs before GP carry',
        'Hurdle rate before profit sharing',
        'Catch-up provisions for GP',
      ],
      category: 'Finance',
    },
  ],
  dealTags: [
    { _type: 'dealTag', name: 'M&A', category: 'Corporate' },
    { _type: 'dealTag', name: 'Peace Treaty', category: 'Diplomatic' },
    { _type: 'dealTag', name: 'Energy Contract', category: 'Infrastructure' },
    { _type: 'dealTag', name: 'Tech Acquisition', category: 'Technology' },
    { _type: 'dealTag', name: 'Media Rights', category: 'Entertainment' },
    { _type: 'dealTag', name: 'Real Estate', category: 'Property' },
    { _type: 'dealTag', name: 'Pharma', category: 'Healthcare' },
    { _type: 'dealTag', name: 'FinTech', category: 'Financial' },
  ],
}

async function seedData() {
  console.log('🌱 Starting data seed...')

  try {
    // Create deal tags first
    console.log('Creating deal tags...')
    for (const tag of sampleData.dealTags) {
      await client.create(tag)
    }

    // Create guests
    console.log('Creating guests...')
    for (const guest of sampleData.guests) {
      await client.create(guest)
    }

    // Create terms
    console.log('Creating terms...')
    for (const term of sampleData.terms) {
      await client.create(term)
    }

    // Create episodes
    console.log('Creating episodes...')
    for (const episode of sampleData.episodes) {
      await client.create(episode)
    }

    console.log('✅ Data seed completed successfully!')
  } catch (error) {
    console.error('❌ Error seeding data:', error)
    process.exit(1)
  }
}

// Run the seed script
if (require.main === module) {
  seedData()
}

export { seedData }

