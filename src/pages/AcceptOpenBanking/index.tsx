import React from 'react';
import {useHistory} from 'react-router-dom';
import {withTheme, DefaultTheme} from 'styled-components';
import {HiArrowLeft} from 'react-icons/hi';
import Button from '../../components/button';

import {
  Container,
  Title,
  ButtonWrapper,
  Content,
  ButtonsAcceptsWrapper,
  DescriptionTermsOpenBanking,
  ContainerButtons,
} from './styles';

interface IAcceptOpenBankingProps {
  theme: DefaultTheme;
}

const AcceptOpenBanking: React.FC<IAcceptOpenBankingProps> = ({theme}) => {
  const history = useHistory();

  return (
    <Container>
      <Title>Hackathon BNY Mellon</Title>

      <Content>
        <DescriptionTermsOpenBanking>
          Você gostaria de participar do Open Banking? Com ele, você poderá
          reutilizar os seus dados bancários antigos para uma experiência
          personalizada no nosso sistema. O tempo médio do preenchimento dos
          dados cadastrais sem o Open Banking é de 1h e já com o Open Banking é
          de <b>20 minutos</b>. E ai? Vamos entrar nessa?
        </DescriptionTermsOpenBanking>

        <ContainerButtons>
          <ButtonWrapper>
            <Button
              onClick={() => history.goBack()}
              icon={() => (
                <HiArrowLeft
                  color={theme.colors.primary}
                  size="30"
                  style={{marginRight: 5}}
                />
              )}
              background={theme.colors.success}
            />
          </ButtonWrapper>
          <ButtonsAcceptsWrapper>
            <Button
              onClick={() => history.goBack()}
              background={theme.colors.background}>
              Recusar
            </Button>
          </ButtonsAcceptsWrapper>

          <ButtonsAcceptsWrapper>
            <Button
              onClick={() => history.push('/choice-bank')}
              background={theme.colors.success}>
              Aceitar
            </Button>
          </ButtonsAcceptsWrapper>
        </ContainerButtons>
      </Content>
    </Container>
  );
};

export default withTheme(AcceptOpenBanking);
