import { combineReducers } from 'redux';
import dbDataReducer from './dbDataReducer';
import companyTypeReducer from './companyTypeReducer';

const rootReducer = combineReducers({
  data: dbDataReducer,
  companyType: companyTypeReducer,
});

export default rootReducer;
