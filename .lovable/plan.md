## Where the flyer fits

The flyer's message ("Talk to me. What's on your mind?... Listening, Engaging, Solutions, Together") is a near-perfect thematic match for the **"A Government that Listens"** section already on the page. That section is about accessibility, dialogue, and quarterly community meetings — exactly what the flyer promotes.

Placing it there reinforces the section's message visually without competing with the Hero (which is the candidate's primary intro) or duplicating the PSA video popup.

## Plan

1. Save the uploaded flyer to `src/assets/talk-to-me-flyer.jpg` (imported as an ES6 module for proper bundling).
2. Update `src/components/GovernmentListensSection.tsx`:
   - Convert the "A Government that Listens" block into a two-column layout on `md+`:
     - **Left column**: the existing copy (intro, bullet list card, "You spoke..." quote, closing line) — unchanged content and styling.
     - **Right column**: the flyer image, rounded with shadow, matching the existing card aesthetic (subtle border, `shadow-lg`, `rounded-xl`, soft gradient glow like the Hero image treatment for consistency).
   - On mobile, the flyer stacks below the text.
   - Add a clickable behavior: clicking the flyer opens it full-size in a lightbox (shadcn `Dialog`) so voters can read the fine print on phones.
   - Alt text: "Dr. Gena L. Ross — Talk to me. Platte County Presiding Commissioner campaign flyer."
3. Leave the Vision sub-section below it untouched.
4. No changes to Hero, News, or PSA popup — keeping scope tight per the recent UX audit (avoiding more visual clutter elsewhere).

## Technical details

- Image import: `import flyerImage from "@/assets/talk-to-me-flyer.jpg";`
- Dialog: existing `@/components/ui/dialog` — trigger is the image with `cursor-zoom-in`, content shows the full image on a dark backdrop.
- Styling tokens only (`text-navy`, `text-campaign-red`, `bg-muted/30`) — no hardcoded colors.
- Responsive: `grid md:grid-cols-2 gap-10 items-start`.