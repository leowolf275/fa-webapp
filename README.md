# Ryan Sim — Financial Advisor Website

A premium personal brand website for Ryan Sim, a Financial Advisor based in Singapore. Built with Next.js, Tailwind CSS v4, and Framer Motion.

## Getting Started

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customizing Content

All text, links, and placeholder content is centralized in one file:

```
src/lib/constants.ts
```

Edit this file to update:
- Site metadata (title, description, URL)
- Hero headline and subtitle
- About bio paragraphs and stats
- Contact links (Telegram, WhatsApp)
- Footer socials and disclaimer

## Replacing Photos

Photo placeholders are in the Hero and About sections. To replace them:

1. Add your photos to `public/images/`
2. Update the components in `src/components/Hero.tsx` and `src/components/About.tsx`
3. Replace the placeholder `<div>` with a Next.js `<Image>` component

## Deploying to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → Import Project
3. Select the GitHub repository
4. Vercel auto-detects Next.js — no config needed
5. Click Deploy

Custom domains can be added in the Vercel dashboard after deployment.

## Tech Stack

- **Framework:** Next.js (App Router) + TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Package Manager:** pnpm
- **Fonts:** DM Serif Display (headings) + Plus Jakarta Sans (body)
