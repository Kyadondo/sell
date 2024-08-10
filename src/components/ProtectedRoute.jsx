import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ element: Element, ...rest }) => {
  const { authState } = useAuth();

  return authState.isAuthenticated ? <Element /> : <Navigate to="/signin" />;
};

export default ProtectedRoute;
