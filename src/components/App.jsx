import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// import Layout from 'Layout/Layout';
import { Loader } from './Loader/Loader';

const Home = lazy(() => import('pages/Home/Home'));
const Register = lazy(() => import('pages/Register/Register'));
const Login = lazy(() => import('pages/Login/Login'));
const Phonebook = lazy(() => import('pages/Phonebook'));

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
        <Route index element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/phonebook" element={<Phonebook />} />
        {/* </Route> */}
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </Suspense>
  );
};
