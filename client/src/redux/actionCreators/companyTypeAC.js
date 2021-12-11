import actionTypesCompanyType from '../actionTypes/companyTypeAT';

const companyTypeAction = {
  addCompanyTypeToState: () => ({
    type: actionTypesCompanyType.GET_COMPANY_TYPE_START,
  }),
};

export default companyTypeAction;
