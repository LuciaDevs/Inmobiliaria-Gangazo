import { Navigate, Route, Routes } from "react-router-dom";
import NavBar from "../molecules/NavBar/NavBar";
import Home from "../../views/Home/Home";
import Contact from "../../views/Contact/Contact";
import About from "../../views/About/About";


export const InmobiRouters: React.FC = () => {


  return (
    <>
   <NavBar current_link="home"/>
      <div className="container">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route
            path="/about"
            element={<About/>}
          />

          <Route
            path="/contacto"
            element={<Contact/>}
          />
          <Route path="/" element={<Navigate to="/home" />} />
        </Routes>
      </div>
    </>
  );
};
export default InmobiRouters ;
