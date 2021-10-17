import React from 'react';
import {useHistory} from 'react-router-dom';

import Layout from '../../components/layout';
import ProgressBar from '../../components/progress-bar';
import {Container} from './styles';

const MissingData: React.FC = () => {
  const history = useHistory();

  return (
    <Layout
      title="Dados faltantes"
      name="Nome"
      id="000.000.000-00"
      onClickBack={() => history.goBack()}
      onClickPrincipalButton={() => history.push('/all-data')}
      color="#F7B6AF">
      <Container>
        <ProgressBar />
      </Container>
    </Layout>
  );
};

export default MissingData;
