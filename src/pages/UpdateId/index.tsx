import React, {useState} from 'react';
import {useDropzone} from 'react-dropzone';
import {HiUpload, HiArrowLeft} from 'react-icons/hi';
import Button from '../../components/button';
import IDConfirm from '../../assets/id-confirm.svg';

import {Container, Title, InputDropId, ButtonWrapper} from './styles';

const UpdateId: React.FC = () => {
  const {getRootProps, getInputProps} = useDropzone();

  // const fileList = (files: FileWithPath[]): ReactNode =>
  //   files.map((file) => (
  //     <li key={file.path}>
  //       {file.path} - {file.size} bytes
  //     </li>
  //   ));

  const [errorResponseUploadId, setErrorResponseUploadId] = useState(false);

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
        {/* <aside>
          <h4>Arquivos</h4>
          <ul>{fileList(acceptedFiles)}</ul>
        </aside> */}
        <ButtonWrapper>
          <Button
            onClick={() => console.log('teste')}
            icon={() => (
              <HiArrowLeft color="#1C475C" size="30" style={{marginRight: 5}} />
            )}
            background="#E4EBED"
          />
        </ButtonWrapper>
      </section>
    </Container>
  );
};

export default UpdateId;
