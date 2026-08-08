# Labmed Technologies — Premium Site Rebuild

A fluid, premium multi-page site for Labmed Technologies: laboratory, medical, dental, beauty, office and agricultural supplies, plus testing, consulting and technical services.

## Visual direction

- Deep lab-blue and teal palette (ink navy base, aqua-teal accent, cool glass neutrals) with generous whitespace — precise and clinical, never sterile-boring.
- Type: a confident geometric sans for headings paired with a highly legible body sans; wide tracking on small caps labels.
- Motion: soft scroll reveals, parallax on hero imagery, hover lift and image zoom on category tiles, animated counters, smooth sticky header that condenses on scroll. Everything eased and subtle — fluid, not flashy.
- Layout: strict grid system throughout. Category cards, service cards and testing capabilities all live on the same 12-column rhythm for a minimal feel.

## Pages

1. **Home**
   - Full-bleed hero slideshow (3 slides, auto-advancing with fade/parallax): "We provide Science Solutions" + Contact Us button; slide 2 "Quality consumables and equipment — solutions and services to accelerate science together"; slide 3 the "Science is a journey…" passage.
   - Intro block: who Labmed is, provided copy, level 1 B-BBEE line, "View Our Products" button.
   - Product category grid (7 tiles with imagery) linking to the products page.
   - Three value icons: Product Quality, Latest Product Range, Amazing Customer Service.
   - Services teaser strip (Laboratory Testing / Consulting / Technical Services) and a contact CTA band.

2. **About Us** — full provided About copy, split into hero + narrative + four highlight blocks (Quality Products & Technical Expertise, Quality Brands, Amazing Customer Service, Fast Efficient Hassle-Free) + Efficient Delivery closing band.

3. **All Products** — the 7 categories as large image-led grid cards with short descriptors; each expands to a listed set of typical items (list only, no pricing/e-commerce), with an enquiry CTA that deep-links to the contact form.

4. **Services** — three sections: Laboratory Testing (grid of the 9 test types), Consulting (ISO/IEC 17025 offering list + commitments), Technical Services (repair/maintenance options list).

5. **Contact Us** — email contact form (name, company, email, phone, category of interest, message), telephone, cell/WhatsApp with click-to-chat, physical address, office hours, and a map embed.

Global: sticky header with the 5-item menu and mobile drawer, floating WhatsApp button, full footer with postal address, phone, WhatsApp, email, office hours.

## Contact form behaviour

Initial build: the form validates and shows a success state, and also offers a WhatsApp/email fallback link. To actually deliver submissions to info@labmedtechnologies.co.za and store enquiries, Lovable Cloud can be enabled in a follow-up — say the word and I'll wire it up in this build instead.

## Technical notes

- TanStack Start routes: `/` (replacing the placeholder index), `/about`, `/products`, `/services`, `/contact`.
- Design tokens (oklch colors, gradients, shadows, motion easings) defined in `src/styles.css`; no hardcoded color utilities in components.
- Fonts loaded via `<link>` in `src/routes/__root.tsx`.
- Section components split per page under `src/components/`; reveal animations via a shared intersection-observer hook.
- Category and hero imagery generated to match the lab/medical/dental/beauty/office/agri themes in one consistent photographic style; uploaded reference images used as visual direction only.
- Per-route `head()` metadata with unique titles/descriptions, single H1 per page, semantic sections, alt text, JSON-LD LocalBusiness on home and contact.
