import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import AdminRegisterTemplate from "./components/templates/AdminRegisterTemplate/AdminRegisterTemplate";

import About from "./views/About/About";
import Admin from "./views/Admin/Admin";
import Contact from "./views/Contact/Contact";
import Home from "./views/Home/Home";
import Login from "./views/Login/Login";
import Memberships from "./views/Memberships/Memberships";
import Register from "./views/Register/Register";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/adminstudents" element={<About />} />
          <Route path="/adminupfile" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
