# Making the World Move - Next.js Web Application

A production-ready web application for the show "Making the World Move" - a dark, cinematic platform showcasing complex deal negotiations and transformational business stories. Founded by Abdullah Hassan, an entrepreneur and journalist with over 15 years of experience in deal-making and business journalism.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm
- Sanity account
- PostHog account (optional)

### Installation

```bash
# Clone and install dependencies
git clone <repository-url>
cd making-the-world-move
pnpm install

# Copy environment variables
cp env.example .env.local

# Configure your environment variables (see .env.example)
```

### Development Commands

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Type checking
pnpm typecheck

# Linting
pnpm lint

# Seed sample data
pnpm seed

# Run tests
pnpm test

# E2E tests
pnpm test:e2e
```

## 📁 Project Structure

```
/app
  /(site)                    # Main site pages
    /episodes               # Episodes listing and detail pages
    /deal-library           # Interactive glossary and tools
    /guests                 # Guest profiles
    /join                   # Newsletter signup
    /partnerships           # Partnership information
    /contact                # Contact forms
    /api                    # API routes for integrations
  /studio                   # Sanity Studio embedded
/components
  /analytics               # PostHog and GA4 tracking
  /layout                  # Navigation and footer
  /landing                 # Homepage components
  /episodes                # Episode-related components
  /library                 # Deal library components
  /forms                   # Form components
  /ui                      # shadcn/ui components
/lib
  /cms                    # Sanity client and queries
  /youtube                # YouTube API integration
  /utils                  # Utility functions
/public
  /og                     # Open Graph templates
  /images                 # Static images
```

## 🎨 Design System

### Dark Theme
- **Primary**: Charcoal/near-black backgrounds
- **Accent**: White text with gray variations
- **Interactive**: Subtle glows and hover effects
- **Typography**: Inter font family
- **Spacing**: Cinematic spacing with generous whitespace

### Key Components
- **Hero Section**: Abdullah Hassan's professional portrait with gradient overlays
- **Live Metrics**: Animated counters for engagement
- **Progress Ring**: SVG donut chart for season progress
- **Episode Cards**: Hover effects with deal information
- **Interactive Glossary**: Tooltips and search functionality
- **Stakeholder Map**: Drag-and-drop canvas for deal mapping

## 🔧 Configuration

### Environment Variables

```bash
# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_WRITE_TOKEN=your_write_token

# Analytics
NEXT_PUBLIC_POSTHOG_KEY=your_posthog_key
NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# YouTube Integration
YOUTUBE_API_KEY=your_youtube_api_key
YOUTUBE_CHANNEL_ID=your_channel_id

# Newsletter (choose one)
CONVERTKIT_API_KEY=your_convertkit_key
CONVERTKIT_FORM_ID=your_form_id
MAILERLITE_API_KEY=your_mailerlite_key

# Integrations
SLACK_WEBHOOK_URL=your_slack_webhook_url
AIRTABLE_API_KEY=your_airtable_key
HUBSPOT_API_KEY=your_hubspot_key
```

### Sanity Setup

1. Create a new Sanity project
2. Update environment variables
3. Run the seed script to populate sample data
4. Access Sanity Studio at `/studio`

### Analytics Setup

1. **PostHog**: Create project and add API key
2. **Google Analytics**: Add measurement ID
3. **Custom Events**: All user interactions are tracked

## 📊 Analytics & Tracking

### Event Types
- `hero_cta_click` - Hero section button clicks
- `episode_play` - Video play events
- `episode_progress` - Video completion tracking
- `glossary_open` - Term definition views
- `stakeholder_map_use` - Map builder interactions
- `newsletter_subscribe` - Email signups
- `question_submit` - Q&A submissions

### Implementation
```typescript
import { track } from '@/components/analytics/track'

// Track user interactions
track({ 
  name: 'episode_play', 
  props: { episodeId: 'ep-1', source: 'hero' } 
})
```

## 🎬 Content Management

### Sanity Schemas
- **Episode**: Title, guest, video, chapters, transcript
- **Guest**: Name, role, organization, bio, headshot
- **Term**: Definition, examples, related terms
- **Question**: User-submitted questions for guests
- **Deal Tag**: Categorization for episodes

### Content Types
```typescript
interface Episode {
  title: string
  slug: string
  guest: Reference<Guest>
  summary: string
  videoId: string
  audioUrl?: string
  tags: DealTag[]
  region: string
  valueBand: string
  publishedAt: string
  chapters: Chapter[]
  resources: Resource[]
  transcript: string
  coverImage: Image
}
```

## 🚀 Deployment

### Azure Static Web Apps
```bash
# Install SWA CLI
npm install -g @azure/static-web-apps-cli

# Deploy
swa deploy
```

### Vercel
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

### Environment Setup
- Configure all environment variables in deployment platform
- Set up webhook URLs for Sanity
- Configure domain and SSL certificates

## 🧪 Testing

### Unit Tests
```bash
pnpm test
```

### E2E Tests
```bash
pnpm test:e2e
```

### Test Coverage
- Analytics tracking functions
- Form validation
- API route handlers
- Component rendering

## 📱 Responsive Design

### Breakpoints
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

### Mobile Optimizations
- Touch-friendly interactions
- Optimized images
- Reduced animations for performance
- Accessible navigation

## ♿ Accessibility

### Standards
- WCAG 2.1 AA compliance
- 14:1 contrast ratio for text
- Keyboard navigation support
- Screen reader compatibility
- Focus management

### Implementation
- Semantic HTML structure
- ARIA labels and roles
- Alt text for all images
- Skip navigation links

## 🔒 Security

### Best Practices
- Environment variable validation
- API route protection
- Content sanitization
- CORS configuration
- Rate limiting

### Data Protection
- No sensitive data in client code
- Secure API endpoints
- Input validation with Zod
- CSRF protection

## 📈 Performance

### Optimization
- Image optimization with Next.js Image
- Code splitting and lazy loading
- CDN for static assets
- Caching strategies
- Bundle analysis

### Metrics
- Lighthouse score: 90+ desktop
- Core Web Vitals compliance
- First Contentful Paint < 1.5s
- Largest Contentful Paint < 2.5s

## 🛠 Development

### Code Quality
- TypeScript strict mode
- ESLint + Prettier
- Husky pre-commit hooks
- Conventional commits

### Git Workflow
```bash
# Feature development
git checkout -b feature/episode-detail
git commit -m "feat: add episode detail page"
git push origin feature/episode-detail
```

## 📞 Support

### Documentation
- Component documentation in code
- API documentation with examples
- Deployment guides
- Troubleshooting guides

### Contact
- GitHub Issues for bugs
- Discussions for features
- Email for partnerships

## 📄 License

© 2024 Making the World Move. All rights reserved.

---

**Built with ❤️ using Next.js 14, TypeScript, Tailwind CSS, and Sanity CMS**