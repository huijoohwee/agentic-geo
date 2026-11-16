import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import * as core from 'agentic-geo/core';
import { longitudeCases, observeLongitudeCase } from 'agentic-geo/testing/longitude-cases';

for (const [label, name, makeArgs, expected] of longitudeCases) {
  test(label, () => {
    const args = makeArgs(), before = structuredClone(args);
    const observed = observeLongitudeCase(core, name, args);
    assert.deepEqual(observed, expected?.error ? expected : { value: expected });
    assert.deepEqual(args, before);
    if (name === 'deriveRegionalPoiLongitudeSpan' && observed.value) assert(Object.isFrozen(observed.value));
  });
}

test('permutation, duplicates, signed zero and caller bounds preserve the contract', () => {
  assert.deepEqual(core.deriveRegionalPoiLongitudeSpan([0, -0]), { center: 0, east: 0, spanDegrees: 0, west: 0 });
  const values = [179, -179, 0, 50];
  assert.deepEqual(core.deriveRegionalPoiLongitudeSpan(values), core.deriveRegionalPoiLongitudeSpan([...values].reverse()));
  // Core preserves the native API without imposing a new 1,024-element restriction on Graph.
  assert.equal(core.deriveRegionalPoiLongitudeSpan(Array(2048).fill(45)).spanDegrees, 0);
  assert(Number.isNaN(core.unwrapRegionalPoiLongitude(0, { west: NaN })));
});

test('published entry has no imports, dynamic evaluation, runtime globals or effect calls', () => {
  const source = fs.readFileSync(new URL('../src/core.mjs', import.meta.url), 'utf8');
  assert(Buffer.byteLength(source) <= 30000);
  assert(source.split('\n').length < 600);
  assert.doesNotMatch(source, /\b(?:import|require|fetch|eval|Function|process|window|document|globalThis|setTimeout|WebSocket)\s*(?:\b|\()/u);
  const pkg = JSON.parse(fs.readFileSync(new URL('../package.json', import.meta.url), 'utf8'));
  assert.deepEqual(pkg.dependencies ?? {}, {});
});
