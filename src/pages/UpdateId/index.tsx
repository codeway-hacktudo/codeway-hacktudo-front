import React, {useState, useCallback} from 'react';
import {useDropzone} from 'react-dropzone';
import {useHistory} from 'react-router-dom';
import {withTheme, DefaultTheme} from 'styled-components';
import {HiUpload, HiArrowLeft} from 'react-icons/hi';
import Button from '../../components/button';
import Loading from '../Loading';

import IDConfirm from '../../assets/id-confirm.svg';

import {Container, Title, InputDropId, ButtonWrapper} from './styles';

interface IUpdateIdProps {
  theme: DefaultTheme;
}

const UpdateId: React.FC<IUpdateIdProps> = ({theme}) => {
  const history = useHistory();

  const onDrop = useCallback(
    (acceptedFiles) => {
      console.log(acceptedFiles);
      setLoading(true);

      // TODO CHAMAR API
      setTimeout(function () {
        setLoading(false);
        history.push('/all-data');
      }, 3000);
    },
    [history],
  );
  const {getRootProps, getInputProps} = useDropzone({onDrop});

  const [errorResponseUploadId, setErrorResponseUploadId] = useState(false);

  const [loading, setLoading] = useState(false);

  if (loading) {
    return <Loading />;
  }
  return (
    <Container>
      <Title>Hackathon BNY Mellon</Title>

      <section>
        {errorResponseUploadId ? (
          <InputDropId>
            <img src={IDConfirm} alt="IDConfirm" />
            <strong>Não foi possível confirmar sua identidade.</strong>
          </InputDropId>
        ) : (
          <InputDropId {...getRootProps({className: 'dropzone'})}>
            <img src={IDConfirm} alt="IDConfirm" />
            <strong>
              Para a segurança dos seus dados, é necessária uma foto sua com o
              RG ao lado do seu rosto para confirmar sua identidade
            </strong>
            <p>Faça upload ou arraste a foto para este espaço</p>
            <div>
              <HiUpload color="#B7B6AF" style={{marginRight: 5}} />
              <p>Upload</p>
            </div>

            <input {...getInputProps()} />
          </InputDropId>
        )}

        <ButtonWrapper>
          <Button
            onClick={() => history.goBack()}
            icon={() => (
              <HiArrowLeft
                color={theme.colors.primary}
                size="30"
                style={{marginRight: 5}}
              />
            )}
            background={theme.colors.auxBackground}
          />
        </ButtonWrapper>
      </section>
    </Container>
  );
};

export default withTheme(UpdateId);
