# QuickBite — Food Delivery Web App

A learning project built with Next.js App Router, TypeScript, and Tailwind CSS.

## Current milestone: Homepage

The homepage includes:
- Responsive header with Login, Sign up, and Cart links
- Photo-led hero section
- Live restaurant-name search
- Restaurant cards rendered from sample data
- Empty search state and clear-search actions
- Accessible labels, focus styles, and page metadata

Restaurant data is static for now. MongoDB and authentication are not connected yet.

## Requirements

- Node.js 20.9 or later
- npm

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Validate

```bash
npm run lint
npm run build
```

## Homepage manual test checklist

| ID | Action | Expected result |
|---|---|---|
| HOME-01 | Open `/` | QuickBite homepage loads |
| HOME-02 | Inspect navigation | Login, Sign up, and Cart links are visible |
| HOME-03 | Type `burger` in search | The Burger Spot remains visible |
| HOME-04 | Type `MAMA` in search | Mama's Kitchen remains visible (case-insensitive search) |
| HOME-05 | Search for an unknown name | No-results message is shown |
| HOME-06 | Clear a search | All sample restaurants return |
| HOME-07 | Use keyboard Tab | Interactive controls have visible focus |
| HOME-08 | View at mobile width | Header, hero, search, and cards fit the viewport |
| HOME-09 | Select a restaurant card | Navigates to its restaurant route (route to be implemented in a later stage) |

## Next milestones

1. Add restaurant detail and menu pages.
2. Add MongoDB and seed sample records.
3. Add secure registration and login.
4. Add cart behavior and simulated checkout.
5. Add order history and authorization.
6. Expand manual QA coverage and regression checks.
