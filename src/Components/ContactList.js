import * as actions from '../Redux/Form/form-actions';
import { useSelector, useDispatch } from 'react-redux';

//------------------------------------------------------------------------

const filteredContacts = (items, filter) => {
  return items.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );
};

//------------------------------------------------------------------------

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts);
  const filt = useSelector((state) => state.filt);

  return (
    <ul>
      {filteredContacts(contacts, filt).map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <button
            type="button"
            onClick={() => dispatch(actions.onDellContact(id))}
          >
            Delete contact: {name}
          </button>
        </li>
      ))}
    </ul>
  );
};

//------------------------------------------------------------------------

export default ContactList;
