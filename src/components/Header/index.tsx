import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles';

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal } : HeaderProps){
  return (
    <Container>
      <Content>
      <img src={logoImg} alt="Victor Money" />
      <button type="button" onClick={onOpenNewTransactionModal}>
        Nova Transação
      </button>
      </Content>
    </Container>
  );
}