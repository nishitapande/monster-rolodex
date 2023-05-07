import React from "react";
import Cards from "./Cards";
import "./CardsList.css";

function CardsList() {
  const data = [
    {
      id: "m1",
      name: "iron-man",
      email: "monster.monster@gmail.com",
      description: "I am iron man. Dont mess with me!",
    },
    {
      id: "m2",
      name: "alluminium-man",
      email: "monster.monster@gmail.com",
      description: "I am alluminium man. Dont mess with me!",
    },
    {
      id: "m3",
      name: "monster-man",
      email: "monster.monster@gmail.com",
      description: "I am monster man. Dont mess with me!",
    },
  ];

  return (
    <div className="card-list">
      <Cards
        id={data[0].id}
        name={data[0].name}
        email={data[0].email}
        description={data[0].description}
      />
      <Cards
        id={data[1].id}
        name={data[1].name}
        email={data[1].email}
        description={data[1].description}
      />
      <Cards
        id={data[2].id}
        name={data[2].name}
        email={data[2].email}
        description={data[2].description}
      />
       <Cards
        id={data[2].id}
        name={data[2].name}
        email={data[2].email}
        description={data[2].description}
      />
     </div>
  );
}

export default CardsList;
