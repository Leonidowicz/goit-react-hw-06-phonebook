import { combineReducers } from 'redux';

//--------------------------------------------------

const initStateName = 'BORIS';
const initStateNumber = '+38 066 123 4567';
const initStateContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

//-------------------------------------------------

const nameReducer = (state = initStateName, { type, payload }) => {
  switch (type) {
    case 'ContactForm/Name':
      return payload;
    default:
      return state;
  }
};
const numberReducer = (state = initStateNumber, { type, payload }) => {
  switch (type) {
    case 'ContactForm/Number':
      return payload;
    default:
      return state;
  }
};
const contactsReducer = (state = initStateContacts, { type, payload }) => {
  switch (type) {
    case 'ContactForm/Contact':
      return [...state, payload];
    case 'ContactForm/ContactDelite':
      return payload;

    default:
      return state;
  }
};

//-----------------------------------------------------

export const contactFormReducer = combineReducers({
  contacts: contactsReducer,
  name: nameReducer,
  number: numberReducer,
});
