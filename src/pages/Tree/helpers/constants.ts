export const corporateStructure = {
  name: 'Mundo da Eletronica',
  attributes: {
    cnpj: '50685362006773',
    missingData: false,
  },
  children: [
    {
      name: 'Lucas Mendes de Melo',
      attributes: {
        cnpj: '50685362006773',
        missingData: false,
      },
      children: [
        {
          name: 'Foreman',
          attributes: {
            department: 'Fabrication',
            missingData: true,
          },
          children: [],
        },
        {
          name: 'Foreman',
          attributes: {
            department: 'Fabrication',
            missingData: false,
          },
          children: [],
        },
      ],
    },
    {
      name: 'Luiz Claudio Santana',
      attributes: {
        cnpj: '50685362006773',
        missingData: false,
      },
      children: [],
    },
  ],
};
