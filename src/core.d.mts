export type RegionalPoiLongitudeSpan = Readonly<{
  center: number
  east: number
  spanDegrees: number
  west: number
}>

export declare function normalizeRegionalPoiLongitude(longitude: number): number
export declare function deriveRegionalPoiLongitudeSpan(longitudes: readonly number[]): RegionalPoiLongitudeSpan
export declare function unwrapRegionalPoiLongitude(
  longitude: number,
  span: Pick<RegionalPoiLongitudeSpan, 'west'>,
): number
