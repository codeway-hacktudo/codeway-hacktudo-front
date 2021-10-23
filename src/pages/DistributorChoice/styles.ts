import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.background};
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 850px;
`;

export const Title = styled.h1`
  margin-bottom: 28px;
  font-weight: 700;
  font-size: 50px;
  line-height: 62px;
  color: ${(props) => props.theme.colors.primary};
`;

export const ButtonWrapper = styled.div`
  width: 86px;
  height: 100%;
`;

export const InputWrapper = styled.div`
  width: 87%;
  height: 86px;
  padding: 24px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.auxBackground};
`;
