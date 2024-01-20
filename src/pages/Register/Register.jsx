import { RegistrationForm } from 'components/RegistrationForm/RegistrationForm';
import { Title } from 'components/Title/Title';
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import css from './Register.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { signUpThunk } from 'store/auth/authThunk';
import { isAuthSelector } from 'store/auth/selectors';

const Register = () => {
  const isAuth = useSelector(isAuthSelector);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    isAuth && navigate('/contacts');
  }, [isAuth, navigate]);

  const register = body => {
    dispatch(signUpThunk(body));
  };

  return (
    <div>
      <Link to="/">
        <Title text="Phone Book" />
      </Link>
      <div className={css.boxForm}>
        <div className={css.textBoxReg}>
          <h2>User registration</h2>
          {/* <Title text="User login" /> */}
          <RegistrationForm register={register} />
          <div className={css.textBox2}>
            <Link to="/login" className={css.nameText2}>
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
