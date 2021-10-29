import { connect } from 'react-redux';
import * as actions from '../Redux/Form/form-actions';
import { v4 as uuidv4 } from 'uuid';

//------------------------------------------------------

const ContactForm = ({
  name,
  number,
  contacts,
  onName,
  onNumber,
  onAddContact,
}) => {
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
    onName('TestName');
    onNumber('+380661234567');

    const foundContact = contacts.find(
      (newContact) => newContact.name.toLowerCase() === name.toLowerCase()
    );
    foundContact
      ? alert(`${name} is already in contacts`)
      : onAddContact(newContact);
  };

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
          onChange={onName}
        />
        Phone number
        <input
          type="tel"
          placeholder="Enter phone number"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          value={number}
          onChange={onNumber}
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};

//---------------------------------------------------------

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts,
    name: state.name,
    number: state.number,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onName: (e) => dispatch(actions.onName(e.target?.value ?? e)),
    onNumber: (e) => dispatch(actions.onNumber(e.target?.value ?? e)),
    onAddContact: (value) => dispatch(actions.onAddContact(value)),
  };
};

//---------------------------------------------------------

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
