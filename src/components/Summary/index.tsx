import { Container } from './styles';
import incomeIMG from '../../assets/income.svg';
import outcomeIMG from '../../assets/outcome.svg';
import totalIMG from '../../assets/total.svg';
import { useContext } from 'react';
import { TransactionsContext } from '../../context/TransactionsContext';

export function Summary(){
  const { transactions } = useContext(TransactionsContext);
  console.log(transactions);
  return(
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeIMG} alt="Entradas" />
        </header>
        <strong>R$1000,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeIMG} alt="Saídas" />
        </header>
        <strong>- R$500,00</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalIMG} alt="total" />
        </header>
        <strong>R$500,00</strong>
      </div>
    </Container> 
  );
};