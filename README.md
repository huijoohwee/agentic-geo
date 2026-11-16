# agentic-geo

Portable longitude normalization, shortest wrapped spans and unwrapping. MIT.
Zero production dependencies; no network, model, renderer or host globals.

```js
import { deriveRegionalPoiLongitudeSpan } from 'agentic-geo/core';
deriveRegionalPoiLongitudeSpan([179, -179]);
// { center: -180, east: 181, spanDegrees: 2, west: 179 }
```

The initial API retains native symbol names and behavior. It computes longitude
math; consumers retain validation, provenance, precision, storage and publication
rules. Consumers must choose their own input bounds. Existing callers are not
silently capped. Map rendering remains in its current product owner.

Run `npm run check`. Both consumers run the same exported compatibility cases at
`agentic-geo/testing/longitude-cases` against their own installed `core` export.
Use exact immutable source pins and commit lockfiles; no sibling source imports.

The owner approved MIT, repository enrollment and both direct caller contracts
on 2026-11-16. Source integration and consumer adoption have separate receipts.
See [source contract](docs/source-contract.md).

Use the pinned Agentic OS setup, START, ADLC and RELEASE workflows. There is no
application deployment in this repository. CI uses public standard Linux runners
without paid runners, caches or artifact storage. Product deployment authority
remains with each consumer. Rollback restores the captured predecessor source
and lockfile through its protected consumer workflow; no data schema is changed.
