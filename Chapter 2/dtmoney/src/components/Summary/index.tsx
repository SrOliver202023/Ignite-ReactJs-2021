import IncomeSvg from '../../assets/income.svg';
import OutcomeSvg from '../../assets/outcome.svg';
import TotalSvg from '../../assets/total.svg';

import { Container } from './styles';

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={IncomeSvg} alt="Entradas" />
        </header>
        <strong>R$1000,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={OutcomeSvg} alt="Saídas" />
        </header>
        <strong>- R$1000,00</strong>
      </div>
      <div className='highlight-background'>
        <header>
          <p>Total</p>
          <img src={TotalSvg} alt="Total" />
        </header>
        <strong>R$1000,00</strong>
      </div>


    </Container>
  );
}