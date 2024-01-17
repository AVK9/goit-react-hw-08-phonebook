import { useState } from 'react';
import css from './LoginForm.module.css';
import { Icon } from '../img/Icon';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { IMaskInput } from 'react-imask';
import { nanoid } from '@reduxjs/toolkit';
import { addContactThunk } from 'services/getContact';
import { selectContacts } from 'store/selectors';

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [nameContact, setNameContact] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setNameContact(value);
        break;
      case 'password':
        setPassword(value);
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
    if (!emailPattern.test(email)) {
      return toast.warn('Pleasure input corect email');
    } else {
      dispatch(
        addContactThunk({
          name: nameContact,
          email: email,
          password: password,
          id: nanoid(),
        })
      );
      console.log('!emailPattern.test(email) :>> ', emailPattern.test(email));
      console.log('NeWWWWWWWWWWW :>> ', {
        name: nameContact,
        email: email,
        password: password,
        id: nanoid(),
      });
      console.log('HELLO');
      console.log('number :>> ');
      reset();
    }
  };

  const reset = () => {
    setNameContact('');
    setEmail('');
    setPassword('');
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
              mask={'*******************'}
              type="text"
              name="name"
              value={nameContact}
              onChange={handleChange}
              placeholder="Ivan Bereza"
              required
            />

            <Icon id="user" className={css.iconsInput} />
          </div>

          <label htmlFor="password" className={css.formLabel}>
            Password
          </label>
          <div className={css.boxInput}>
            <IMaskInput
              mask={'****************'}
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={password}
              onChange={handleChange}
              placeholder="***"
              required
            />

            <Icon id="user-key" className={css.iconsInput} />
            <div className={css.checkBoxes}>
              <div
                className={css.check}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <Icon id="eye" className={css.iconsInputCheckImg} />
                ) : (
                  <Icon id="eye-blocked" className={css.iconsInputCheckImg} />
                )}
              </div>
            </div>
          </div>

          <button type="submit" className={css.btnAddContact}>
            <Icon id="enter" className={css.icons} />
            Login
          </button>
        </div>
        <ion-icon name="search"></ion-icon>
      </form>
    </div>
  );
}
