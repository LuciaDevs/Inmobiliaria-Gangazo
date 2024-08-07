import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../views/Login/Login";
import InmobiRouters from "../components/routers/InmobiRouters";
import Register from "../views/Register/Register";
import { PrivateRoute } from "../components/routers/PrivateRoute";

const Router: React.FC = () => {
    return (
        <Routes>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route 
                path="/*"
                element={
                    <PrivateRoute>
                        <InmobiRouters />
                    </PrivateRoute>
                }
            />
        </Routes>
    );
};

export default Router;