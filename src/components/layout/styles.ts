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
  width: 35%;
  padding: 32px;
  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;
  height: 100%;
  width: 65%;
  background-color: ${(props) => props.theme.colors.background};
  padding: 32px;
`;

export const WrapperBackButton = styled.div`
  width: 123px;
  height: 56px;
`;

export const ContainerCenterMenu = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-top: 10%;

  h1 {
    font-family: 'Merriweather';
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 60px;
    text-align: center;
    color: ${(props) => props.theme.colors.primary};
    margin-top: 15%;
  }

  h2 {
    font-family: 'Merriweather';
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 40px;
    text-align: center;
    color: ${(props) => props.theme.colors.primary};
    padding-bottom: 15%;
  }
`;

export const ButtonWarpper = styled.div`
  width: 240px;
  height: 56px;
  align-self: center;
  margin-top: 5%;
`;
