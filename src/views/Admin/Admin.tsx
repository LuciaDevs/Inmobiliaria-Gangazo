import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminTemplate from "../../components/templates/AdminTemplate/Admintemplate";

const Admin: React.FC = () => {
  const [adminData, setAdminData] = useState({
    username: "",
    email: "",
    password: "",
    city: ""
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/users/admin");
        setAdminData(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch admin data.");
        setLoading(false);
        console.error(err);
      }
    };

    fetchAdminData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <AdminTemplate
      username={adminData.username}
      email={adminData.email}
      password={adminData.password}
      city={adminData.city}
    />
  );
};

export default Admin;