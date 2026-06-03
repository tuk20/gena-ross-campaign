# Make the "Know Your Power" flyer more visible

## Decision

Keep the PSA video popup as-is (it's the only place the candidate's voice auto-surfaces to first-time visitors). Instead, promote the flyer out of its current spot inside the Voting section and give it its own dedicated, eye-catching section higher on the page.

## Why not swap the popup

- The flyer is a tall, dense portrait image — it will clip or force scrolling inside a modal.
- Losing the candidate's face/voice on first impression hurts trust-building.
- A popup full of ballot amendment fine print feels like homework and gets dismissed fast.

## What changes

1. **Create a new section** `KnowYourPowerSection.tsx`:
   - Full-width band with a soft navy/cream gradient background to make it pop.
   - Two-column layout on desktop, stacked on mobile:
     - Left: Heading ("Know Your Power on the 2026 Ballot"), short 2–3 sentence intro about why understanding the amendments matters, and a primary CTA button ("View Full Flyer") that opens the existing lightbox dialog.
     - Right: The flyer image at a readable size with `rounded-2xl`, `shadow-2xl`, gradient blur halo, and `cursor-zoom-in`.
   - Click image OR button → same Dialog lightbox already built (max-w-3xl, scrollable).

2. **Place it on the page** in `src/pages/Index.tsx`:
   - Insert immediately after the **Why I'm Running / High Participation** area and **before** the Voting section.
   - This gives it prominence without disrupting the narrative flow (hero → story → policy → ballot education → how to vote → news → contact).

3. **Remove the flyer block from `VotingSection.tsx`**:
   - Strip the "Know Your Ballot" callout, the Dialog imports, and the flyer import from that file.
   - Restore the Voting section's original 3-column resources grid as the focus.

4. **Styling**:
   - Use existing semantic tokens (`bg-secondary`, `text-primary`, `border-primary/20`, etc.) — no hardcoded colors.
   - Garamond heading, Poppins body, matching the rest of the site.

## Files touched

- `src/components/KnowYourPowerSection.tsx` (new)
- `src/components/VotingSection.tsx` (remove flyer block + unused imports)
- `src/pages/Index.tsx` (add new section in correct position)

## Not changing

- `PSAPopup` and the video remain exactly as they are.
- The `know-your-power-flyer.png.asset.json` asset stays.
- No copy changes to other sections.
