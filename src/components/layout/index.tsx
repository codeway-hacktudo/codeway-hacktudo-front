import React from 'react';
import {HiArrowLeft} from 'react-icons/hi';
import {DefaultTheme, withTheme} from 'styled-components';
import {
  Container,
  Content,
  ContentMenu,
  ContainerButton,
  ContainerCenterMenu,
  ButtonWarpper,
} from './styles';
import Button from '../button';

interface ILayoutProps {
  title: string;
  name: string;
  id: string;
  color: string;
  theme: DefaultTheme;
  onClickBack: () => void;
  onClickPrincipalButton: () => void;
}

const Layout: React.FC<ILayoutProps> = ({
  children,
  title,
  name,
  id,
  color,
  onClickBack,
  onClickPrincipalButton,
  theme,
}) => {
  const infosButtonSeenData =
    color === theme.colors.success
      ? {
          color: theme.colors.error,
          text: 'Ver dados faltantes',
        }
      : {
          color: theme.colors.success,
          text: 'Ver todos os dados',
        };
  return (
    <Container>
      <ContentMenu backgroundColor={color}>
        <ContainerButton>
          <Button
            onClick={onClickBack}
            icon={() => (
              <HiArrowLeft
                color={theme.colors.primary}
                style={{marginRight: 5}}
              />
            )}
            background={color}>
            Voltar
          </Button>
        </ContainerButton>

        <ContainerCenterMenu>
          <h1>{title}</h1>
          <h1>{name}</h1>
          <h2>{id}</h2>

          <ButtonWarpper>
            <Button
              onClick={onClickPrincipalButton}
              background={infosButtonSeenData.color}>
              {infosButtonSeenData.text}
            </Button>
          </ButtonWarpper>
        </ContainerCenterMenu>
      </ContentMenu>
      <Content>{children}</Content>
    </Container>
  );
};

export default withTheme(Layout);
