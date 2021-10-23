import React, {useState} from 'react';

import {useHistory} from 'react-router-dom';
import {HiArrowRight} from 'react-icons/hi';
import {DefaultTheme, withTheme} from 'styled-components';
import DropdownMenu from '../../components/dropdown-menu';
import Button from '../../components/button';
import {Container, Title, Content, InputWrapper, ButtonWrapper} from './styles';

interface IDistributorChoice {
  theme: DefaultTheme;
  toggleTheme(theme: string): void;
}

const distruibutorOptions = [
  {
    name: 'Distribuidora 1',
    value: 'distributor1Theme',
  },
  {
    name: 'Distribuidora 2',
    value: 'distributor2Theme',
  },
];
const DistributorChoice: React.FC<IDistributorChoice> = ({
  toggleTheme,
  theme,
}) => {
  const history = useHistory();

  const [distribuition, setDistribuition] = useState<{
    name: string;
    value: string;
  }>({
    name: distruibutorOptions[0].name,
    value: distruibutorOptions[0].value,
  });

  const toggleThemeHandler = (pickTheme: string): void => {
    const selectedTheme = distruibutorOptions.filter(
      ({value}) => value === pickTheme,
    )[0];
    setDistribuition(selectedTheme);
    toggleTheme(pickTheme);
  };

  return (
    <Container>
      <Title>Hackathon BNY Mellon</Title>

      <Content>
        <InputWrapper>
          <DropdownMenu
            showSelectedName={distribuition.name}
            options={distruibutorOptions}
            toggleOptions={toggleThemeHandler}
            placeHolder="Escolha uma distribuidora"
          />
        </InputWrapper>
        <ButtonWrapper>
          <Button
            onClick={() => history.push('/get-info')}
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

export default withTheme(DistributorChoice);
