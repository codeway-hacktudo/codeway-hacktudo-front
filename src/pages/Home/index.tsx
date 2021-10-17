import React from 'react';
import Input from '../../components/input';
import {Container, Title, InputWrapper} from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Title>Hackathon BNY Mellon</Title>
      <InputWrapper>
        <Input
          buttonProps={{background: '#E4EBED', text: 'Cadastro'}}
          placeholder="Insira seu CPF ou CNPJ"
          name="accountType"
        />
      </InputWrapper>
    </Container>
  );
};

export default Home;
