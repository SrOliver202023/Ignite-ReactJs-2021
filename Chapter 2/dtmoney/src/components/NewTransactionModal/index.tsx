import Modal from "react-modal";

import { Container, TransactionTypeContainer, RadioBox } from "./styles";

import CloseSvg from "../../assets/close.svg";

import IncomeSvg from "../../assets/income.svg";
import OutcomeSvg from "../../assets/outcome.svg";
import { useState } from "react";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

Modal.setAppElement("#root");

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const [type, setType] = useState<"deposit" | "withdraw">("deposit");

  function handleSetTypeDeposit() {
    setType("deposit");
  }
  function handleSetTypeWithdraw() {
    setType("withdraw");
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button type="button" onClick={onRequestClose} className="react-modal-close">
        <img src={CloseSvg} alt="Fechar modal" />
      </button>
      <Container>
        <h2>Cadastrar transação</h2>

        <input placeholder="Título" />
        <input type="number" placeholder="Valor" />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            isActive={type === "deposit"}
            activeColor="red"
            onClick={handleSetTypeDeposit}
          >
            <img src={IncomeSvg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            type="button"
            isActive={type === "withdraw"}
            activeColor="green"
            onClick={handleSetTypeWithdraw}
          >
            <img src={OutcomeSvg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input placeholder="Categoria" />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
