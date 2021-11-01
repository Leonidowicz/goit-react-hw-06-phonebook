import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import {
  onName,
  onNumber,
  onAddContact,
  onDellContact,
  filt,
} from './form-actions';

//------------------------------------------------------------------------

const initStateName = 'BORIS';
const initStateNumber = '+38 066 123 4567';
const initStateContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

//------------------------------------------------------------------------

const nameReducer = createReducer(initStateName, {
  [onName]: (_, { payload }) => payload,
});
const numberReducer = createReducer(initStateNumber, {
  [onNumber]: (_, { payload }) => payload,
});
const contactsReducer = createReducer(initStateContacts, {
  [onAddContact]: (state, { payload }) => [...state, payload],
  [onDellContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});
const filtReducer = createReducer('', {
  [filt]: (_, { payload }) => payload,
});

//------------------------------------------------------------------------

export const contactFormReducer = combineReducers({
  contacts: contactsReducer,
  name: nameReducer,
  number: numberReducer,
  filt: filtReducer,
});
