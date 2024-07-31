import React from "react";
import "./PriceLabel.css";

interface IPriceLabel {
  price: number;
  period: string;
}

const PriceLabel: React.FC<IPriceLabel> = ({ price, period }) => {
  return (
    <div className="price-label__container">
      <p className="price-label">
        <span>${price}</span>/{period}
      </p>
    </div>
  );
};

export default PriceLabel;
