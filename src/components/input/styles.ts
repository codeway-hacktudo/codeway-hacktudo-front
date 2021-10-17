import styled from 'styled-components';

// interface ContainerProps {
//   isFocused: boolean;
//   isFilled: boolean;
//   isErrored: boolean;
// }

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: #f4f2e9;
  border-radius: 8px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  padding: 21px 24px;

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
