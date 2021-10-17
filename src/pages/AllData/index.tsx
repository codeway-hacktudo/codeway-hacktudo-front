import React from 'react';
import Layout from '../../components/layout';
import ProgressBar from '../../components/progress-bar';
import {Container} from './styles';

const AllData: React.FC = () => {
  return (
    <Layout
      title="Todos os dados"
      name="Nome"
      id="000.000.000-00"
      onClickBack={() => console.log('teste')}
      onClickPrincipalButton={() => console.log('teste')}
      color="#E4EBED">
      <Container>
        <ProgressBar />
      </Container>
    </Layout>
  );
};

export default AllData;
