import React from 'react';
import { Navigate } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function PrivateRoute({ children }: any) {
  // const auth = useAuth();
  const isLoggedIn = true;
  console.log('isLoggedIn', isLoggedIn);
  return isLoggedIn ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
