import React from 'react';
import Layout from '../../components/layout';
import ProgressBar from '../../components/progress-bar';
import {Container} from './styles';

const MissingData: React.FC = () => {
  return (
    <Layout
      title="Dados faltantes"
      name="Nome"
      id="000.000.000-00"
      onClickBack={() => console.log('teste')}
      onClickPrincipalButton={() => console.log('teste')}
      color="#F7B6AF">
      <Container>
        <ProgressBar />
      </Container>
    </Layout>
  );
};

export default MissingData;
