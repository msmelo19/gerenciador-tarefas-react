import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducer) => {
  const persistedReducers = persistReducer({
    key: 'HELPER',
    storage,
    whitelist: ['auth'],
  }, reducer);

  return persistedReducers;
};
