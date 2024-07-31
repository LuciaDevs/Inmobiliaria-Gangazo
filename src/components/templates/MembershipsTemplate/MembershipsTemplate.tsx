import React from "react";
import "./MembershipsTemplate.css";
import MembershipCard from "../../molecules/MembershipCard/MembershipCard";

const MembershipsTemplate: React.FC = () => {
  return (
    <>
      <div className="memberships__container">
        <img className="memberships__logo" src="/images/logo.png" />
        <div className="memberships__list-container">
          <h1 className="memberships__list-title">Membresias</h1>
          <div className="memberships__list">
            <MembershipCard title="Basic" membership="basic" price={150} />
            <MembershipCard title="Gold" membership="gold" price={300} />
            <MembershipCard title="Premium" membership="premium" price={200} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MembershipsTemplate;
