import React from "react";
import AdminTemplate from "../../components/templates/AdminTemplate/Admintemplate";

const Admin: React.FC = () => {
  return (
    <AdminTemplate
      username="Lionel_3"
      email="lionelcampeon@gmail.com"
      password="1234567"
      city="Rosario, Santa Fe"
    />
  );
};

export default Admin;
