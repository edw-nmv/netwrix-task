import actionTypesDBData from "../actionTypes/dbDataAT";

const dbDataInitialState = {
  list: [],
  error: null,
}

// eslint-disable-next-line default-param-last
const dbDataReducer = ( state = dbDataInitialState, action ) => {
  switch(action.type) {
    case actionTypesDBData.GET_DATA_FROM_DB_START:
      return {
        ...state,
        error: null,
      }
    case actionTypesDBData.GET_DATA_FROM_DB_SUCCESS:
      return {
        ...state,
        list: action.payload,
      }
    case actionTypesDBData.GET_DATA_FROM_DB_ERROR:
      return {
        ...state,
        error: action.payload,
      }
      default:
      return state;
  }
}

export default dbDataReducer;
