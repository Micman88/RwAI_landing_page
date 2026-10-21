# Responsible AI Readiness Test

The landing page and the Readiness Test for Responsible with AI, hosted on GitHub Pages.

## What is in this repository

| Path | Web address | What it is |
|---|---|---|
| `index.html` | readiness.responsiblewithai.com/ | Landing page. One button: Take the Readiness Test. |
| `test/index.html` | readiness.responsiblewithai.com/test/ | The test itself: 12 questions, profile, details, results. |
| `privacy/index.html` | readiness.responsiblewithai.com/privacy/ | Privacy notice. DRAFT: fill in the [BRACKETS] before launch. |
| `assets/config.js` | | Settings: Google Form connection and course links. The file you edit most. |
| `assets/test-engine.js` | | Questions, answer points, area weights, bands and scoring. |
| `CNAME` | | Tells GitHub to serve the site on readiness.responsiblewithai.com. |
| `.nojekyll` | | Tells GitHub to publish the files as they are. Do not delete. |

Landing page files live at the top level. Everything for the test lives in `test/`.
Anything both use lives in `assets/`.

## Connect the Google Form

1. Create a Google Form in the Responsible with AI Google account with these 19 Short answer questions, in this order:
   Name, Email, Field, Role, Organisation size, Professional body, Most helpful, Score, Band,
   Data line, Checking, Judgement, Disclosure, Lowest area, Red flags, Answers, Source,
   Contact consent, Updates consent.
2. Responses tab: Link to Sheets.
3. Three dots menu: Get pre-filled link. Type anything in every box, click Get link, copy it.
4. In that link, each field appears as `entry.123456789=`. Copy each entry number into
   `assets/config.js` under the matching name.
5. Set `action` to the form address with `viewform` replaced by `formResponse`, for example
   `https://docs.google.com/forms/d/e/XXXX/formResponse`.

Until `action` is filled in, the test works but nothing is saved.

## Change the weights or questions

Open `assets/test-engine.js`. Area weights are under `"areas"`. Each answer is
`["Answer text", points, red flag 1 or 0]`. Keep the review page in step with any change.

## Tracking

Every post links to the landing page with `?src=` (for example `?src=li-w1-mon`).
The landing page passes it to the test, and it is saved in the Source column.
