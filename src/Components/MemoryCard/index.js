import React from "react";
import "./style.css";

//Render all 16 images
const VansCard = props => (
  <div className="card" id="card-border-wrap" onClick={props.imageClick}>
    <div className="img-container">
      <img alt={props.image.replace(".jpg", "")} src={require("../../images/" + props.image)} />
    </div>
  </div>
);

export default VansCard;
