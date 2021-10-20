import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 15%;
  background-color: ${(props) => props.theme.colors.background};

  img {
    width: 130px;
    height: 130px;
  }
`;

export const Title = styled.h1`
  margin-bottom: 28px;
  font-weight: 700;
  text-align: center;
  font-size: 50px;
  line-height: 62px;
  color: ${(props) => props.theme.colors.primary};
`;
