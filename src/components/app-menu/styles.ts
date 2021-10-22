import styled from 'styled-components';
import Button from '@material-ui/core/Button';

export const Container = styled.div`
  position: absolute;
  display: flex;
  width: 100vw;
  height: 70px;
  padding: 16px 32px;
  background-color: ${(props) => props.theme.colors.auxBackground};
`;

export const ButtonMenu = styled(Button)`
  font-family: 'Merriweather';
`;
