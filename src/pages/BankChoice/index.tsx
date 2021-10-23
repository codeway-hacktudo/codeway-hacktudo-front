import React, {useState} from 'react';

import {useHistory} from 'react-router-dom';
import {HiArrowRight} from 'react-icons/hi';
import {DefaultTheme, withTheme} from 'styled-components';
import DropdownMenu from '../../components/dropdown-menu';
import Button from '../../components/button';
import {Container, Title, Content, InputWrapper, ButtonWrapper} from './styles';

interface IBankChoice {
  theme: DefaultTheme;
  toggleTheme(theme: string): void;
}

const optionsBank = [
  {
    name: 'Banco do Brasil',
    value: 'bb',
  },
  {
    name: 'Bradesco',
    value: 'bradesco',
  },
  {
    name: 'Itaú',
    value: 'itau',
  },
];

const BankChoice: React.FC<IBankChoice> = ({toggleTheme, theme}) => {
  const history = useHistory();

  const [bankSelected, setBankSelected] = useState<{
    name: string;
    value: string;
  }>({
    name: optionsBank[0].name,
    value: optionsBank[0].value,
  });

  const toggleBank = (pickBank: string): void => {
    const selectedBank = optionsBank.filter(({value}) => value === pickBank)[0];
    setBankSelected(selectedBank);
  };

  return (
    <Container>
      <Title>Hackathon BNY Mellon</Title>

      <Content>
        <InputWrapper>
          <DropdownMenu
            options={optionsBank}
            toggleOptions={toggleBank}
            placeHolder="Escolha o banco que será usado"
            showSelectedName={bankSelected.name}
          />
        </InputWrapper>
        <ButtonWrapper>
          <Button
            onClick={() => history.push('/all-data')}
            icon={() => (
              <HiArrowRight
                color={theme.colors.primary}
                size="30"
                style={{marginRight: 5}}
              />
            )}
            background={theme.colors.success}
          />
        </ButtonWrapper>
      </Content>
    </Container>
  );
};

export default withTheme(BankChoice);
