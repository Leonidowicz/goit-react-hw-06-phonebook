import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { contactFormReducer } from './Form/form-reducer';

const store = createStore(contactFormReducer, composeWithDevTools());

export default store;
