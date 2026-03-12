"use client";

import { useCurrency } from "@/components/currency-provider";

export function FormatAmount({ amount }) {
  const { formatAmount } = useCurrency();
  return <>{formatAmount(amount)}</>;
}
