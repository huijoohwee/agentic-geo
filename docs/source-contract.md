# Source contract — AGENTIC-GEO-001 implementation candidate

Owner selected MIT on 2026-11-16 in the implementation chat. Native algorithm:
`agentic-graph@675d0ad10eea5d57fe101c1fb5d4318a804a7ff5`,
`grph-shared/src/geospatial/regionalPoiGeometry.ts`, lines 21–87.
Type annotations are removed in the portable JavaScript module; expressions,
branch order, tie selection, immutable result and errors remain native.
Frozen source SHA-256: `62e4d8982cebee5eedd869ca12a333380a488ecf01e0a8f804db02be9aeff528`.
The 3,038 local comparisons pass, including matching errors and no input mutation.
The owner approved extraction under MIT; no unrelated Graph code is moved.

Direct caller contracts accepted by the owner on 2026-11-16:

1. Graph's polygon projection and current map views import `agentic-geo/core`
   directly. Their existing acceptance limits, policies, data and async guards
   remain product-owned. Remove the old three function implementations and their
   convenience reexports once every known caller has migrated; no permanent shim.
2. Commerce's private listing editor offers an explicit on-device longitude-span
   preview for operator-supplied listing-region bounds (1–1,024 finite longitude
   values). Empty/malformed/oversized input has an accessible diagnostic. Preview
   values are transient, cleared on draft switch, and excluded from existing
   listing records, backups, launch packs and agent snapshots. No geocoder,
   location permission, address lookup, provider, storage schema or renderer.

Both direct callers run the package-owned cases against the exact installed
source pin. Commerce owns the bounded text adapter and presentation; Graph's
existing unbounded native signature is preserved. All other geometry remains
Graph-owned. Design controls stay with the existing design system; no new UI
framework, Base engine, Canvas facade or invocation server is introduced.

Owner-approved repository enrollment: `github.com/huijoohwee/agentic-geo`, public,
MIT, `main`, required `Integration Gate`, pull-request protected squash integration,
consumer runtime/release authority, retained refs and explicit clean-worktree
cleanup. Reuse the current Graph/Commerce profile contract and pinned Agentic OS
lifecycle rather than implementing a publisher. There is no application
deployment. Enrollment and provider readback passed on 2026-11-16. Core source
integration, distribution and consumer adoption require their own exact receipts.

Rollback restores each captured predecessor pin and native source through the
consumer's protected workflow. Commerce has no persisted-data migration. Keep
the predecessor source and exact package tarball recoverable. Renderer phases,
real-money pilot, clean integrator timing and shared-fix economics remain open.
