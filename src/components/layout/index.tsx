import React from 'react';
import {HiArrowLeft} from 'react-icons/hi';
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
}) => {
  const infosButtonSeenData =
    color === '#E4EBED'
      ? {
          color: '#F7B6AF',
          text: 'Ver dados faltantes',
        }
      : {
          color,
          text: 'Ver todos os dados',
        };
  return (
    <Container>
      <ContentMenu backgroundColor={color}>
        <ContainerButton>
          <Button
            onClick={onClickBack}
            icon={() => (
              <HiArrowLeft color="#1C475C" style={{marginRight: 5}} />
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

export default Layout;
