import React, {ButtonHTMLAttributes} from 'react';
import {Container} from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  background: string;
  icon?: React.ElementType;
  right?: boolean;
  borderColor?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  background,
  icon: Icon,
  borderColor,
  right,
  ...rest
}) => (
  <Container
    background={background}
    type="button"
    right={right}
    borderColor={borderColor}
    {...rest}>
    {Icon && <Icon />}
    {children}
  </Container>
);

export default Button;
