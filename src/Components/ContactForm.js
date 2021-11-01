import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../Redux/Form/form-actions';
import { v4 as uuidv4 } from 'uuid';

//------------------------------------------------------

const ContactForm = () => {
  const contacts = useSelector((state) => state.contacts);
  const name = useSelector((state) => state.name);
  const number = useSelector((state) => state.number);
  const dispatch = useDispatch();

  const onSubmitForm = (e) => {
    e.preventDefault();
    const newContact = {
      id: uuidv4(),
      name,
      number,
    };
    if (number === '') {
      alert('phone number is required');
      return;
    }
    dispatch(actions.onName('TestName'));
    dispatch(actions.onNumber('+380661234567'));

    const foundContact = contacts.find(
      (newContact) => newContact.name.toLowerCase() === name.toLowerCase()
    );
    foundContact
      ? alert(`${name} is already in contacts`)
      : dispatch(actions.onAddContact(newContact));
  };

  //------------------------------------------------------

  return (
    <form onSubmit={onSubmitForm}>
      <label>
        Name
        <input
          type="text"
          placeholder="Enter name"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          value={name}
          required
          onChange={(e) => dispatch(actions.onName(e.target.value))}
        />
        Phone number
        <input
          type="tel"
          placeholder="Enter phone number"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          value={number}
          onChange={(e) => dispatch(actions.onNumber(e.target.value))}
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};

//------------------------------------------------------

export default ContactForm;
