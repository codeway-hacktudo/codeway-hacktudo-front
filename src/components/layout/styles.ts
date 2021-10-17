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
  padding-top: 35%;
  align-items: center;

  h1 {
    font-family: 'Merriweather';
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 60px;
    text-align: center;
    color: #1c475c;
    margin-top: 20%;
  }

  h2 {
    font-family: 'Merriweather';
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 40px;
    text-align: center;
    color: #1c475c;
  }

  button {
    margin: 20% 0px;
  }
`;

export const ButtonWarpper = styled.div`
  width: 240px;

  align-self: center;
`;
