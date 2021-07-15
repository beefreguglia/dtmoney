import Modal from 'react-modal';
import { Container, TrasactionTypeContainer } from './styles';
import closeIMG from '../../assets/close.svg';
import incomeIMG from '../../assets/income.svg';
import outcomeIMG from '../../assets/outcome.svg';
interface NewTransactionModalProps{
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps){
  return(
    <Modal 
        isOpen={isOpen} 
        onRequestClose={onRequestClose}
        overlayClassName='react-modal-overlay'
        className='react-modal-content'
      >
        <button 
          type='button' 
          onClick={onRequestClose} 
          className='react-modal-close'
        >
          <img src={closeIMG} alt="Fechar" />
        </button>
        <Container>
          <h2>Cadastrar Transação</h2>

          <input  
            placeholder="Título"
          />
          <input
            type="number"  
            placeholder="Valor"
          />
          <TrasactionTypeContainer>
            <button type='button'>
              <img src={incomeIMG} alt="Entrada" />
              <span>Entrada</span>
            </button>
            <button type='button'>
              <img src={outcomeIMG} alt="Saída" />
              <span>Saída</span>
            </button>
          </TrasactionTypeContainer>
          <input  
            placeholder="Categoria"
          />

          <button type="submit">Cadastrar</button>
        </Container>
      </Modal>
  );
};