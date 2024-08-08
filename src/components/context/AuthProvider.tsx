import { createContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

// Define una interfaz para el estado de usuario
interface User {
  email: string;
  roles: string[];
  token?: string;
}

interface AuthState {
  logged: boolean;
  user?: User;
}

// Define una interfaz para las propiedades del contexto de autenticación
export interface AuthContextProps {
  authState: AuthState;
  setAuthState: Dispatch<SetStateAction<AuthState>>;
}

// Crea el contexto de autenticación con valores predeterminados
export const AuthsContext = createContext<AuthContextProps>({
  authState: { logged: false, user: { email: "", roles: [] } },
  setAuthState: () => {}
});

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>({ logged: false, user: { email: "", roles: [] } });

  return (
    <AuthsContext.Provider value={{ authState, setAuthState }}>
      {children}
    </AuthsContext.Provider>
  );
};

export default AuthsContext;