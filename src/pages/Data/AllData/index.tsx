import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {HiArrowLeft, HiArrowRight} from 'react-icons/hi';
import {DefaultTheme, withTheme} from 'styled-components';
import Modal from '../../../components/modal';
import Layout from '../../../components/layout';
import ProgressBar from '../../../components/progress-bar';
import Button from '../../../components/button';
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
  const [socialName, setSocialName] = useState('Mundo da Eletronica');
  const [cnpj, setCnpj] = useState('50685362006773');
  const [nire, setNire] = useState('');
  const [organizationDate, setOrganizationDate] = useState('21/05/2021');
  const [fiscalCountry, setFiscalCountry] = useState('Brasil');
  const [number, setNumber] = useState('1270');
  const [address, setAddress] = useState('Av Naburo Ykesaki, 1270');
  const [complement, setComplement] = useState('Fundos');
  const [cep, setCep] = useState('17500001');

  const lengthInputsSteps = 2;

  const [step, setStep] = useState(0);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleStep = (stepParam: number): void => {
    if (step === 1) {
      history.push('/digital-signature');
    }
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
            <Button
              onClick={() => setModalOpen(false)}
              background={theme.colors.background}>
              Cancelar
            </Button>
          </CancelWrapper>
          <ConfirmWrapper>
            <Button
              onClick={() => confirmChanges()}
              background={theme.colors.auxBackground}>
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
        {seeTree ? (
          <Tree />
        ) : (
          <Container>
            <div>
              <ProgressBar now={step / lengthInputsSteps} />
            </div>

            <ContainerInputs>
              {step === 0 ? (
                <>
                  <InputLabel
                    value={socialName}
                    onChange={(e) => setSocialName(e.target.value)}
                    name="socialName"
                    labelName="Razão Social (sem abreviação)"
                    translateLabelName="Company Name (no abbreviation)"
                  />
                  <InputLabel
                    value={cnpj}
                    onChange={(e) => setCnpj(e.target.value)}
                    name="cnpj"
                    labelName="CNPJ"
                    translateLabelName="Companies Tax Enrollment Number (CNPJ)"
                  />
                  <InputLabel
                    value={nire}
                    onChange={(e) => setNire(e.target.value)}
                    name="nire"
                    labelName="No Identificação no Registro de Empresas (NIRE)"
                    translateLabelName="No. of Identification in the Companies Registry (NIRE)"
                  />
                  <InputLabel
                    value={organizationDate}
                    onChange={(e) => setOrganizationDate(e.target.value)}
                    name="organizationDate"
                    labelName="Data de Constituição (dd/mm/aaaa)"
                    translateLabelName="Date of Organization (dd/mm/yyyy)"
                  />
                  <InputLabel
                    value={fiscalCountry}
                    onChange={(e) => setFiscalCountry(e.target.value)}
                    name="fiscalCountry"
                    labelName="País de Domicílio Fiscal (1)"
                    translateLabelName="Country of Domicile for Tax Purposes (1)"
                  />
                </>
              ) : (
                <>
                  <InputLabel
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    name="number"
                    labelName="Número"
                    translateLabelName="number"
                  />
                  <InputLabel
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    name="address"
                    labelName="Endereço"
                    translateLabelName="Address"
                  />
                  <InputLabel
                    value={complement}
                    onChange={(e) => setComplement(e.target.value)}
                    name="complement"
                    labelName="Complemento"
                    translateLabelName="Complement"
                  />
                  <InputLabel
                    value={cep}
                    onChange={(e) => setCep(e.target.value)}
                    name="cep"
                    labelName="CEP"
                    translateLabelName="Postcode"
                  />
                </>
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
          </Container>
        )}
      </Layout>
    </>
  );
};

export default withTheme(AllData);
