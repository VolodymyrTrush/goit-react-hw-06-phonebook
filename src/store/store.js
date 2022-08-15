import { configureStore } from '@reduxjs/toolkit';
import contacts from './contacts/contacts';
import { persistStore } from 'redux-persist';
import { middleware } from './middleware';

export const store = configureStore({
  reducer: {
    contacts,
  },
  middleware,
});

export const persistor = persistStore(store);
