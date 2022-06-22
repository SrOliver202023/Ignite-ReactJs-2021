import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

const Transactions = createContext<Transaction[]>([]);

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

interface TransactionsProviderProps {
  children: ReactNode;
}

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get("transactions").then((response) => {
      setTransactions(response.data.transactions);
    });
  }, []);

  return <Transactions.Provider value={transactions}>{children}</Transactions.Provider>;
}

export function useTransactions() {
  return useContext(Transactions);
}
