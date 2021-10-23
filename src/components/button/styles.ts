import styled, {css} from 'styled-components';
import {shade} from 'polished';

interface IButtonProps {
  background: string;
  borderColor?: string;
  right?: boolean;
}

export const Container = styled.button<IButtonProps>`
  background: ${(props) => props.background};
  width: 100%;
  border-width: 1px;
  border-color: transparent;
  font-family: Merriweather;
  border-style: solid;
  font-style: normal;
  font-weight: bold;
  border-radius: 8px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.primary};
  top: 50%;
  transition: background-color 0.2s;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);

  &:hover {
    background: ${(props) => shade(0.2, props.background)};
  }

  ${(props) =>
    props.right &&
    css`
      flex-direction: row-reverse;
    `}

  ${(props) =>
    props.borderColor &&
    css`
      border-color: ${props.borderColor};
    `}
`;
