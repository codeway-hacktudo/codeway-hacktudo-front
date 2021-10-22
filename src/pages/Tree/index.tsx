import React from 'react';
import Tree from 'react-d3-tree';
import {withTheme, DefaultTheme} from 'styled-components';
import {corporateStructure} from './helpers/constants';
import {Container, CircleTree} from './styles';

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
  const renderNodeWithCustomEvents = ({
    nodeDatum,
    toggleNode,
    handleNodeClick,
  }: IRenderNodeCustom): React.ReactElement => (
    <g>
      <CircleTree r="15" onClick={() => handleNodeClick(nodeDatum)} />
      <text
        fill={theme.colors.primary}
        strokeWidth="1"
        x="20"
        onClick={toggleNode}>
        {nodeDatum.name}
      </text>
      {nodeDatum.attributes?.department && (
        <text fill={theme.colors.primary} x="20" dy="20" strokeWidth="1">
          Department: {nodeDatum.attributes?.department}
        </text>
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
    <Container>
      <Tree
        data={corporateStructure}
        renderCustomNodeElement={(props) =>
          renderNodeWithCustomEvents({...props, handleNodeClick})
        }
        orientation="vertical"
      />
    </Container>
  );
};
export default withTheme(TreeCorporateStructure);
