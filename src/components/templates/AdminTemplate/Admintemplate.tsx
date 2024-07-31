import React from "react";
import "./AdminTemplate.css";
import AdminBar from "../../molecules/AdminBar/AdminBar";
import MembershipCard from "../../molecules/MembershipCard/MembershipCard";
import FormInput from "../../atoms/FormInput/FormInput";
import PaymentsTable from "../../molecules/PaymentsTable/PaymetsTable";

interface IAdminTemplate {
  username: string;
  email: string;
  password: string;
  city: string;
}

const AdminTemplate: React.FC<IAdminTemplate> = ({
  username,
  email,
  password,
  city,
}) => {
  return (
    <div className="admin-container">
      <AdminBar name="lionel" lastname="messi" profile_photo="profile.jpeg" />
      <div className="admin__wrapper">
        <div className="admin__settings">
          <label className="admin__input-label">User name</label>
          <FormInput
            type="text"
            id="username"
            name="username"
            value={username}
            disabled={true}
            editable={true}
          />
          <label className="admin__input-label">Email</label>
          <FormInput
            type="email"
            id="email"
            name="email"
            value={email}
            disabled={true}
            editable={true}
          />
          <label className="admin__input-label">Change Password</label>
          <FormInput
            type="password"
            id="password"
            name="password"
            value={password}
            disabled={true}
            editable={true}
          />
          <label className="admin__input-label city">City</label>
          <FormInput type="text" id="city" name="city" value={city} />
        </div>
        <div className="admin__membership">
          <h2 className="admin__membership-title">Membership</h2>
          <div className="admin__membership-content">
            <MembershipCard title="Gold" membership="gold" price={300} />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. A
              voluptatum adipisci qui deleniti mollitia animi facilis sequi
              vitae ipsa velit, iste expedita repudiandae enim voluptatem
              dignissimos sint natus repellendus perspiciatis!
            </p>
          </div>
        </div>
      </div>
      <div className="admin__payments">
        <PaymentsTable />
      </div>
    </div>
  );
};

export default AdminTemplate;
