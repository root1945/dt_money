import { useState } from 'react'
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyled } from './styles/global'
import Modal from 'react-modal'
import { NewTransactionModal } from './components/NewTransactionModal';

Modal.setAppElement('#root');

export function App() {
  const [ isNewTransactionModal, setIsNewTransactionModal ] = useState(false)

  const handleOpenNewTransactionModal = () => {
    setIsNewTransactionModal(true)
  }

  const handleCloseNewTransactionModal = () => {
    setIsNewTransactionModal(false)
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModal}
        onRequestClose={handleCloseNewTransactionModal} />
      <GlobalStyled/>
    </>
  );
}

