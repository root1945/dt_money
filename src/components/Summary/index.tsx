import { useContext } from "react";
import { Container } from "./styles";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { TransactionsContext } from "../../TransactionsContext";

export default function Summary() {
  const transactions = useContext(TransactionsContext);
  console.log(transactions);
  return (
    <Container>
      <div>
        <header>
          <img src={incomeImg} alt="Entradas" />
          <p>Entradas</p>
        </header>
        <strong>R$1000,00</strong>
      </div>
      <div>
        <header>
          <img src={outcomeImg} alt="Saídas" />
          <p>Saídas</p>
        </header>
        <strong> -R$400,00</strong>
      </div>
      <div className="highlight-background">
        <header>
          <img src={totalImg} alt="Total" />
          <p>Total</p>
        </header>
        <strong>R$2000,00</strong>
      </div>
    </Container>
  );
}
