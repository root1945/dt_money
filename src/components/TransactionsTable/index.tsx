import { Container } from "./styles";

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Matrícula da Faculdade</td>
            <td className="withdraw">- R$200</td>
            <td>Ensino</td>
            <td>20/12/2021  </td>
          </tr>
          <tr>
            <td>Matrícula da Faculdade</td>
            <td className="deposit">R$200</td>
            <td>Ensino</td>
            <td>20/12/2021  </td>
          </tr>
          <tr>
            <td>Matrícula da Faculdade</td>
            <td>R$200</td>
            <td>Ensino</td>
            <td>20/12/2021  </td>
          </tr>
          <tr>
            <td>Matrícula da Faculdade</td>
            <td>R$200</td>
            <td>Ensino</td>
            <td>20/12/2021  </td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}