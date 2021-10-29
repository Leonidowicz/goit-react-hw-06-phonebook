import { connect } from 'react-redux';
import * as actions from '../Redux/Form/form-actions';

//------------------------------------------------------------------------

const ContactList = ({ filteredContacts, onDellContact }) => {
  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <button type="button" onClick={() => onDellContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

//------------------------------------------------------------------------

const filteredContacts = (items, filter) => {
  return items.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );
};

//------------------------------------------------------------------------

const mapStateToProps = ({ filt, contacts }) => ({
  contacts,
  filteredContacts: filteredContacts(contacts, filt),
});

const mapDispatchToProps = (dispatch) => {
  return {
    onDellContact: (value) => dispatch(actions.onDellContact(value)),
  };
};

//------------------------------------------------------------------------

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
