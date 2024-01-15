import css from './ContactList.module.css';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import { useDispatch, useSelector } from 'react-redux';
import { getContactThunk } from 'services/getContact';
import { useEffect } from 'react';
import {
  selectError,
  selectLoading,
  selectVisibleContacts,
} from 'store/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectVisibleContacts);
  useEffect(() => {
    dispatch(getContactThunk());
    // console.log('getContactThunk :>> ', 'getContactThunk');
  }, [dispatch]);

  // const contactsRender = () => {
  //   if (contacts.length && filter) {
  //     return contacts.filter(contact =>
  //       contact.name.toLowerCase()
  //.includes(filter.toLowerCase())
  //     );
  //   } else {
  //     return contacts;
  //   }
  // };
  return (
    <>
      {loading && !error && <p>Loading pleasure wait</p>}
      {error && <p>Error: {error}</p>}
      {contacts.length ? (
        <ul className={css.contactsList}>
          {contacts.map(({ name, phone, id }) => (
            <ContactListItem name={name} phone={phone} key={id} id={id} />
          ))}
        </ul>
      ) : (
        <p className={css.contactsList}>No contacts to filter</p>
      )}
    </>
  );
};
