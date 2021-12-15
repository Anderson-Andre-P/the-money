import Modal from "react-modal"

interface NewTransactionModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactioModal({isOpen, onRequestClose}: NewTransactionModalProps){
    return (
        <Modal 
        isOpen={isOpen}
        onRequestClose={onRequestClose}
      >
        <h2>Cadastar transação</h2>
      </Modal>
    )

}
