export function formatCurrency(
  amount: number,
  currency: string = "VND"
): string {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency,
  }).format(amount);
}

export function formatDate(date: string | Date): string {
  return new Intl.DateTimeFormat("vi-VN", {
    dateStyle: "medium",
  }).format(new Date(date));
}

export function formatNumber(value: number): string {
  return new Intl.NumberFormat("vi-VN").format(value);
}
