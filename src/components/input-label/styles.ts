import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
`;

export const Label = styled.strong`
  font-family: 'Merriweather';
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 23px;
  color: ${(props) => props.theme.colors.primary};
`;

export const TranslateLabel = styled.strong`
  font-family: 'Merriweather';
  font-style: italic;
  font-weight: bold;
  font-size: 18px;
  line-height: 23px;
  color: ${(props) => props.theme.colors.primary};
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.colors.auxBackground};
  border-radius: 8px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  padding: 12px;
  margin-top: 10px;

  input {
    flex: 1;
    width: 100%;
    height: 100%;
    font-weight: 700;
    font-size: 16px;
    line-height: 44px;
    color: ${(props) => props.theme.colors.primary};
    &::-webkit-input-placeholder {
      color: #b7b6af;
      font-weight: 700;
      font-size: 18px;
      line-height: 44px;
    }
  }
`;
