import React from 'react';
import {HiArrowLeft} from 'react-icons/hi';
import {DefaultTheme, withTheme} from 'styled-components';
import {
  Container,
  Content,
  ContentMenu,
  WrapperBackButton,
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
  onClickSeeTree?: () => void;
}

const Layout: React.FC<ILayoutProps> = ({
  children,
  title,
  name,
  id,
  color,
  onClickBack,
  onClickPrincipalButton,
  onClickSeeTree,
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
        <WrapperBackButton>
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
        </WrapperBackButton>

        <ContainerCenterMenu>
          <h1>{title}</h1>
          <h1>{name}</h1>
          <h2>{id}</h2>

          <ButtonWarpper>
            <Button
              borderColor={theme.colors.error}
              onClick={onClickPrincipalButton}
              background={infosButtonSeenData.color}>
              {infosButtonSeenData.text}
            </Button>
          </ButtonWarpper>

          {title === 'Todos os dados' && (
            <ButtonWarpper>
              <Button
                borderColor={theme.colors.primary}
                onClick={onClickSeeTree}
                background="transparent">
                Ver como árvore
              </Button>
            </ButtonWarpper>
          )}
        </ContainerCenterMenu>
      </ContentMenu>
      <Content>{children}</Content>
    </Container>
  );
};

export default withTheme(Layout);
