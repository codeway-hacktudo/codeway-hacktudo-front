import React, {useState, useCallback} from 'react';
import {useDropzone} from 'react-dropzone';
import {useHistory} from 'react-router-dom';
import {withTheme, DefaultTheme} from 'styled-components';
import {HiUpload, HiArrowLeft} from 'react-icons/hi';
import Button from '../../components/button';
import Loading from '../Loading';

import {Container, Title, InputDropId, ButtonWrapper, Content} from './styles';

interface IDigitalSignatureProps {
  theme: DefaultTheme;
}

const DigitalSignature: React.FC<IDigitalSignatureProps> = ({theme}) => {
  const history = useHistory();

  const pushToFinished = (): void => {
    setLoading(true);

    setTimeout(function () {
      setLoading(false);
      history.push('/finished');
    }, 3000);
  };

  const finish = useCallback((acceptedFiles) => {
    setLoading(true);

    // TODO CHAMAR API
    setTimeout(function () {
      setLoading(false);
      history.push('/finished');
    }, 2000);
  }, []);
  const {getRootProps, getInputProps} = useDropzone({onDrop: finish});

  const [errorResponseUploadId, setErrorResponseUploadId] = useState(false);

  const [loading, setLoading] = useState(false);

  if (loading) {
    return <Loading />;
  }
  return (
    <Container>
      <Content>
        <Title>Insira sua assinatura digital</Title>

        <section>
          {errorResponseUploadId ? (
            <InputDropId>
              <strong>
                Não foi possível confirmar sua assinatura digital.
              </strong>
            </InputDropId>
          ) : (
            <InputDropId {...getRootProps({className: 'dropzone'})}>
              <p>
                Para a segurança dos seus dados, é necessária que você envie sua
                assinatura digital.
              </p>
              <p>Faça upload ou arraste a foto para este espaço</p>
              <div>
                <HiUpload color="#B7B6AF" style={{marginRight: 5}} />
                <p>Upload</p>
              </div>

              <input {...getInputProps()} />
            </InputDropId>
          )}
        </section>
      </Content>

      <ButtonWrapper>
        <Button
          onClick={() => pushToFinished()}
          background={theme.colors.success}>
          Finalizar
        </Button>
      </ButtonWrapper>
    </Container>
  );
};

export default withTheme(DigitalSignature);
