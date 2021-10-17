import React, {FC, InputHTMLAttributes} from 'react';
import {HiArrowRight} from 'react-icons/hi';
import Button from '../button';
import {Container, ButtonWrapper} from './styles';

interface IButtonProps {
  text: string;
  background: string;
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  placeholder?: string;
  buttonProps?: IButtonProps;
}

const Input: FC<InputProps> = ({
  name,
  label,
  placeholder,
  buttonProps,
  ...rest
}) => {
  return (
    <Container>
      {label && <label htmlFor={name}>{label}</label>}
      <input placeholder={placeholder} id={name} {...rest} />
      <ButtonWrapper>
        {buttonProps && (
          <Button right icon={HiArrowRight} background={buttonProps.background}>
            {buttonProps?.text}
          </Button>
        )}
      </ButtonWrapper>
    </Container>
  );
};

export default Input;
