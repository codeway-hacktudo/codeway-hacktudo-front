import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.colors.background};
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
  min-height: 510px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 440px;
  background: ${(props) => props.theme.colors.secundary};
  border: 1px dashed #b7b6af;
  border-radius: 8px;
  padding: 65px 35px;

  strong {
    font-family: 'Merriweather';
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 25px;
    text-align: center;
    color: #b7b6af;
  }

  p {
    font-family: 'Merriweather';
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 25px;
    text-align: center;
    color: #cacaca;
    margin-top: 35px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fdfbf1;
    border-radius: 8px;
    width: 125px;
    height: 45px;
    margin-top: 50px;

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
  width: 66px;
  height: 66px;
  margin-top: 8px;
`;
