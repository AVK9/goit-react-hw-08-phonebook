// import { Icon } from 'components/img/Icon';
// import css from './UserMenu.modal.css';
import { useDispatch, useSelector } from 'react-redux';
import { isAuthSelector, profileSelector } from 'store/auth/selectors';
import { loginOutThunk } from 'store/auth/authThunk';

const UserMenu = () => {
  const dispatch = useDispatch();
  const profile = useSelector(profileSelector);
  const token = useSelector(isAuthSelector);
  console.log('profile :>> ', profile);
  console.log('token :>> ', token);
  return (
    <div>
      <div>
        {/* <Icon id="user" className={css.iconsInput} /> */}
        {profile && profile.name}
      </div>
      <button onClick={() => dispatch(loginOutThunk())}>Logout</button>
    </div>
  );
};

export default UserMenu;
