import React, { useReducer, ReactNode } from 'react';
import { AuthContext } from './AuthContext';
import { AuthReducer } from './AuthReducer';

const initialState = {
  logged: false,
  user: undefined,
};

const init = () => {
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  return {
    logged: !!user.email,
    user,
  };
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [authState, dispatch] = useReducer(AuthReducer, initialState, init);

  const login = (email: string) => {
    const user = { email };
    localStorage.setItem('user', JSON.stringify(user));
    const action = {
      type: 'login' as const,
      payload: user,
    };
    dispatch(action);
  };

  const logout = () => {
    localStorage.removeItem('user');
    const action = {
      type: 'logout' as const,
    };
    dispatch(action);
  };

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
