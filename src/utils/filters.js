export function formatDate(date) {
  return new Date(Number(date) * 1000).toISOString().split("T")[0];
}
