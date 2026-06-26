# Samuel Sindell — Personal Website

Dark, editorial, single-page personal site. Blended personal brand + advisory
lead-gen for **Richmond Capital Advisory** (Dubai HNW property).

Design DNA: Justin Welsh (single column, serif, generous whitespace) with a
warm-gold accent for the real-estate register.

## Run it

```bash
cd "personal-website"
npm install
npm start
```

Then open **http://localhost:3000**. Use `npm run dev` for auto-reload while editing.

## Where to change things

| You want to change…            | Edit this file                         |
| ------------------------------ | -------------------------------------- |
| **Any copy / text**            | `content/site.js`                      |
| Your LinkedIn / booking links  | `content/site.js` → `cta` block (`// TODO`) |
| Your photo                     | drop `portrait.jpg` in `public/img/`, then point `hero.portrait` to `/img/portrait.jpg` |
| Layout / markup                | `views/index.ejs`                      |
| Colours, fonts, spacing        | `public/css/styles.css` (`:root` vars at the top) |
| Scroll animations / mobile nav | `public/js/main.js`                    |

## Still to finalise (`// TODO` in `content/site.js`)

- **Book a call** destination — Calendly link or contact email
- **LinkedIn URL** — your real profile
- **RCA website URL**
- **Your photo** — replace the placeholder portrait
- **Testimonials** — swap in real client quotes once collected
- **Insights** — link the three essays as you publish them

## Structure

```
personal-website/
├─ server.js            # Express server (renders one page)
├─ content/site.js      # ALL copy lives here — edit text without touching markup
├─ views/index.ejs      # page template
├─ public/
│  ├─ css/styles.css    # dark editorial theme
│  ├─ js/main.js        # reveal-on-scroll + mobile nav
│  └─ img/portrait.svg  # placeholder — replace with your photo
└─ package.json
```
