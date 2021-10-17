import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {HiArrowLeft, HiArrowRight} from 'react-icons/hi';
import loadash from 'lodash';
import Layout from '../../../components/layout';
import ProgressBar from '../../../components/progress-bar';
import InputLabel from '../../../components/input-label';
import Button from '../../../components/button';

import {inputsSteps} from '../../../utils/constants';
import {
  Container,
  ContainerInputs,
  ButtonWrapper,
  ContainerButtons,
} from '../styles';

const MissingData: React.FC = () => {
  const history = useHistory();

  // TODO ALTERAR NA INTEGRAÇÃO
  const inputsStepsErros = inputsSteps.slice(2, 5);
  const lengthInputsSteps = inputsStepsErros.length;

  const [step, setStep] = useState(0);

  const handleStep = (stepParam: number): void => {
    if (lengthInputsSteps === step + 1 && stepParam > 0) {
      return;
    }
    setStep((currentlyStep) => currentlyStep + stepParam);
  };

  return (
    <Layout
      title="Dados faltantes"
      name="Nome"
      id="000.000.000-00"
      onClickBack={() => history.goBack()}
      onClickPrincipalButton={() => history.push('/all-data')}
      color="#F7B6AF">
      <Container>
        <div>
          <ProgressBar now={step / lengthInputsSteps} />
        </div>
        <ContainerInputs>
          {loadash.map(
            inputsStepsErros[step],
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
              onClick={() => handleStep(1)}
              icon={() => <HiArrowRight color="#1C475C" size="30" />}
              background="#E4EBED"
            />
          </ButtonWrapper>
        </ContainerButtons>
      </Container>
    </Layout>
  );
};

export default MissingData;
