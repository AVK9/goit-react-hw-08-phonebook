import css from './ContactListItem.module.css';
import { Icon } from '../img/Icon';
import { useDispatch } from 'react-redux';
import { delContactThunk } from 'services/getContact';

export const ContactListItem = ({ name, phone, id }) => {
  const dispatch = useDispatch();
  const handleDel = () => {
    dispatch(delContactThunk(id));
    console.log(id);
  };

  return (
    <li className={css.contactItem}>
      <span>{name}</span>
      <span>{phone}</span>
      <button className={css.buttonDel} onClick={handleDel}>
        <Icon id="user-minus" className={css.icons} />
        {/* <i className={css.icon} class="icon ion-md-trash"></i> */}
        Delete
      </button>
    </li>
  );
};
