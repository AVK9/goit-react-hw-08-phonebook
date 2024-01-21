import { useState } from 'react';
import css from './ContactForm.module.css';
import { Icon } from '../img/Icon';
import { IMaskInput } from 'react-imask';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { addContactThunk } from 'store/contacts/contactsThunk';
import { selectStateContacts } from 'store/contacts/selectorsContacts';

export function ContactForm() {
  const [nameContact, setNameContact] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectStateContacts);

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setNameContact(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    checkName(nameContact);
  };

  const checkName = nameContact => {
    const findName = contact =>
      contact.name.toLowerCase() === nameContact.toLowerCase();
    if (contacts.length && contacts.some(findName)) {
      return toast.warn(`${nameContact} is already in contacts.`);
      // alert(`${name} is already in contacts`);
    }
    if (number.length < 19) {
      return toast.warn('Pleasure input number phome');
    } else {
      dispatch(addContactThunk({ name: nameContact, number }));
      console.log('HELLO');
      reset();
    }
  };

  const reset = () => {
    setNameContact('');
    setNumber('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={css.formBox}>
          <label htmlFor="Name" className={css.formLabel}>
            Name
          </label>
          <div className={css.boxInput}>
            <IMaskInput
              type="text"
              name="name"
              value={nameContact}
              onChange={handleChange}
              mask={'************'}
              placeholder="Ivan Bereza"
              required
            />

            <Icon id="user" className={css.iconsInput} />
          </div>

          <label htmlFor="Number" className={css.formLabel}>
            Number
          </label>
          <div className={css.boxInput}>
            <IMaskInput
              type="tel"
              name="number"
              placeholder="+38 (050) 158-99-33"
              mask={'+38 (000) 000-00-00'}
              value={number}
              onChange={handleChange}
              required
            />
            <Icon id="phone" className={css.iconsInput} />
          </div>

          <button type="submit" className={css.btnAddContact}>
            <Icon id="user-plus" className={css.icons} />
            {/* <i className={css.icon} class="icon ion-md-person-add"></i> */}
            Add contact
          </button>
        </div>
        <ion-icon name="search"></ion-icon>
      </form>
    </div>
  );
}
