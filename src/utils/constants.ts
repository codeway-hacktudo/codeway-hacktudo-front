const inputsSteps = [
  {
    companyName: {
      nameLabel: 'Razão Social (sem abreviação)',
      translate: 'Company Name (no abbreviation)',
    },

    cnpj: {
      nameLabel: 'CNPJ',
      translate: 'Companies Tax Enrollment Number (CNPJ)',
    },

    nire: {
      nameLabel: 'No Identificação no Registro de Empresas (NIRE)',
      translate: 'No. of Identification in the Companies Registry (NIRE)',
    },

    dateOrganization: {
      nameLabel: 'Data de Constituição (dd/mm/aaaa)',
      translate: 'Date of Organization (dd/mm/yyyy)',
    },

    countryDomicileTaxPurposes: {
      nameLabel: 'País de Domicílio Fiscal (1)',
      translate: 'Country of Domicile for Tax Purposes (1)',
    },

    corporateInterest: {
      nameLabel: 'Participação na Sociedade (%)',
      translate: 'Corporate Interest (%)',
    },
  },
  {
    fullName: {
      nameLabel: 'Nome Completo (sem abreviação)',
      translate: 'Full Name (no abbreviation)',
    },

    cpf: {
      nameLabel: 'CPF',
      translate: 'Individual Taxpayer Registry (CPF)',
    },

    birthDate: {
      nameLabel: 'Data de Nascimento (dd/mm/aaaa)',
      translate: 'Birth Date (dd/mm/yyyy)',
    },

    idNumber: {
      nameLabel: 'Número de Identificação',
      translate: 'ID Number',
    },

    countryDomicileTaxPurposesPartner: {
      nameLabel: 'País de Domicílio Fiscal (1)',
      translate: 'Country of Domicile for Tax Purposes (1)',
    },

    corporateInterestPartner: {
      nameLabel: 'Participação na Sociedade (%)',
      translate: 'Corporate Interest (%)',
    },
  },
  {
    mainEconomicActivity: {
      nameLabel: 'Atividade Econômica Principal*',
      translate: 'Main Economic Activity*',
    },
    cnae: {
      nameLabel: 'CNAE',
      translate: 'National Classification of Economic Activities',
    },
    incorporationType: {
      nameLabel: 'Forma de Constituição*',
      translate: 'Incorporation Type*',
    },
  },
  {
    address: {
      nameLabel: 'Endereço',
      translate: 'Address',
    },

    number: {
      nameLabel: 'Número',
      translate: 'Number',
    },

    complement: {
      nameLabel: 'Complemento',
      translate: 'Complement',
    },

    district: {
      nameLabel: 'Bairro',
      translate: 'district',
    },

    postCode: {
      nameLabel: 'CEP',
      translate: 'Postcode',
    },

    city: {
      nameLabel: 'Cidade',
      translate: 'City',
    },

    state: {
      nameLabel: 'Estado',
      translate: 'State',
    },

    country: {
      nameLabel: 'País',
      translate: 'Country',
    },
  },
  {
    bank: {
      nameLabel: 'Banco',
      translate: 'Bank',
    },
    numberBank: {
      nameLabel: 'Numero',
      translate: 'Number',
    },
    branch: {
      nameLabel: 'No Agência',
      translate: 'Branch',
    },
    account: {
      nameLabel: 'Número da Conta',
      translate: 'Account',
    },
  },
  {
    equityPosition: {
      nameLabel: 'Situação Patrimonial',
      translate: 'Equity Position',
    },
    montlyAverageTurnover: {
      nameLabel: 'Faturamento Médio Mensal (dos últimos 12 meses)',
      translate: 'Montly Average Turnover (of the last 12 months)',
    },
  },

  // {
  //   fullNameAttorneyinFact: {
  //     nameLabel: 'Nome Completo (sem abreviação)',
  //     translate: 'Full Name (no abbreviation)',
  //   },

  //   cpfAttorneyinFact: {
  //     nameLabel: 'CPF',
  //     translate: 'Individual Taxpayer Registry (CPF)',
  //   },

  //   birthDateAttorneyinFact: {
  //     nameLabel: 'Data de Nascimento (dd/mm/aaaa)',
  //     translate: 'Birth Date (dd/mm/yyyy)',
  //   },

  //   idNumberAttorneyinFact: {
  //     nameLabel: 'Número de Identificação',
  //     translate: 'ID Number',
  //   },
  //   countryDomicileTaxPurposesPartnerAttorneyinFact: {
  //     nameLabel: 'País de Domicílio Fiscal (1)',
  //     translate: 'Country of Domicile for Tax Purposes (1)',
  //   },
  //   addressPartnerAttorneyinFact: {
  //     nameLabel: 'Endereço',
  //     translate: 'Address',
  //   },

  //   numberPartnerAttorneyinFact: {
  //     nameLabel: 'Número',
  //     translate: 'Number',
  //   },

  //   complementAttorneyinFact: {
  //     nameLabel: 'Complemento',
  //     translate: 'Complement',
  //   },

  //   districtAttorneyinFact: {
  //     nameLabel: 'Bairro',
  //     translate: 'district',
  //   },

  //   postCodeAttorneyinFact: {
  //     nameLabel: 'CEP',
  //     translate: 'Postcode',
  //   },

  //   cityAttorneyinFact: {
  //     nameLabel: 'Cidade',
  //     translate: 'City',
  //   },

  //   stateAttorneyinFact: {
  //     nameLabel: 'Estado',
  //     translate: 'State',
  //   },

  //   countryAttorneyinFact: {
  //     nameLabel: 'País',
  //     translate: 'Country',
  //   },

  //   professionalOccupationAttorneyinFact: {
  //     nameLabel: 'Ocupação Profissional',
  //     translate: 'Professional Occupation',
  //   },
  // },
];

export {inputsSteps};
