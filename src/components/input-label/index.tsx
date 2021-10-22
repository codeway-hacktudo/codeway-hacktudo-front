import React from 'react';
import {withTheme, DefaultTheme} from 'styled-components';
import Input from '../input';
import {Container, Label, TranslateLabel, InputWrapper} from './styles';

interface IInputLabelProps {
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
}) => {
  return (
    <Container>
      <Label>{labelName}</Label>
      <TranslateLabel>{translateLabelName}</TranslateLabel>
      <InputWrapper>
        <input placeholder="" id={name} />
      </InputWrapper>
    </Container>
  );
};

export default withTheme(InputLabel);
