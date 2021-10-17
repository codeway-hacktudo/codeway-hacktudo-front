import React from 'react';
import {HiArrowLeft} from 'react-icons/hi';
import {
  Container,
  Content,
  ContentMenu,
  ContainerButton,
  ContainerCenterMenu,
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

const Layout: React.FC<ILayoutProps> = ({children, title, name, id, color}) => {
  return (
    <Container>
      <ContentMenu backgroundColor={color}>
        <ContainerButton>
          <Button
            icon={() => <HiArrowLeft color="#1C475C" />}
            background={color}>
            Voltar
          </Button>
        </ContainerButton>

        <ContainerCenterMenu>
          <h1>{title}</h1>
          <h2>{name}</h2>
          <strong>{id}</strong>
        </ContainerCenterMenu>
      </ContentMenu>
      <Content>{children}</Content>
    </Container>
  );
};

export default Layout;
