# Responsible AI Readiness Test

The landing page and the Readiness Test for Responsible with AI, hosted on GitHub Pages.

## What is in this repository

| Path | Web address | What it is |
|---|---|---|
| `index.html` | readiness.responsiblewithai.com/ | Landing page. One button: Take the Readiness Test. |
| `test/index.html` | readiness.responsiblewithai.com/test/ | The test itself: 12 questions, profile, details, results. |
| `privacy/index.html` | readiness.responsiblewithai.com/privacy/ | Privacy notice. DRAFT: fill in the [BRACKETS] before launch. |
| `assets/config.js` | | Settings: the leads sheet address and course links. The file you edit most. |
| `assets/test-engine.js` | | Questions, answer points, area weights, bands and scoring. |
| `CNAME` | | Tells GitHub to serve the site on readiness.responsiblewithai.com. |
| `.nojekyll` | | Tells GitHub to publish the files as they are. Do not delete. |

Landing page files live at the top level. Everything for the test lives in `test/`.
Anything both use lives in `assets/`.

## Connect the leads spreadsheet (SharePoint)

The test scores people in their browser, then sends each completed test to a
Power Automate flow, which adds a row to `Readiness_Test_Leads.xlsx` on SharePoint
(table "Leads") and emails the person their results. Full steps are in the
setup guide supplied with these files. Paste the flow's HTTP URL into
`assets/config.js` as `leadsEndpoint`, then upload that file.

## Change the weights or questions

Open `assets/test-engine.js`. Area weights are under `"areas"`. Each answer is
`["Answer text", points, red flag 1 or 0]`. Keep the review page in step with any change.

## Tracking

Every post links to the landing page with `?src=` (for example `?src=li-w1-mon`).
The landing page passes it to the test, and it is saved in the Source column of the sheet.
