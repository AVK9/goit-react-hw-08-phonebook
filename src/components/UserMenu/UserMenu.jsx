// import { Icon } from 'components/img/Icon';
// import css from './UserMenu.modal.css';
import { useDispatch, useSelector } from 'react-redux';
import { isAuthSelector, profileSelector } from 'store/auth/selectors';
import { loginOutThunk } from 'store/auth/authThunk';
import { api } from 'services/api';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const UserMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const profile = useSelector(profileSelector);
  const token = useSelector(isAuthSelector);
  api.defaults.headers.common['Authorization'] = token;
  console.log('profile :>> ', profile);
  console.log('token :>> ', token);
  useEffect(() => {
    !profile && navigate('/');
  }, [profile, navigate]);
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
