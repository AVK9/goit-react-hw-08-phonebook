import React from 'react';
import css from './Home.module.css';
import { Title } from 'components/Title/Title';
// import Header from 'components/Header/Header';
import { Link } from 'react-router-dom';
import { Icon } from 'components/img/Icon';
// import imagePhonebook from '../../components/img/phonebook.svg';

const Home = () => {
  return (
    <div className={css.boxHome}>
      <Link to="/contacts">
        <Title text="Phonebook" />
      </Link>
      <div className={css.btnEnterBook}>
        <Link to="/login">
          <Icon id="enter" className={css.icons} />
        </Link>

        <Link to="/login" className={css.headerName}>
          Enter
        </Link>
      </div>
    </div>
  );
};

export default Home;
