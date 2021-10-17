import React from 'react';

import {Container, Title} from './styles';
import LoadingGif from '../../assets/loading-gif.gif';

const Loading: React.FC = () => {
  return (
    <Container>
      <img src={LoadingGif} alt="loading..." />
      <Title>
        Aguarde um instante. Estamos processando seu pedido de cadastro.
      </Title>
    </Container>
  );
};

export default Loading;
