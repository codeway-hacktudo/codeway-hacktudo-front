import styled, {css} from 'styled-components';
import Button from '@material-ui/core/Button';

export const ContainerButton = styled.div`
  display: flex;

  width: 100%;
  height: 100%;
`;

interface IButtonMenu {
  fontSize?: string;
}
export const ButtonMenu = styled(Button)<IButtonMenu>`
  padding: 0;
  width: 100%;
  height: 100%;

  span {
    justify-content: space-between;
    color: ${(props) => props.theme.colors.primary};
    align-items: center;
    font-family: Merriweather;
    font-size: 28px;
    font-style: normal;
    line-height: 44px;
    letter-spacing: 0em;
    text-align: left;
    padding: 0;

    ${(props) =>
      props.fontSize &&
      css`
        font-size: ${props.fontSize};
      `}
  }
`;
