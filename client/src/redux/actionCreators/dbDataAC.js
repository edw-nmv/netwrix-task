import actionTypesDBData from '../actionTypes/dbDataAT';

const dbDataAction = {
  getDataFromDB: () => ({
    type: actionTypesDBData.GET_DATA_FROM_DB_START,
  }),
};

export default dbDataAction;
