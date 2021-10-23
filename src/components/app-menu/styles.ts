import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  display: flex;
  width: 100vw;
  padding: 8px 32px;
  background-color: ${(props) => props.theme.colors.auxBackground};
  align-items: center;
`;

export const WrapperMenu = styled.div`
  width: 216px;
`;
