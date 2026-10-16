[![Playwright Tests](https://github.com/Saleh-Hafyane/SnipeIT-QA-Project/actions/workflows/playwright.yml/badge.svg)](https://github.com/Saleh-Hafyane/SnipeIT-QA-Project/actions/workflows/playwright.yml)

# Snipe-IT QA – Automated E2E Tests (Playwright + TypeScript)

End-to-end tests for [Snipe-IT](https://snipeitapp.com/) asset management, running against the public demo (https://demo.snipeitapp.com). Built with Playwright and structured with the Page Object pattern.

## What it covers

| ID | Scenario |
|----|----------|
| TC-01 | Login with valid credentials lands on the Dashboard |
| TC-02 | Login with a wrong password shows an error banner |
| TC-03 | Logged-in user creates a hardware asset (model + status) and gets a success message |

Page objects live in `pages/` (`LoginPage`, `AssetPage`) so selectors and flows are defined once and reused by the specs in `tests/`.

## Run it

```bash
npm ci
npx playwright install
npx playwright test
```

To watch a run in a real browser or inspect a failure:

```bash
npx playwright test --headed
npx playwright show-report
```

## CI

Every push to `main`/`master` runs the suite on GitHub Actions (Ubuntu, Chromium/Firefox/WebKit) with retries, traces and screenshots on failure. The HTML report is uploaded as an artifact for 30 days.

