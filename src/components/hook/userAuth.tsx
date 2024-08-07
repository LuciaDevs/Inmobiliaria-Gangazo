import { useContext } from "react";
import { AuthsContext, AuthContextProps } from "../context/AuthProvider";

const useAuth = (): AuthContextProps => {
    return useContext(AuthsContext);
}

export default useAuth;
