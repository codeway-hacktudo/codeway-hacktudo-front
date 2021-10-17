import React, {FC, InputHTMLAttributes} from 'react';
import {Container} from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  placeholder?: string;
}

const Input: FC<InputProps> = ({name, label, placeholder, ...rest}) => {
  return (
    <Container>
      {label && <label htmlFor={name}>{label}</label>}
      <input placeholder={placeholder} id={name} {...rest} />
    </Container>
  );
};

export default Input;
