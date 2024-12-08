// src/hooks/useAuth.js
import { useContext } from 'react';
import { AuthContext } from '../authcontext'; 

const useAuth = () => {
  return useContext(AuthContext);  
};

export  {useAuth};
