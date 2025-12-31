# Short Video Production Playbook

An interactive Next.js application that helps creators design, shoot, and ship high-impact short videos. Plan your timeline, generate a hook-first script outline, curate shot lists, and prep distribution strategies—all in one place.

## Stack

- Next.js 16 (App Router)
- React 18 + TypeScript
- Tailwind CSS
- Framer Motion

## Local Development

```bash
npm install
npm run dev
```

## Build & Lint

```bash
npm run lint
npm run build
```

## Deploy

```bash
vercel deploy --prod --yes --token $VERCEL_TOKEN --name agentic-c44e5d04
```

After deployment, verify:

```bash
curl https://agentic-c44e5d04.vercel.app
```
