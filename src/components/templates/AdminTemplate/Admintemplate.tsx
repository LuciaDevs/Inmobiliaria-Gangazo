import React from "react";
import "./AdminTemplate.css";
import AdminBar from "../../molecules/AdminBar/AdminBar";
import MembershipCard from "../../molecules/MembershipCard/MembershipCard";

const AdminTemplate: React.FC = () => {
  return (
    <div className="admin-container">
      <AdminBar name="lionel" lastname="messi" profile_photo="profile.jpeg" />
      <div className="admin__wrapper">
        <div className="admin__settings">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. A
            voluptatum adipisci qui deleniti mollitia animi facilis sequi vitae
            ipsa velit, iste expedita repudiandae enim voluptatem dignissimos
            sint natus repellendus perspiciatis!
          </p>
        </div>
        <div className="admin__membership">
          <MembershipCard title="Gold" membership="gold" price={300} />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. A
            voluptatum adipisci qui deleniti mollitia animi facilis sequi vitae
            ipsa velit, iste expedita repudiandae enim voluptatem dignissimos
            sint natus repellendus perspiciatis!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminTemplate;
