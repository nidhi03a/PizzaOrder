import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {
  const isAuth = window.localStorage.getItem('Token')
  return isAuth ? <Outlet /> : <Navigate to="/login_signup" />;
};

export default ProtectedRoutes;
