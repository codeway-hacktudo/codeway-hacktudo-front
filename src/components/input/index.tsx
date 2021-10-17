import React, {FC, InputHTMLAttributes} from 'react';
import {HiArrowRight} from 'react-icons/hi';
import Button from '../button';
import {InputWrapper, ButtonWrapper, ErrorMessage, Container} from './styles';

interface IButtonProps {
  text: string;
  background: string;
  action: () => void;
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  placeholder?: string;
  buttonProps?: IButtonProps;
  error?: string;
}

const Input: FC<InputProps> = ({
  name,
  label,
  placeholder,
  buttonProps,
  error = '',
  ...rest
}) => {
  return (
    <Container>
      {label && <label htmlFor={name}>{label}</label>}
      <InputWrapper>
        <input placeholder={placeholder} id={name} {...rest} />
        <ButtonWrapper>
          {buttonProps && (
            <Button
              onClick={() => buttonProps.action()}
              right
              icon={HiArrowRight}
              background={buttonProps.background}>
              {buttonProps?.text}
            </Button>
          )}
        </ButtonWrapper>
      </InputWrapper>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};

export default Input;
