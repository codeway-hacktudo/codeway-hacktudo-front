import React from 'react';
import Tree from 'react-d3-tree';
import {withTheme, DefaultTheme} from 'styled-components';
import {corporateStructure} from './helpers/constants';
import {Container, CircleTree, TextTitleTree, TextSubTitleTree} from './styles';
import {useCenteredTree} from './helpers';

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
  handleNodeClick: (node: RawNodeDatum) => void;
}

const TreeCorporateStructure: React.FC<IOrgChartTreeProps> = ({theme}) => {
  const {translate, containerRef} = useCenteredTree();

  const renderNodeWithCustomEvents = ({
    nodeDatum,
    toggleNode,
    handleNodeClick,
  }: IRenderNodeCustom): React.ReactElement => (
    <g>
      <CircleTree r="30" onClick={() => handleNodeClick(nodeDatum)} />
      <TextTitleTree x="40" onClick={toggleNode}>
        {nodeDatum.name}
      </TextTitleTree>
      {nodeDatum.attributes?.cnpj && (
        <TextSubTitleTree x="50" dy="20">
          CNPJ: {nodeDatum.attributes?.cnpj}
        </TextSubTitleTree>
      )}
    </g>
  );

  const handleNodeClick = (nodeDatum: RawNodeDatum): void => {
    // eslint-disable-next-line no-alert
    window.alert(
      nodeDatum.children ? 'Clicked a branch node' : 'Clicked a leaf node.',
    );
  };

  return (
    <Container ref={containerRef}>
      <Tree
        data={corporateStructure}
        translate={translate}
        renderCustomNodeElement={(props) =>
          renderNodeWithCustomEvents({...props, handleNodeClick})
        }
        pathFunc="elbow"
        orientation="vertical"
        separation={{nonSiblings: 1, siblings: 2.5}}
      />
    </Container>
  );
};
export default withTheme(TreeCorporateStructure);
