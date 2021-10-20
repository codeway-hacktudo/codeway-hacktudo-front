import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {HiArrowLeft, HiArrowRight} from 'react-icons/hi';
import loadash from 'lodash';
import {DefaultTheme, withTheme} from 'styled-components';
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

interface IMissingDataProps {
  theme: DefaultTheme;
}

const MissingData: React.FC<IMissingDataProps> = ({theme}) => {
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
      onClickBack={() => history.push('/')}
      onClickPrincipalButton={() => history.push('/all-data')}
      color={theme.colors.error}>
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
                icon={() => (
                  <HiArrowLeft color={theme.colors.primary} size="30" />
                )}
                background={theme.colors.success}
              />
            </ButtonWrapper>
          )}

          <ButtonWrapper>
            <Button
              onClick={() => handleStep(1)}
              icon={() => (
                <HiArrowRight color={theme.colors.primary} size="30" />
              )}
              background={theme.colors.success}
            />
          </ButtonWrapper>
        </ContainerButtons>
      </Container>
    </Layout>
  );
};

export default withTheme(MissingData);
