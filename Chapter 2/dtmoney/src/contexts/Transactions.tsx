import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

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

type TransactionInput = Omit<Transaction, "id" | "createdAt">;

interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => void;
}

const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);

async function createTransaction(transaction: TransactionInput) {
  await api.post("/transactions", transaction);
}

export function useTransactions() {
  return useContext(TransactionsContext);
}

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get("transactions").then((response) => {
      setTransactions(response.data.transactions);
    });
  }, []);

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}
