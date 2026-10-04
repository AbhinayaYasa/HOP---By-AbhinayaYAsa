# Abhinaya Yasa — Portfolio

Personal portfolio of **Abhinaya Yasa**, full-stack engineer and builder of **HOP** (Hospitality On-Site Professionals), a concierge platform for healthcare workers.

| Page | What's on it |
| --- | --- |
| `index.html` | Portfolio: about, HOP case study, build log, stack, approach, contact |
| `campaign.html` | **#ShiftCovered**, a six-week social media launch campaign for HOP: strategy, personas, content pillars, channel plan, calendar, creative mockups, KPIs and guardrails |

Plain HTML and CSS with no build step. Shared styles are in `assets/style.css` and the theme toggle and copy buttons are in `assets/site.js`.

## Run locally
Open `index.html` in a browser, or run `python3 -m http.server` and go to http://localhost:8000.

## Deploy with GitHub Pages
Go to **Settings → Pages → Build and deployment**, choose **Deploy from a branch** with `main` and `/ (root)`, then save.

## Placeholders to fill in
Anything with an amber dashed underline (class `ph`) is a placeholder. Remove the class once the value is real.
- Location in the hero label, plus availability and target roles
- The HOP **Outcome** paragraph
- The education card
- Email and LinkedIn in the Contact section

The campaign KPIs are **targets set before launch**, not results. Update them once the campaign has run.

## Brand tokens
Colors live as CSS variables at the top of `assets/style.css`, with light and dark versions:
- Wayfinding green `#0B6E5F` means done / handled
- Amber `#B57A0C` means in progress

Fonts are Bricolage Grotesque (display), Atkinson Hyperlegible (body) and JetBrains Mono (labels).
