import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MembershipsTemplate.css";
import MembershipCard from "../../molecules/MembershipCard/MembershipCard";

const MembershipsTemplate: React.FC = () => {
  const [memberships, setMemberships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMemberships = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/memberships/getMemberships");
        setMemberships(response.data); // Ajusta esto según la estructura de los datos que recibas
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch memberships data.");
        setLoading(false);
        console.error(err);
      }
    };

    fetchMemberships();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="memberships__container">
      <img className="memberships__logo" src="/images/logo.png" alt="Logo" />
      <div className="memberships__list-container">
        <h1 className="memberships__list-title">Membresias</h1>
        <div className="memberships__list">
          {memberships.map((membership: any) => (
            <MembershipCard
              key={membership.id}
              title={membership.title}
              membership={membership.type}
              price={membership.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MembershipsTemplate;