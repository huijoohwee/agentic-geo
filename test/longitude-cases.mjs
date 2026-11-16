// One shared compatibility corpus; consumers invoke their installed core export.
// Factories give each caller fresh input and preserve NaN, Infinity and signed zero.
export const longitudeCases = Object.freeze([
  ['negative zero', 'normalizeRegionalPoiLongitude', () => [-0], 0],
  ['western boundary', 'normalizeRegionalPoiLongitude', () => [-180], -180],
  ['eastern boundary', 'normalizeRegionalPoiLongitude', () => [180], -180],
  ['multiple turns east', 'normalizeRegionalPoiLongitude', () => [540], -180],
  ['multiple turns west', 'normalizeRegionalPoiLongitude', () => [-541], 179],
  ['fractional', 'normalizeRegionalPoiLongitude', () => [12.25], 12.25],
  ['nonfinite NaN', 'normalizeRegionalPoiLongitude', () => [NaN], { error: 'RangeError', message: 'longitude must be finite' }],
  ['nonfinite infinity', 'normalizeRegionalPoiLongitude', () => [Infinity], { error: 'RangeError', message: 'longitude must be finite' }],
  ['nonfinite negative infinity', 'normalizeRegionalPoiLongitude', () => [-Infinity], { error: 'RangeError', message: 'longitude must be finite' }],
  ['no numeric coercion', 'normalizeRegionalPoiLongitude', () => ['1'], { error: 'RangeError', message: 'longitude must be finite' }],
  ['no null coercion', 'normalizeRegionalPoiLongitude', () => [null], { error: 'RangeError', message: 'longitude must be finite' }],
  ['one longitude', 'deriveRegionalPoiLongitudeSpan', () => [[45]], { center: 45, east: 45, spanDegrees: 0, west: 45 }],
  ['canonical duplicates', 'deriveRegionalPoiLongitudeSpan', () => [[180, -180, 540]], { center: -180, east: -180, spanDegrees: 0, west: -180 }],
  ['date line', 'deriveRegionalPoiLongitudeSpan', () => [[179, -179]], { center: -180, east: 181, spanDegrees: 2, west: 179 }],
  ['unsorted duplicate', 'deriveRegionalPoiLongitudeSpan', () => [[-179, 179, 179]], { center: -180, east: 181, spanDegrees: 2, west: 179 }],
  ['negative and positive', 'deriveRegionalPoiLongitudeSpan', () => [[-10, 10]], { center: 0, east: 10, spanDegrees: 20, west: -10 }],
  ['equal gap native tie', 'deriveRegionalPoiLongitudeSpan', () => [[0, 120, -120]], { center: -120, east: 360, spanDegrees: 240, west: 120 }],
  ['antipodal tie', 'deriveRegionalPoiLongitudeSpan', () => [[0, 180]], { center: -90, east: 0, spanDegrees: 180, west: -180 }],
  ['empty span', 'deriveRegionalPoiLongitudeSpan', () => [[]], { error: 'TypeError', message: 'longitude span requires at least one longitude' }],
  ['nonfinite span', 'deriveRegionalPoiLongitudeSpan', () => [[1, NaN]], { error: 'RangeError', message: 'longitude must be finite' }],
  ['unwrap date line', 'unwrapRegionalPoiLongitude', () => [-179, { west: 179 }], 181],
  ['unwrap canonical boundary', 'unwrapRegionalPoiLongitude', () => [180, { west: -180 }], -180],
  ['unwrap multiple turns', 'unwrapRegionalPoiLongitude', () => [721, { west: 0 }], 1],
  ['unwrap nonfinite', 'unwrapRegionalPoiLongitude', () => [NaN, { west: 0 }], { error: 'RangeError', message: 'longitude must be finite' }],
]);

export function observeLongitudeCase(implementation, name, args) {
  try { return { value: implementation[name](...args) }; }
  catch (error) { return { error: error.name, message: error.message }; }
}
