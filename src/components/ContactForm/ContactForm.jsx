import { useState } from 'react';
import css from './ContactForm.module.css';
import { Icon } from '../img/Icon';
import { IMaskInput } from 'react-imask';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { nanoid } from '@reduxjs/toolkit';
import { addContactThunk } from 'services/getContact';
import { selectContacts } from 'store/selectors';

export function ContactForm() {
  const [nameContact, setNameContact] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

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
      dispatch(
        addContactThunk({ name: nameContact, phone: number, id: nanoid() })
      );
      console.log('HELLO');
      console.log('number :>> ');
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
            <input
              type="text"
              name="name"
              value={nameContact}
              onChange={handleChange}
              // pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              // placeholder="Ivan Bereza"
              required
            />

            <Icon id="user" className={css.iconsInput} />
          </div>

          <label htmlFor="Number" className={css.formLabel}>
            Number
          </label>
          <div className={css.boxInput}>
            {/* <input
              type="tel"
              name="number"
              value={number}
              onChange={handleChange}
              pattern="/\+38\(\d{3}\)\d{3}-\d{2}-\d{2}/"
              required
            /> */}
            <IMaskInput
              type="tel"
              name="number"
              mask={'+38 (000) 000-00-00'}
              // pattern="/\+38\(\d{3}\)\d{3}-\d{2}-\d{2}/"
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
