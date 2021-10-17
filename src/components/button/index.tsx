import React, {ButtonHTMLAttributes} from 'react';
import {Container} from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  background: string;
  icon?: React.ElementType;
  right?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  background,
  icon: Icon,
  right,
  ...rest
}) => (
  <Container background={background} type="button" right={right} {...rest}>
    {Icon && <Icon />}
    {children}
  </Container>
);

export default Button;
