import styled, {css} from 'styled-components';
import {shade} from 'polished';

interface IButtonProps {
  background: string;
  right?: boolean;
}

export const Container = styled.button<IButtonProps>`
  background: ${(props) => props.background};
  width: 100%;
  border-width: 1px;
  border-color: #1c475c;
  font-family: Merriweather;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  border-radius: 8px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1c475c;
  top: 50%;
  transition: background-color 0.2s;

  &:hover {
    background: ${(props) => shade(0.2, props.background)};
  }

  ${(props) =>
    props.right &&
    css`
      flex-direction: row-reverse;
    `}
`;
