import React, {useState} from 'react';
import InputMask from 'react-input-mask';
import {useHistory} from 'react-router-dom';
import {withTheme, DefaultTheme} from 'styled-components';
import Input from '../../components/input';
import validateCNPJ from '../../utils/validateCNPJ';
import {Container, Title, InputWrapper} from './styles';
import Loading from '../Loading';

interface IHome {
  theme: DefaultTheme;
}

const Home: React.FC<IHome> = ({theme}) => {
  const history = useHistory();
  const [documentValue, setDocumentValue] = useState('');
  const [validDocument, setValidDocument] = useState(true);

  const [loading, setLoading] = useState(false);

  const handleDocumentValue = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setDocumentValue(e.target.value);
  };

  const handleClick = (): void => {
    const isValid = validateCNPJ(documentValue);
    setValidDocument(isValid);

    if (!isValid) {
      return;
    }
    // TODO CHAMAR API
    setLoading(true);
    setTimeout(function () {
      setLoading(false);
      history.push('/update-id');
    }, 2000);
  };

  if (loading) {
    return <Loading />;
  }
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
                background: theme.colors.success,
                text: 'Cadastrar',
                action: () => {
                  handleClick();
                },
              }}
              placeholder="Insira o CNPJ"
              name="accountType"
              error={validDocument ? '' : 'Insira um CPF ou CNPJ válido'}
            />
          )}
        </InputMask>
      </InputWrapper>
    </Container>
  );
};

export default withTheme(Home);
