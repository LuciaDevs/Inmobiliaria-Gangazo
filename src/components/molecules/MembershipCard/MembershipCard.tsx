import React from "react";
import "./MembershipCard.css";
import "boxicons";
import PriceLabel from "../../atoms/PriceLabel/PriceLabel";

interface IMembershipCard {
  title: string;
  membership: string;
  price: number;
}

const MembershipCard: React.FC<IMembershipCard> = ({
  title,
  membership,
  price,
}) => {
  return (
    <div className={"membership-card__container " + membership}>
      <span className="membership--offer">
        <i className="bx bxs-offer"></i>
      </span>
      <h2 className="membership-card__title">{title}</h2>
      <PriceLabel price={price} period="month" />
    </div>
  );
};

export default MembershipCard;
