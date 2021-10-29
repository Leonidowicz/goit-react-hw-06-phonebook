import actionType from './action-type';

//------------------------------------------------------------------------

export const onName = (value) => ({
  type: actionType.addName,
  payload: value,
});

export const onNumber = (value) => ({
  type: actionType.addNumber,
  payload: value,
});

export const onAddContact = (value) => ({
  type: actionType.addContact,
  payload: value,
});
export const onDellContact = (value) => ({
  type: actionType.contactDelite,
  payload: value,
});
export const filt = (value) => ({
  type: actionType.filt,
  payload: value,
});
