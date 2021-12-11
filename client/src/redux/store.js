import createSagaMiddleware from  'redux-saga';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/rootReducer';
import watchActionsClient from './saga/saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools (
    applyMiddleware(
      sagaMiddleware,
    ),
  ),
);

sagaMiddleware.run(watchActionsClient);
export default store;
