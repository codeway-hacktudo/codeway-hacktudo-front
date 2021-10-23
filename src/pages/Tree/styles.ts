import styled, {css} from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

interface IMissingData {
  missingDate: string | number | boolean | undefined;
}
export const CircleTree = styled.circle<IMissingData>`
  fill: ${(props) => props.theme.colors.primary};

  ${(props) =>
    props.missingDate &&
    css`
      fill: ${props.theme.colors.error};
    `}
`;

export const TextTitleTree = styled.text<IMissingData>`
  font-family: Merriweather;
  font-size: 20px;
  font-style: normal;
  line-height: 30px;
  stroke-width: 0px;
  fill: ${(props) => props.theme.colors.primary};
  ${(props) =>
    props.missingDate &&
    css`
      fill: ${props.theme.colors.error};
    `}
`;

export const TextSubTitleTree = styled.text<IMissingData>`
  font-family: Merriweather;
  font-size: 16px;
  font-style: normal;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: center;
  stroke-width: 0px;
  fill: ${(props) => props.theme.colors.primary};
  ${(props) =>
    props.missingDate &&
    css`
      fill: ${props.theme.colors.error};
    `}
`;

export const ChangesWrapper = styled.section`
  display: flex;
  /* height: 100%; */
  /* justify-content: center;
  align-items: center; */
  flex-direction: column;
  margin-top: 24px;
`;

export const ModalContainer = styled.div`
  position: relative;
  width: 532px;
  height: 566px;
  background: ${(props) => props.theme.colors.background};
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
