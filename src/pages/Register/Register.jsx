import { RegistrationForm } from 'components/RegistrationForm/RegistrationForm';
import { Title } from 'components/Title/Title';
import React from 'react';
import { Link } from 'react-router-dom';
import css from './Register.module.css';

const Register = () => {
  return (
    <div>
      <Link to="/">
        <Title text="Phone Book" />
      </Link>
      <div className={css.boxForm}>
        <div className={css.textBoxReg}>
          <h2>User registration</h2>
          {/* <Title text="User login" /> */}
          <RegistrationForm />
          <div className={css.textBox2}>
            <Link to="/login" className={css.nameText2}>
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );

  // return (
  //   <div>
  //     <Title text="User registration" />
  //     <RegistrationForm />
  //   </div>
  // );
};

export default Register;
