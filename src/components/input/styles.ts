import styled from 'styled-components';

export const Container = styled.div``;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #f4f2e9;
  border-radius: 8px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  padding: 21px 24px;
  margin-bottom: 8px;

  input {
    flex: 1;
    width: 100%;
    height: 100%;
    font-weight: 700;
    font-size: 35px;
    line-height: 44px;
    &::-webkit-input-placeholder {
      color: #b7b6af;
      font-weight: 700;
      font-size: 35px;
      line-height: 44px;
    }
  }
`;

export const ButtonWrapper = styled.div`
  width: 184px;
  height: 56px;
`;

export const ErrorMessage = styled.strong`
  color: #ff988d;
  font-size: 24px;
  font-weight: 700;
`;
