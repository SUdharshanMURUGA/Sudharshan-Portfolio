# My Portfolio

Personal portfolio site I built to showcase my work as a Data Engineer. Been wanting to make something that actually looks good for a while — this is it.

Built with Next.js and Tailwind. Dark theme, some animations, fully responsive.

---

## Stack I used

- Next.js 15
- TypeScript
- Tailwind CSS
- Framer Motion (for animations)
- Lucide for icons

---

## Running it locally

You need Node.js 18+. Then:

```bash
npm install
npm run dev
```

Opens at `http://localhost:3000`.

To build for production:

```bash
npm run build
npm start
```

---

## Folder structure

```
src/
  app/          → layout, page, global styles
  components/
    layout/     → Navbar, Footer
    sections/   → each page section as its own component
    ui/         → small reusable bits (canvas bg, cursor, etc.)
  data/
    portfolio.ts  → all my actual content lives here
  lib/
    utils.ts
```

---

## Updating content

Everything personal is in `src/data/portfolio.ts` — that's the only file I need to touch when something changes. Skills, projects, experience, certs, timeline, contact info — all in one place.

---

## Deploy

I use Vercel. Just push to GitHub and it deploys automatically. Or:

```bash
npx vercel
```

---

## Things I want to add later

- [ ] Blog section (maybe MDX)
- [ ] Dark/light toggle
- [ ] More projects as I build them
- [ ] Better mobile animations
