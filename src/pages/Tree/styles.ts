import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  width: 100vw;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const CircleTree = styled.circle`
  fill: ${(props) => props.theme.colors.secundary};
`;
