import styled from 'styled-components';
import Button from '@material-ui/core/Button';

export const Container = styled.div`
  display: flex;
  width: 100vw;
  padding: 16px 32px;
  background-color: ${(props) => props.theme.colors.secundary};
`;

export const ButtonMenu = styled(Button)`
  font-family: 'Merriweather';
`;
