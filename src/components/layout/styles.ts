import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  width: 100vw;
`;

interface IContentMenuProps {
  backgroundColor: string;
}

export const ContentMenu = styled.div<IContentMenuProps>`
  display: flex;
  height: 100%;
  background-color: ${(props) => props.backgroundColor};
  width: 30%;
  padding: 32px;
  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;
  height: 100%;
  width: 70%;
  background-color: #fdfcfa;
  padding: 32px;
`;

export const ContainerButton = styled.div`
  width: 123px;
`;

export const ContainerCenterMenu = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
