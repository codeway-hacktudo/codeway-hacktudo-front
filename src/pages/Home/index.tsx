import React, {useState} from 'react';
import InputMask from 'react-input-mask';
import {useHistory} from 'react-router-dom';
import Input from '../../components/input';
import validateCNPJ from '../../utils/validateCNPJ';
import Loading from '../Loading';
import {Container, Title, InputWrapper} from './styles';

const Home: React.FC = () => {
  const history = useHistory();
  const [documentValue, setDocumentValue] = useState('');
  const [validDocument, setValidDocument] = useState(true);

  const handleDocumentValue = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setDocumentValue(e.target.value);
  };

  const handleClick = (): void => {
    const isValid = validateCNPJ(documentValue);
    setValidDocument(isValid);
    isValid ? history.push('/all-data') : null;
  };
  return (
    <Container>
      <Title>Hackathon BNY Mellon</Title>
      <InputWrapper>
        <InputMask
          onChange={(e) => handleDocumentValue(e)}
          value={documentValue}
          mask="99.999.999/9999-99">
          {(inputProps: any) => (
            <Input
              {...inputProps}
              buttonProps={{
                background: '#E4EBED',
                text: 'Cadastro',
                action: () => {
                  handleClick();
                },
              }}
              placeholder="Insira seu CPF ou CNPJ"
              name="accountType"
              error={validDocument ? '' : 'Insira um CPF ou CNPJ válido'}
            />
          )}
        </InputMask>
      </InputWrapper>
    </Container>
  );
};

export default Home;
