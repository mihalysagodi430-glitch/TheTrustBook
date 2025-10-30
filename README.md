# TheTrustBook — Ready-to-deploy ZIP

This package contains a ready frontend and serverless API stubs for TheTrustBook project.
It's configured for Galaxy-themed UI and English language.

## Quick start (local)

1. Copy `.env.example` to `.env` and fill values.
2. Install deps: `npm install`
3. Run locally (for testing API stubs): `node server.js`
4. For full deployment use Vercel (recommended).

## Vercel deployment
1. Push this repo to GitHub.
2. Import project to Vercel and set Environment Variables (see .env.example).
3. Deploy.

## ENV variables
See `.env.example` for names and placeholders.

## Notes
- Replace OPENAI and STRIPE secret keys in Vercel environment variables.
- Do NOT commit real secret keys to GitHub.
