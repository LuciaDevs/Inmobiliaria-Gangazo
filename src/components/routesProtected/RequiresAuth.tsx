import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hook/userAuth";

interface RequireAuthProps {
    allowedRoles: string[];
}

const RequireAuth: React.FC<RequireAuthProps> = ({ allowedRoles }) => {
    const { authState } = useAuth();
    const location = useLocation();
    const roles = authState.user?.roles || [];

    console.log("authState:", authState);
    console.log("roles:", roles);
    console.log("allowedRoles:", allowedRoles);

    return (
        roles.some(role => allowedRoles.includes(role))
            ? <Outlet />
            : authState.logged
                ? <Navigate to="/unauthorized" state={{ from: location }} replace />
                : <Navigate to="/login" state={{ from: location }} replace />
    );
}

export default RequireAuth;
