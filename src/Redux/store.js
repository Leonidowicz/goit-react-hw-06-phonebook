import { configureStore } from '@reduxjs/toolkit';
import { contactFormReducer } from './Form/form-reducer';
import logger from 'redux-logger';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

//------------------------------------------------------------------------

const persistConfig = {
  key: 'phoneBook',
  storage,
};
const persist = persistReducer(persistConfig, contactFormReducer);
console.log(`process.env.NODE_ENV`, process.env.NODE_ENV);

//------------------------------------------------------------------------

export const store = configureStore({
  reducer: persist,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
  devTools: process.env.NODE_ENV === 'development',
});

//------------------------------------------------------------------------

export const persistor = persistStore(store);
