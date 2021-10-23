import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {HiArrowLeft, HiArrowRight} from 'react-icons/hi';

import loadash from 'lodash';
import {DefaultTheme, withTheme} from 'styled-components';
import Modal from '../../../components/modal';
import Layout from '../../../components/layout';
import ProgressBar from '../../../components/progress-bar';
import Button from '../../../components/button';
import {inputsSteps} from '../../../utils/constants';
import Tree from '../../Tree';
import InputLabel from '../../../components/input-label';
import {
  Container,
  ContainerInputs,
  ButtonWrapper,
  ContainerButtons,
  ModalContainer,
  ModalTitle,
  ChangesWrapper,
  InputChanged,
  InputDescription,
  CancelWrapper,
  ConfirmWrapper,
} from '../styles';

interface IAllDataProps {
  theme: DefaultTheme;
}

const AllData: React.FC<IAllDataProps> = ({theme}) => {
  const history = useHistory();
  const [seeTree, setSeeTree] = useState(false);
  const lengthInputsSteps = inputsSteps.length;

  const [step, setStep] = useState(0);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleStep = (stepParam: number): void => {
    if (lengthInputsSteps === step + 1 && stepParam > 0) {
      return;
    }
    setStep((currentlyStep) => currentlyStep + stepParam);
  };

  const confirmChanges = (): void => {
    handleStep(1);
    setModalOpen(false);
  };

  const handleSeeTree = (): void => {
    setSeeTree(!seeTree);
  };

  return (
    <>
      <Modal close={() => setModalOpen(false)} isOpen={isModalOpen}>
        <ModalContainer>
          <ModalTitle>Os seguintes dados foram alterados:</ModalTitle>
          <ChangesWrapper>
            <InputChanged>Razão Social (sem abreviação)</InputChanged>
            <InputDescription>
              Corporate Name (no abbreviation allowed)
            </InputDescription>
          </ChangesWrapper>
          <ChangesWrapper>
            <InputChanged>CNPJ</InputChanged>
            <InputDescription>
              Companies Tax Enrollment Number(CNPJ)
            </InputDescription>
          </ChangesWrapper>
          <CancelWrapper>
            <Button onClick={() => setModalOpen(false)} background="#fdfcfa">
              Cancelar
            </Button>
          </CancelWrapper>
          <ConfirmWrapper>
            <Button onClick={() => confirmChanges()} background="#E4EBED">
              Salvar
            </Button>
          </ConfirmWrapper>
        </ModalContainer>
      </Modal>
      <Layout
        title="Todos os dados"
        name="Nome"
        id="000.000.000-00"
        onClickBack={() => history.push('/')}
        onClickPrincipalButton={() => history.push('/missing-data')}
        onClickSeeTree={handleSeeTree}
        color={theme.colors.success}>
        <Container>
          {seeTree ? (
            <Tree />
          ) : (
            <>
              <div>
                <ProgressBar now={step / lengthInputsSteps} />
              </div>

              <ContainerInputs>
                {loadash.map(
                  inputsSteps[step],
                  (
                    inputMapContext: {nameLabel: string; translate: string},
                    index,
                  ) => {
                    return (
                      <InputLabel
                        name={index}
                        labelName={inputMapContext.nameLabel}
                        translateLabelName={inputMapContext.translate}
                      />
                    );
                  },
                )}
              </ContainerInputs>

              <ContainerButtons firstStep={step === 0}>
                {step !== 0 && (
                  <ButtonWrapper>
                    <Button
                      onClick={() => handleStep(-1)}
                      icon={() => <HiArrowLeft color="#1C475C" size="30" />}
                      background="#E4EBED"
                    />
                  </ButtonWrapper>
                )}

                <ButtonWrapper>
                  <Button
                    onClick={() =>
                      step === 0 ? setModalOpen(true) : handleStep(1)
                    }
                    icon={() => <HiArrowRight color="#1C475C" size="30" />}
                    background="#E4EBED"
                  />
                </ButtonWrapper>
              </ContainerButtons>
            </>
          )}
        </Container>
      </Layout>
    </>
  );
};

export default withTheme(AllData);
