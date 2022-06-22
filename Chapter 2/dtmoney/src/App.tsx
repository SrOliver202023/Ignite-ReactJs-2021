import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { Transactions } from "./contexts/Transactions";

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }
  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <Transactions.Provider value={[]}>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
    </Transactions.Provider>
  );
}

export default App;
