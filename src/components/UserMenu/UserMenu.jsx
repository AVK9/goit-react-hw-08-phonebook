import css from './UserMenu.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { isAuthSelector, profileSelector } from 'store/auth/selectors';
import { loginOutThunk } from 'store/auth/authThunk';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Icon } from 'components/img/Icon';

const UserMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const profile = useSelector(profileSelector);
  const token = useSelector(isAuthSelector);
  // api.defaults.headers.common['Authorization'] = token;
  console.log('profile :>> ', profile);
  console.log('token :>> ', token);
  useEffect(() => {
    !profile && navigate('/');
  }, [profile, navigate]);
  return (
    <div className={css.userBox}>
      <div className={css.userBoxCard}>
        <Icon id="user" className={css.iconsInput} />
      </div>

      <div className={css.loginShine}>{profile && profile.email}</div>

      <div onClick={() => dispatch(loginOutThunk())} className={css.Buttoon}>
        Logout
      </div>
    </div>
  );
};

export default UserMenu;
