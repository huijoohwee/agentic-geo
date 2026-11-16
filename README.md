# agentic-geo

MIT portable geo library. Initial owner-reviewed enrollment: 2026-11-16.
The core implementation follows through a protected Agentic OS task lane.

Use `npm ci`, `npm run setup`, `npm run doctor`, then `npm run lane -- <scope>`.
Follow the pinned Agentic OS START, ADLC and RELEASE workflows. Product deployment
and data policy remain with each consumer. No standalone service is deployed.

CI uses only standard Linux runners in this public repository, with no paid
runner, cache, artifact upload, provider invocation or deployment step. Public
standard hosted runner compute is free under the current
[GitHub billing contract](https://docs.github.com/en/billing/concepts/product-billing/github-actions).
