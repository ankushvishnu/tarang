# Tarang Musicals – Project Context

## About the Client
- **Store name:** Tarang Musicals
- **Type:** Premium musical instrument store
- **Location:** Magarpatta, Hadapsar, Pune, Maharashtra, India
- **Phone:** +91 12345 67890
- **Email:** info@tarangmusicals.com
- **Social:** @tarangmusicals (Facebook, Instagram, Twitter)

---

## Project Overview
A single-page website built as a React (JSX) artifact and also packaged as a **Vite + React project** ready for Vercel deployment.

### Deliverables produced
| File | Description |
|---|---|
| `tarang-musicals.jsx` | Full single-file React component (artifact) |
| `tarang-musicals.zip` | Vercel-ready Vite project (unzip → npm install → deploy) |

---

## Design Decisions

| Decision | Choice |
|---|---|
| Tone | Elegant & Premium |
| Primary font | **Cormorant Garamond** (light weight, uppercase, wide tracking) |
| Body font | **Lora** (italic, serif) |
| Color scheme | Lavender/purple palette (see below) |
| Navbar | Simple top navbar (NOT sticky... wait, it IS sticky via `position: sticky`) |
| Logo | Text + Music icon (SVG inline) |
| Hero background | Clean gradient with floating music notes |

### Color Palette
```
#D1C8F3 — Light lavender (main background)
#AE9CEE — Medium pastel purple (primary accent)
#D2C9F3 — Soft lavender variation
#AF9EEE — Slightly deeper purple
#AD9BED — Muted lavender tone
#2D1B69 — Dark purple (text, footer background)
#4a3580 — Mid dark purple (body text)
#6b52a8 — Light purple (secondary text)
```

---

## Sections (top to bottom)

1. **Navbar** — Logo (Music icon + "Tarang Musicals"), nav links (About, Products, Services, Contact). "Visit Store" CTA was removed per client request.
2. **Hero** — Large title, subheading, "Contact Us" + "Visit Store" CTAs, stats (15+ years, 500+ instruments, 5000+ musicians). Floating "Scroll" element was removed per client request.
3. **Who We Are** — Store description + Mission & Vision cards.
4. **What We Sell** — 6 product cards with real uploaded photos + image zoom on hover.
5. **Brands Marquee** — Dark background strip with infinite scrolling brand names (placeholder brands — awaiting client's real list).
6. **Our Services** — 4 service cards (Rentals, Repair, Lessons, Custom Orders).
7. **Contact** — Address, phone, email, social icons, Google Maps placeholder.
8. **Footer** — "Made with Dyad".

---

## Product Images (uploaded by client)
All images are embedded as base64 in the JSX file.

| Category | File used |
|---|---|
| Guitars | `guitar.jpg` (electric blue Telecaster) |
| Keyboards | `keyboard.jpg` (hands on digital piano) |
| Drums & Percussion | `drums.jpg` (drum kit close-up) |
| Wind Instruments | `wind_instuments.jpg` (gold saxophone) |
| Violins & Strings | `violin.jpg` (violin on black fabric) |
| Accessories | `accesories.jpg` (acoustic guitar + amp) |

---

## Brands Section
- Display: **Scrolling marquee strip** on dark background
- Speed: 56s per cycle (slowed to half from original 28s per client request)
- **Current brands are placeholders** — client has not yet shared the real list:
  > Yamaha, Fender, Gibson, Roland, Casio, Pearl, Ibanez, Boss, Korg, Shure, Bose, D'Addario, Steinberg, Zildjian, Meinl, Squier

---

## Technical Notes
- **No external icon libraries** — all icons are inline SVG components (lucide-react was removed as it's unsupported in the artifact environment)
- **Navigation** uses `scrollIntoView({ behavior: "smooth" })` — not anchor `href` links (those don't work inside the artifact iframe)
- **Fonts** loaded via Google Fonts in a `useEffect` hook
- **Vite project structure:**
  ```
  tarang-musicals/
  ├── index.html
  ├── package.json
  ├── vite.config.js
  ├── vercel.json
  └── src/
      ├── main.jsx
      ├── index.css
      └── App.jsx   ← main component (same as tarang-musicals.jsx)
  ```

---

## Pending / Next Steps
- [ ] Client to share **real brand list** to replace placeholder brands in marquee
- [ ] Replace Google Maps placeholder with real embed iframe
- [ ] Logo: currently text + icon — client may provide a real logo later
- [ ] Consider adding a WhatsApp CTA button (common for Indian retail businesses)
