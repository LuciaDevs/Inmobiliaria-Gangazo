import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import About from "./views/About/About";
import Contact from "./views/Contact/Contact";
import Home from "./views/Home/Home";
import Login from "./views/Login/Login";
import Register from "./views/Register/Register";
import Admin from "./views/Admin/Admin";
import RequireAuth from "./components/routesProtected/RequiresAuth";
import NewPassword from "./components/organisms/NewPassword/NewPassword";
import NewPasswordTemplate from "./components/templates/NewPasswordTemplate/NewPasswordTemplate";


const ROLES = {
  Admin: "admin",
  user: "user",
};

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/password" element={<NewPasswordTemplate/>} />

        <Route element={<RequireAuth allowedRoles={[ROLES.user]} />}>
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
          <Route path="/admin" element={<Admin />} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
