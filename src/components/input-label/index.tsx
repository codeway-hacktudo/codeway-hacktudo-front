import React, {InputHTMLAttributes} from 'react';
import {withTheme, DefaultTheme} from 'styled-components';
import Input from '../input';
import {Container, Label, TranslateLabel, InputWrapper} from './styles';

interface IInputLabelProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  labelName: string;
  translateLabelName: string;
  theme: DefaultTheme;
}

const InputLabel: React.FC<IInputLabelProps> = ({
  name,
  labelName,
  translateLabelName,
  theme,
  ...rest
}) => {
  return (
    <Container>
      <Label>{labelName}</Label>
      <TranslateLabel>{translateLabelName}</TranslateLabel>
      <InputWrapper>
        <input {...rest} placeholder="" id={name} />
      </InputWrapper>
    </Container>
  );
};

export default withTheme(InputLabel);
