import React from 'react';
import Input from '../input';
import {Container, Label, TranslateLabel, InputWrapper} from './styles';

interface IInputLabelProps {
  name: string;
  labelName: string;
  translateLabelName: string;
}

const InputLabel: React.FC<IInputLabelProps> = ({
  name,
  labelName,
  translateLabelName,
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

export default InputLabel;
