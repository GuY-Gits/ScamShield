# ScamShield

A mobile-first cyber-awareness website for a CES college project in India. Built with HTML, CSS and vanilla JavaScript, with local JSON content. No dependencies, backend, account creation, analytics or paid services.

## Run locally

Install Node.js 18 or newer, open a terminal in this folder and run:

```sh
npm start
```

Open **http://127.0.0.1:5173**. Alternatively, use `python -m http.server 5173 --directory dist`. Use an HTTP server; directly opening the HTML file cannot load the JSON and JavaScript modules reliably.

## Features

- Refined graphite/parchment light and dark themes, serif headings, sans-serif body text and monospace instrument labels.
- Open-row answer controls, pill primary actions, underlined navigation and muted SVG network motion.
- Brief skippable cyber loading animation, reduced-motion support and an automatic failure fallback.
- Closely matched response options across all 12 simulations and 10 quiz questions, with 66 individual response rationales.

- Twelve fictional scenarios across phishing, payment fraud, impersonation, malware and adware/scareware with locked answers, safe-choice feedback, warning signs, a final score and related learning topics.
- Nine library articles, keyword search, category filters and accessible article dialogs.
- Ten-question quiz with immediate explanations, previous-question review, result bands, missed-topic recommendations and restart.
- India reporting guidance with 1930 and the official national reporting portal.
- Responsive navigation, skip link, focus indicators, reduced motion support and semantic controls.
- In-memory practice state only. Reloading clears it. Each activity has a restart control; “Reset all practice progress” clears both activities.

## Project structure

```text
dist/
  index.html
  css/styles.css
  js/main.js
  js/ui.js
  js/simulator.js
  js/quiz.js
  js/library.js
  data/scenarios.json
  data/questions.json
  data/scams.json
  assets/shield.svg
serve.mjs
tests/content.test.mjs
```

## Checks

Run `npm test` for content integrity and quiz-band boundary checks.

Manual acceptance checklist:

- Navigate to every section on desktop and at 360px width.
- Complete all twelve scenarios; confirm one locked response per scenario, feedback, correct total and relevant recommendations.
- Restart simulation and check responses are cleared.
- Complete the quiz; use Back to review locked answers; verify the score and review explanations.
- Verify 0–4 Beginner, 5–7 Developing Awareness, 8–10 Cyber Aware.
- Search for UPI, OTP and delivery; try a query with no results; clear filters.
- Open and close an article with keyboard controls, including Escape.
- Verify mobile menu, focus visibility and skip link without a mouse.
- Verify official reporting links and that no real scam links or sensitive-data fields exist.

## Publish

Deploy the contents of `dist/` on any static host. All assets and JSON fetch paths are relative and support hosted subpaths. `.openai/hosting.json` records the private Sites deployment identity.

## Content sources

Reporting information was checked on 25 October 2026 against the [National Cyber Crime Reporting Portal](https://cybercrime.gov.in/) and its [official citizen guidance](https://cybercrime.gov.in/uploadmedia/instructions_citizenreportingcyberfrauds.pdf). Payment safety guidance was checked against [NPCI fraud awareness](https://www.npci.org.in/fraud-awareness). Recheck official resources before any workshop and periodically after launch.

## CES workshop

Suggested 20–30 minute format: explain two or three scam types, let participants practise the simulator, discuss warning signs, then use the quiz as a learning activity. For an evaluation, use an anonymous five-question pre/post assessment on an equivalent scale. Count attendees and record only actual aggregate results and voluntary feedback. No attendance, impact or learning results are claimed by this project. See WORKSHOP.md for a blank recording template.

ScamShield is educational. It does not detect real scams, accept reports or guarantee safety or recovery of funds. The initial hosted Site is owner-private; a classroom audience requires an explicit access-sharing decision.

## Simulator redesign

Choose a category, filter mission cards by difficulty, run an entire category or all twelve scenarios, or open a single mission. Image-based examples include an SMS, WhatsApp-style chat and fake browser security alert, with full-size viewing and text transcripts. Other scenarios use semantic HTML reconstructions of chats, app installers, email and permission screens. Answer feedback reveals numbered warning signs. The debrief breaks performance down by category and recommends reading.

The header sun/moon toggle switches the whole site between light and dark themes, initially following the device preference. The theme choice lasts while the page is open. No theme or practice information is stored persistently.

Content references for the added software-threat material: [CERT-In cyber awareness booklet](https://www.cert-in.org.in/PDF/CSA_Booklet.pdf), [CERT-In mobile malware advisory](https://www.cert-in.org.in/s2cMainServlet?VLCODE=CIAD-2022-0014&pageid=PUBVLNOTES02), and [FBI phishing guidance](https://www.fbi.gov/how-we-can-help-you/common-frauds-and-scams/spoofing-and-phishing), checked 27 October 2026.
