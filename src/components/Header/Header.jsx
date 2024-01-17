import React from 'react';
import css from './Header.module.css';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className={css.headerBox}>
      <nav className={css.headerNav}>
        {/* <NavLink to="/login" className={css.headerName}>
          Enter
        </NavLink> */}
        {/* <Link to="/phonebook">Phonebook</Link> */}
      </nav>
    </div>
  );
};

export default Header;
