# Weekly Recap Section + Nav Link

## Approach

Based on your direction, I'll add **Weekly Recap as an in-page section at the bottom** of the homepage (after Volunteer, before Footer) with a matching nav link. This is the fastest path and keeps everything on one page.

**Note on scaling:** Once you have 4–5 recaps, this section will start getting long. At that point I'd recommend converting it into a dedicated `/weekly-recap` page with an archive. For now, in-page is fine.

## What I'll build

### 1. New component: `src/components/WeeklyRecapSection.tsx`
- Section id: `weekly-recap`
- Heading: "Weekly Recap" with red underline accent (matches other sections)
- Short intro line: "Catch up on the latest from the campaign trail."
- A recap **card list** (newest first). Each card contains:
  - Date badge (e.g. "Week of June 29, 2026")
  - Title
  - Recap image (the attached flyer for the first entry) — full width, not cropped
  - Short 1–2 sentence caption below the image
- Styled to match existing sections (cream/white cards, navy headings, campaign-red accents, Garamond headings, Poppins body).

### 2. First recap entry
Uses the flyer you attached as the image. I'll need one small thing from you (see Open Questions).

### 3. Nav link
Add **"Weekly Recap"** to the nav in `src/components/Header.tsx`, positioned **after "Volunteer"** (rightmost link before the Donate button), linking to `#weekly-recap`. Added to both desktop and mobile menus.

### 4. Homepage wiring
In `src/pages/Index.tsx`, insert `<WeeklyRecapSection />` after `<VolunteerSection />` with a red/navy separator strip to match the existing pattern.

## Files touched

- **Create** `src/assets/weekly-recap-1.png.asset.json` — the attached flyer image
- **Create** `src/components/WeeklyRecapSection.tsx`
- **Edit** `src/components/Header.tsx` — add "Weekly Recap" nav link (desktop + mobile)
- **Edit** `src/pages/Index.tsx` — import and render the new section after Volunteer

## Open questions (I can proceed with defaults if you don't answer)

1. **Title for the first recap?** Default: *"Meet the Candidate & Community Kickoff"* — happy to use whatever you prefer.
2. **Short caption for the first recap?** Default: 1 sentence pulled from what's visible on the flyer. Send me your own text if you'd like something specific.
3. **Date label format?** Default: *"Week of June 29, 2026"*.

Reply with any tweaks, or say "go" and I'll build it with the defaults above.
