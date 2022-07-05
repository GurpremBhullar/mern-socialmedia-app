import React from "react";
import "./InfoCard.css";
import { BsFillPencilFill } from "react-icons/bs";

const InfoCard = () => {
  return (
    <div className="InfoCard">
      <div className="infoHead">
        <h4>Your Info</h4>
        <div>
          <BsFillPencilFill width="2rem" height="1.2rem" />
        </div>
      </div>

      <div className="info">
        <span>
          <b>Status</b>
        </span>
        <span> in Relationships</span>
      </div>

      <div className="info">
        <span>
          <b>Lives in</b>
        </span>
        <span> Norwalk, CT</span>
      </div>

      <div className="info">
        <span>
          <b>Works At</b>
        </span>
        <span> Wyzant</span>
      </div>

      <button className="button logout-button">Logout</button>
    </div>
  );
};

export default InfoCard;
