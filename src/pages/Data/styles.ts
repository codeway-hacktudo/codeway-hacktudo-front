import styled, {css} from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
`;

export const ContainerInputs = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  padding: 50px 5px;
  overflow: scroll;
`;

interface IContainerButtonsProps {
  firstStep?: boolean;
}
export const ContainerButtons = styled.div<IContainerButtonsProps>`
  display: flex;
  width: 100%;
  justify-content: space-between;

  ${(props) =>
    props.firstStep &&
    css`
      justify-content: flex-end;
    `}
`;

export const ButtonWrapper = styled.div`
  width: 66px;
  height: 66px;
  margin-top: 8px;
`;
