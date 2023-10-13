import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoutes = () => {
  const sessionId = document.cookie.includes('sessionId');

  return sessionId ? <Outlet /> : <Navigate to='/account/login' />;
};

export default PrivateRoutes;