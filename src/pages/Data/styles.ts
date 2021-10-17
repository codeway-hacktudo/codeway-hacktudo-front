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

export const ModalContainer = styled.div`
  position: relative;
  width: 532px;
  height: 566px;
  background: #fdfcfa;
  backdrop-filter: blur(10px);
  padding: 0 28px;
  border-radius: 8px;
`;

export const ModalTitle = styled.h1`
  font-style: normal;
  margin-top: 28px;
  font-weight: bold;
  font-size: 30px;
  line-height: 38px;
  text-align: center;
`;

export const ChangesWrapper = styled.section`
  display: flex;
  /* height: 100%; */
  /* justify-content: center;
  align-items: center; */
  flex-direction: column;
  margin-top: 24px;
`;

export const InputChanged = styled.strong`
  font-weight: bold;
  font-size: 18px;
  line-height: 23px;
`;

export const InputDescription = styled.strong`
  font-weight: bold;
  font-size: 18px;
  line-height: 23px;
  font-style: italic;
`;

export const CancelWrapper = styled.div`
  display: flex;
  position: absolute;
  width: 124px;
  height: 48px;
  bottom: 50px;
  left: 28px;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const ConfirmWrapper = styled.div`
  display: flex;
  position: absolute;
  width: 124px;
  height: 48px;
  bottom: 50px;
  right: 28px;
  justify-content: flex-end;
  align-items: flex-end;
`;
