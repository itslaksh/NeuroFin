"use client";

import React, { createContext, useContext } from "react";

const CurrencyContext = createContext();

export function CurrencyProvider({ children }) {
  const formatAmount = (amount) => {
    if (amount === undefined || amount === null) return "";

    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  return (
    <CurrencyContext.Provider value={{ currency: "INR", formatAmount }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error("useCurrency must be used within a CurrencyProvider");
  }
  return context;
}
