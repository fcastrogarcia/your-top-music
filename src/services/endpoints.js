export function endpoint(type, timeRange) {
  return `/top/${type}?limit=50&time_range=${timeRange}`
}