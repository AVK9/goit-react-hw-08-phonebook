import React, { lazy, Suspense, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from 'Layout/Layout';
import { Loader } from './Loader/Loader';
import { isAuthSelector, profileSelector } from 'store/auth/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { refreshThunk } from 'store/auth/authThunk';

const Home = lazy(() => import('pages/Home/Home'));
const Register = lazy(() => import('pages/Register/Register'));
const Login = lazy(() => import('pages/Login/Login'));
const Phonebook = lazy(() => import('pages/Phonebook'));

export const App = () => {
  const profile = useSelector(profileSelector);
  const token = useSelector(isAuthSelector);

  const dispatch = useDispatch();
  useEffect(() => {
    !profile && token && dispatch(refreshThunk());
  }, [dispatch, profile, token]);
  // !profile && token &&
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contacts" element={<Phonebook />} />
        </Route>
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </Suspense>
  );
};
