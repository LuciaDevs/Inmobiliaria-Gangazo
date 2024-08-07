import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import About from "./views/About/About";
import Contact from "./views/Contact/Contact";
import Home from "./views/Home/Home";
import Login from "./views/Login/Login";
import PrivateRoute from "./components/routers/PrivateRoute";
import Register from "./views/Register/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/about" element={<PrivateRoute><About /></PrivateRoute>} />
        <Route path="/contact" element={<PrivateRoute><Contact /></PrivateRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
