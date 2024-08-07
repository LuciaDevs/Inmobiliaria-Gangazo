import { Navigate, Route, Routes } from "react-router-dom";
import NavBar from "../molecules/NavBar/NavBar";
import Home from "../../views/Home/Home";
import AboutTemplate from "../templates/AboutTemplate/AboutTemplate";
import ContactTemplate from "../templates/ContactTemplate/ContactTemplate";


export const InmobiRouters: React.FC = () => {


  return (
    <>
   <NavBar current_link=""/>
      <div className="container">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route
            path="/about"
            element={<AboutTemplate/>}
          />

          <Route
            path="/contacto"
            element={<ContactTemplate/>}
          />
          <Route path="/" element={<Navigate to="/home" />} />
        </Routes>
      </div>
    </>
  );
};
export default InmobiRouters ;
