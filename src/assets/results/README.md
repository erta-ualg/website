# Results page images

These files are placeholders. Replace them with FSPT26 photos, keeping the same filenames and aspect ratios.

## Required

- `hero.webp` — 1200 × 675 (16:9), landscape. ERTA team and car in the FSPT26 paddock at Castelo Branco. Used as the hero backdrop. Replace this file directly with the FSPT26 hero photo, exported to WebP at the same size.
- `team.jpg` — 1600 × 900 (16:9). ERTA team group photo at FSPT26. Used in the gallery under "A equipa".

## Add when available

- `prep.jpg` — 1600 × 900 (16:9). ERTA members preparing the car, cost binder or presentation material in the paddock. Used in the gallery under "Preparação".
- `track.jpg` — 1600 × 900 (16:9). ERTA car on track or in the paddock at Castelo Branco. Used in the gallery under "Em pista".

After adding `prep.jpg` and `track.jpg`, import them in `src/data/Results.ts` and set the `image` field on those gallery items. The alt text is already defined in the translation files:

- `results-page.gallery.team-alt`
- `results-page.gallery.prep-alt`
- `results-page.gallery.track-alt`

## Optional event photos

If you want thumbnails on the three static-event rows, add:

- `cost.jpg` — ERTA at Cost & Manufacturing judging.
- `business.jpg` — ERTA presenting the business plan.
- `design.jpg` — judges reviewing the ERTA engineering design.

The row layout currently shows the placement on the right; adding photos would replace that block.
