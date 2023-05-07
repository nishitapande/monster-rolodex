import React from "react";
import "./Cards.css";

function Cards(props) {
  return (
    <div className="cards">
      <div className="img-box">
        <img
          src=`https://robohash.org/${props.id}?set=set2`
          className="img-size"
        />
      </div>
      <div className="text-box">
        <h2 className="secondary-heading"> {props.name} </h2>
        {/* <h2 className="secondary-heading"> Monster name </h2> */}
        <p className="card-text"> {props.email} </p>
        {/* <p className="card-text"> Monster Email </p> */}
        <p className="card-text-two"> {props.description} </p>
        {/* <p className="card-text-two"> Monster Description</p> */}
      </div>
    </div>
  );
}

export default Cards;
