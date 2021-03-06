import React, {useState} from 'react';
import Tree from 'react-d3-tree';
import {useHistory} from 'react-router-dom';
import {withTheme, DefaultTheme} from 'styled-components';
import {corporateStructure} from './helpers/constants';
import Modal from '../../components/modal';
import Button from '../../components/button';
import InputLabel from '../../components/input-label';

import {useCenteredTree} from './helpers';

import {
  Container,
  CircleTree,
  TextTitleTree,
  TextSubTitleTree,
  ModalContainer,
  ModalTitle,
  ChangesWrapper,
  CancelWrapper,
  ConfirmWrapper,
} from './styles';

interface RawNodeDatum {
  name: string;
  attributes?: Record<string, string | number | boolean>;
  children?: RawNodeDatum[];
}

interface IOrgChartTreeProps {
  theme: DefaultTheme;
}

interface IRenderNodeCustom {
  nodeDatum: RawNodeDatum;
  toggleNode: () => void;
  // eslint-disable-next-line no-unused-vars
  handleNodeClick: (node: RawNodeDatum) => void;
}

const TreeCorporateStructure: React.FC<IOrgChartTreeProps> = ({theme}) => {
  const history = useHistory();
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedNode, setSelectedNode] = useState<RawNodeDatum>();
  const {translate, containerRef} = useCenteredTree();
  const [countrySocial, setCountrySocial] = useState('');
  const [postalCode, setPostalCode] = useState('');

  const renderNodeWithCustomEvents = ({
    nodeDatum,
    toggleNode,
    handleNodeClick,
  }: IRenderNodeCustom): React.ReactElement => (
    <g>
      <CircleTree
        r="30"
        onClick={() => handleNodeClick(nodeDatum)}
        missingDate={nodeDatum.attributes?.missingData}
      />
      <TextTitleTree
        missingDate={nodeDatum.attributes?.missingData}
        x="-120"
        dy="-70"
        onClick={toggleNode}>
        {nodeDatum.name}
      </TextTitleTree>
      {nodeDatum.attributes?.cnpj && (
        <TextSubTitleTree
          x="-100"
          dy="-50"
          missingDate={nodeDatum.attributes?.missingData}>
          CNPJ: {nodeDatum.attributes?.cnpj}
        </TextSubTitleTree>
      )}
    </g>
  );

  const handleNodeClick = (nodeDatum: RawNodeDatum): void => {
    if (nodeDatum?.attributes?.missingData) {
      setSelectedNode(nodeDatum);
      setModalOpen(true);
      return;
    }

    // eslint-disable-next-line no-alert
    window.alert('Informa????es preenchidas com sucesso!');
  };

  const confirmChanges = (): void => {
    history.push('/digital-signature');
  };

  return (
    <>
      <Modal close={() => setModalOpen(false)} isOpen={isModalOpen}>
        <ModalContainer>
          <ModalTitle>{selectedNode?.name}</ModalTitle>
          <ChangesWrapper>
            <InputLabel
              value={countrySocial}
              onChange={(e) => setCountrySocial(e.target.value)}
              name="socialName"
              labelName="Pa??s de Domic??lio Fiscal (1)"
              translateLabelName="Aqui um Campo que falta ser preenchido"
            />
          </ChangesWrapper>
          <ChangesWrapper>
            <InputLabel
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              name="cep"
              labelName="CEP"
              translateLabelName="Aqui um Campo que falta ser preenchido"
            />
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
              background={theme.colors.success}>
              Salvar
            </Button>
          </ConfirmWrapper>
        </ModalContainer>
      </Modal>
      <Container ref={containerRef}>
        <Tree
          data={corporateStructure}
          translate={translate}
          renderCustomNodeElement={(props) =>
            renderNodeWithCustomEvents({...props, handleNodeClick})
          }
          pathFunc="elbow"
          orientation="vertical"
          depthFactor={200}
          separation={{nonSiblings: 1, siblings: 2}}
        />
      </Container>
    </>
  );
};
export default withTheme(TreeCorporateStructure);
