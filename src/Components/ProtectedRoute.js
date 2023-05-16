
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext';
import axios from 'axios';

const ProtectedRoute = ({ element }) => {
  const { isAuthenticated, isLoading } = useContext(AuthContext);
  
  if (isLoading) {
    return <div>Loading...</div>
  }

  return isAuthenticated ? element : <Navigate to="/" />
}

export default ProtectedRoute;
