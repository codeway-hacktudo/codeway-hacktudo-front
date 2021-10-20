import {animated} from '@react-spring/web';

import styled from 'styled-components';

export const ContainerProgressBar = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

export const Main = styled.div`
  position: relative;
  width: 100%;
  height: 20px;
  cursor: pointer;
  border-radius: 8px;
  border: 2px solid ${(props) => props.theme.colors.primary};
  overflow: hidden;
`;

// alterar cor para o tema do white label

export const Content = styled(animated.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #272727;
`;

export const ContentFill = styled(animated.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.colors.primary};
`;
