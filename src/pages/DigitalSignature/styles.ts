import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: ${(props) => props.theme.colors.background};
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  height: 85%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  margin-bottom: 28px;
  font-weight: 700;
  font-size: 50px;
  line-height: 62px;
  color: ${(props) => props.theme.colors.primary};
`;

export const InputDropId = styled.div`
  display: flex;
  /* min-height: 510px; */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 350px;
  background: ${(props) => props.theme.colors.auxBackground};
  border: 1px dashed #b7b6af;
  border-radius: 8px;
  padding: 10px;
  strong {
    font-family: 'Merriweather';
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 25px;
    text-align: center;
    color: #b7b6af;
  }

  p {
    font-family: 'Merriweather';
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 25px;
    text-align: center;
    color: #cacaca;
    margin-top: 5px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${(props) => props.theme.colors.background};
    border-radius: 8px;
    width: 125px;
    height: 45px;
    margin-top: 25px;

    p {
      font-family: 'Merriweather';
      font-style: normal;
      font-weight: bold;
      font-size: 20px;
      line-height: 25px;
      margin-top: 0px;

      color: #b7b6af;
    }
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  margin-left: 85%;
  width: 141px;
  height: 66px;
`;
