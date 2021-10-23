import React from 'react';
import {useHistory} from 'react-router-dom';
import {DefaultTheme, withTheme} from 'styled-components';
import Button from '../../components/button';
import {Container, Title, ButtonFinishWrapper} from './styles';

interface IFinishedProps {
  theme: DefaultTheme;
}
const Finished: React.FC<IFinishedProps> = ({theme}) => {
  const history = useHistory();

  return (
    <Container>
      <Title>Seu pedido foi reallizado com sucesso!</Title>
      <ButtonFinishWrapper>
        <Button
          onClick={() => history.push('/')}
          background={theme.colors.success}>
          Novo Cadastro
        </Button>
      </ButtonFinishWrapper>
    </Container>
  );
};

export default withTheme(Finished);
