export const corporateStructure = {
  name: 'Luiza e Benjamin Assessoria',
  attributes: {
    cnpj: '50685362006773',
    missingData: false,
    shareholding: 0.38,
  },
  children: [
    {
      name: 'Luiz Claudio Santana',
      attributes: {
        cnpj: '66539594000111',
        missingData: false,
        shareholding: 0.31,
      },
      children: [
        {
          name: 'Kauê Telecomunicações',
          attributes: {
            cnpj: '66539594000111',
            missingData: true,
            shareholding: 0.51,
          },
          children: [],
        },
      ],
    },
    {
      name: 'Lucas Mendes de Melo',
      attributes: {
        cnpj: '51329363000106',
        missingData: false,
        shareholding: 0.31,
      },

      children: [],
    },
  ],
};
