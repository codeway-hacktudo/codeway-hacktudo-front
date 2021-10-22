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

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px 10%;
`;

export const DescriptionTermsOpenBanking = styled.p`
  font-family: 'Merriweather';
  font-size: 32px;
  font-style: normal;
  line-height: 40px;
  letter-spacing: 0em;
  text-align: center;
`;

export const ContainerButtons = styled.div`
  display: flex;
  margin-top: 35px;
  width: 40%;
  align-items: center;
  justify-content: space-around;
`;

export const ButtonsAcceptsWrapper = styled.div`
  width: 35%;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  width: 66px;
  height: 66px;
  align-items: center;
`;
