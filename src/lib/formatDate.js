export function formatDate(dateString) {
  return new Date(`${dateString}T00:00:00Z`).toLocaleDateString('da-DK', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  })
}
