import { useState } from 'react';
import './App.scss';
import ContactForm from './Components/ContactForm';
import { Filter } from './Components/Filter';
import { ContactList } from './Components/ContactList';
import { connect } from 'react-redux';
import * as actions from '../src/Redux/Form/form-actions';

//----------------------------------------------------------

const App = ({ contacts, onDellContact }) => {
  const [filter, setFilter] = useState('');

  const onChange = ({ target }) => {
    setFilter(target.value);
  };

  const handleDelete = ({ target }) => {
    const id = target.id.split(':')[1];
    onDellContact(contacts.filter((contact) => contact.id !== id));
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="App-header">
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter filter={filter} onChange={onChange} />
      <ContactList
        handleDelete={handleDelete}
        filteredContacts={filteredContacts}
      />
    </div>
  );
};
//----------------------------------------------------------------
const mapStateToProps = (state) => {
  return {
    contacts: state.contacts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDellContact: (value) => dispatch(actions.onDellContact(value)),
  };
};

//---------------------------------------------------------

export default connect(mapStateToProps, mapDispatchToProps)(App);
