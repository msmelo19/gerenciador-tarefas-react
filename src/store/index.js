import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';

import persistReducer from './modules/reduxPersist';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  persistReducer(rootReducer),
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
export default store;
