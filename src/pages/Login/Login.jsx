import { LoginForm } from 'components/LoginForm/LoginForm';
import { Title } from 'components/Title/Title';
import css from './Login.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { loginThunk } from 'store/auth/authThunk';
import { isAuthSelector } from 'store/auth/selectors';

const Login = () => {
  const isAuth = useSelector(isAuthSelector);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    isAuth && navigate('/contacts');
  }, [isAuth, navigate]);

  const login = body => {
    dispatch(loginThunk(body));
  };
  return (
    <div>
      <Link to="/">
        <Title text="Phone Book" />
      </Link>
      <div className={css.boxForm}>
        <div className={css.textBoxReg}>
          <h2>User login</h2>
          {/* <Title text="User login" /> */}
          <LoginForm login={login} />
          <div className={css.textBox2}>
            <Link to="/register" className={css.nameText2}>
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
