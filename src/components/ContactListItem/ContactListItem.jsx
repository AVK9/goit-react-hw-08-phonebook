import css from './ContactListItem.module.css';
import { Icon } from '../img/Icon';
import { useDispatch } from 'react-redux';
import { delContactThunk } from 'store/contacts/contactsThunk';

export const ContactListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <li className={css.contactItem}>
      <span>{name}</span>
      <span>{number}</span>
      <button
        className={css.buttonDel}
        onClick={() => dispatch(delContactThunk(id))}
      >
        <Icon id="user-minus" className={css.icons} />
        Delete
      </button>
    </li>
  );
};
