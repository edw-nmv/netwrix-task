import actionTypesCompanyType from '../actionTypes/companyTypeAT';

const companyTypeInitialState = {
  list: '',
  error: null,
};

// eslint-disable-next-line default-param-last
const companyTypeReducer = (state = companyTypeInitialState, action) => {
  switch (action.type) {
    case actionTypesCompanyType.GET_COMPANY_TYPE_START:
      return {
        ...state,
        list: action.payload,
        error: null,
      };
    default:
      return state;
  }
};

export default companyTypeReducer;
