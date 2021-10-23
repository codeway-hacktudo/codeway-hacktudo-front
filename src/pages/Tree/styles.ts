import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const CircleTree = styled.circle`
  fill: ${(props) => props.theme.colors.primary};
`;

export const TextTitleTree = styled.text`
  font-family: Merriweather;
  font-size: 20px;
  font-style: normal;
  line-height: 30px;
  stroke-width: 0px;
  fill: ${(props) => props.theme.colors.primary};
`;

export const TextSubTitleTree = styled.text`
  font-family: Merriweather;
  font-size: 16px;
  font-style: normal;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: center;
  stroke-width: 0px;
  fill: ${(props) => props.theme.colors.primary};
`;
