# Synkris - AI Voice Agent Platform

**Synkris** is an AI-powered SaaS platform that enables businesses to automate inbound and outbound calls using intelligent AI voice agents. Built with Next.js 15, React 19, and Tailwind CSS v4, it provides 24/7 call handling, smart appointment booking, lead qualification, and seamless CRM integration.

---

## 🎯 Project Overview

Synkris transforms how businesses handle phone communications by deploying AI voice agents that understand intent, respond naturally, and take action instantly. The platform handles appointment scheduling, customer queries, lead qualification, and follow-ups without human intervention.

### Core Value Proposition

- **24/7 Automated Call Handling**: Never miss a call with AI agents that answer, route, and resolve queries around the clock
- **Human-Like Conversations**: Natural, fluent speech across multiple languages and accents
- **Smart Automation**: Automated appointment booking, rescheduling, and confirmation synced with calendars
- **Lead Management**: Qualify leads, ask the right questions, and follow up consistently
- **Analytics & Insights**: Track call outcomes, conversation metrics, and performance with CRM integrations

---

## 🏗️ Architecture & Flow

### Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | Next.js 15.2.6 (App Router, React Server Components) |
| **UI Library** | React 19 |
| **Styling** | Tailwind CSS v4 with custom theme system |
| **AI Integration** | Vercel AI SDK with OpenAI GPT-4o-mini |
| **Authentication** | NextAuth v5 (GitHub, Google OAuth) |
| **Database** | PostgreSQL with Drizzle ORM |
| **Payments** | Stripe integration |
| **Deployment** | Vercel (optimized) |

### Application Structure

```
├── (site) - Marketing Website
│   ├── / - Homepage (hero, features, pricing, FAQ)
│   ├── /signin, /signup - Authentication pages
│   ├── /reset-password - Password recovery
│   ├── /contact - Contact form
│   ├── /pricing - Pricing plans
│   └── /privacy - Privacy policy
│
├── (generator) - AI Chat Interface [Currently Disabled in Demo]
│   ├── /text-generator - Main chat interface
│   └── /text-generator/[chatId] - Dynamic chat sessions
│
└── /api/chat - AI conversation endpoint
```

### Component Architecture

**Layout System:**
- `RootLayout`: Global theme provider, Toaster notifications, Onest font
- `SiteLayout`: Header + Footer for marketing pages
- `GeneratorLayout`: Returns 404 (disabled in free version)

**Key Components:**
- **GeneratorWrapper**: Chat UI container with collapsible sidebars
  - Left sidebar: Navigation and new chat button
  - Right sidebar: Chat history and session management
- **RenderMessage**: Displays AI/user messages with markdown support and scroll-to-bottom behavior
- **GeneratorInput**: Multi-line textarea with submit handling
- **GeneratorHeader**: Top navigation with sidebar toggles
- **AiResponse**: Renders AI messages with copy-to-clipboard functionality
- **UserMessage**: Displays user messages with edit capability

### Data Flow

1. **User Authentication Flow:**
   ```
   User → SignIn/SignUp Page → NextAuth → OAuth Providers (Google/GitHub)
   → Session Creation → Redirect to Dashboard/Generator
   ```

2. **AI Chat Flow (When Enabled):**
   ```
   User Input → GeneratorInput → useChat Hook → /api/chat Endpoint
   → OpenAI GPT-4o-mini → Streaming Response → RenderMessage → UI Update
   ```

3. **State Management:**
   - `useChat` hook from AI SDK for chat state (messages, input, loading)
   - `useState` for UI interactions (sidebar toggles, thinking state)
   - `next-themes` for dark/light mode persistence
   - `use-stick-to-bottom` for auto-scrolling chat messages

---

## 🚀 Key Features

### AI Voice Capabilities
- **Real-Time Conversations**: Human-like AI voice agents that understand context and intent
- **24/7 Availability**: Never miss a call with round-the-clock automated handling
- **Multi-Language Support**: Fluent conversations across languages and accents
- **Call Routing**: Intelligent routing based on query type and priority

### Business Automation
- **Appointment Booking**: Automated scheduling, rescheduling, and confirmation
- **Lead Qualification**: AI-driven qualification questions and scoring
- **Follow-Up Management**: Consistent follow-ups without manual intervention
- **CRM Integration**: Seamless data sync with existing tools and workflows

### Analytics & Insights
- **Call Metrics**: Track call duration, outcomes, and resolution rates
- **Performance Dashboard**: Monitor AI agent effectiveness and customer satisfaction
- **Conversation Analysis**: Identify trends, common queries, and improvement areas

---

## 💰 Pricing Plans

### Starter - £29/month
- 500 call minutes per month
- AI-powered call handling
- Appointment booking & rescheduling
- Basic call analytics
- Email support

### Growth - £79/month
- Higher call volumes
- Advanced analytics
- Priority support
- Custom integrations

### Enterprise - Custom Pricing
- Unlimited call minutes
- Dedicated account manager
- Custom AI training
- White-label options

---

## 📦 Installation & Setup

### Prerequisites
- Node.js 20+ 
- npm (package manager)
- PostgreSQL database (for full features)
- OpenAI API key (for AI functionality)
- Stripe account (for payments)

### Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Synkris_website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**

   Create a `.env` file in the root directory:

   ```bash
   # Database
   DATABASE_URL="postgresql://user:password@localhost:5432/synkris"

   # NextAuth
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your-secret-key"

   # OAuth Providers
   GOOGLE_CLIENT_ID="your-google-client-id"
   GOOGLE_CLIENT_SECRET="your-google-client-secret"
   GITHUB_CLIENT_ID="your-github-client-id"
   GITHUB_CLIENT_SECRET="your-github-client-secret"

   # OpenAI
   OPENAI_API_KEY="sk-..."

   # Stripe
   STRIPE_SECRET_KEY="sk_test_..."
   STRIPE_WEBHOOK_SECRET="whsec_..."
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_..."
   ```

4. **Database Setup**
   ```bash
   npm run db:push      # Push schema to database
   npm run db:generate  # Generate migrations
   npm run db:migrate   # Run migrations
   ```

5. **Run Development Server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

6. **Build for Production**
   ```bash
   npm run build
   npm run start
   ```

---

## 📁 Project Structure

```
Synkris_website/
├── public/              # Static assets (images, logos)
├── src/
│   ├── app/             # Next.js app directory
│   │   ├── (site)/      # Marketing pages with header/footer
│   │   ├── (generator)/ # AI chat interface (disabled)
│   │   ├── api/         # API routes
│   │   ├── providers/   # Context providers
│   │   └── globals.css  # Global styles
│   │
│   ├── components/      # Reusable UI components
│   │   ├── generator/   # Chat interface components
│   │   ├── layout/      # Header, footer, navigation
│   │   ├── sections/    # Homepage sections
│   │   └── ui/          # Base UI components
│   │
│   ├── lib/             # Utilities and configurations
│   │   ├── ai/          # AI model configuration
│   │   └── zod/         # Validation schemas
│   │
│   ├── hooks/           # Custom React hooks
│   ├── context/         # React context definitions
│   ├── icons/           # Icon components
│   └── assets/          # SVG assets
│
├── next.config.ts       # Next.js configuration
├── tailwind.config.ts   # Tailwind CSS configuration
└── tsconfig.json        # TypeScript configuration
```

---

## 🛠️ Development

### Available Scripts

```bash
npm run dev           # Start development server
npm run build         # Build for production
npm run start         # Start production server
npm run lint          # Run ESLint
npm run db:push       # Push database schema
npm run db:generate   # Generate database migrations
npm run db:migrate    # Run database migrations
npm run stripe:listen # Listen for Stripe webhooks (development)
```

### Route Groups

- **(site)**: Public marketing pages with full header/footer layout
- **(generator)**: Protected AI chat interface (requires authentication)
- **(auth)**: Authentication pages (signin, signup, reset-password)

### Key Dependencies

- **AI & Chat**: `ai`, `@ai-sdk/openai`, `@ai-sdk/react`, `openai`
- **Auth**: `next-auth`
- **UI**: `next-themes`, `sonner`, `fslightbox-react`
- **Forms**: `react-hook-form`, `@hookform/resolvers`
- **Database**: `pg` (PostgreSQL)
- **Styling**: `tailwindcss`, `clsx`, `tailwind-merge`
- **Utils**: `copy-text-to-clipboard`, `use-stick-to-bottom`

---

## 🎨 Customization

### Theming

The project uses Tailwind CSS v4 with a custom dark mode implementation via `next-themes`. Theme toggle is available in the header.

### AI Model Configuration

Edit `src/lib/ai/model.ts` to change the AI model:

```typescript
import { openai } from '@ai-sdk/openai';

export const AI_MODEL = openai('gpt-4o-mini', {
  structuredOutputs: true,
});
```

### Content Updates

- **Homepage sections**: `src/components/sections/`
- **Pricing plans**: `src/components/sections/pricing/data.ts`
- **Core features**: `src/components/sections/core-features/data.ts`
- **Navigation**: `src/components/layout/header/nav-items.ts`

---

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Other Platforms

The project can be deployed on any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

---

## 📄 License

MIT License - See LICENSE file for details.

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---


**Last Updated**: February 2026
