import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card } from "../styled/card.styled";

const Cards = (props) => {
  return (
    <>
      {" "}
      <Card key={props.id} bg={props.image} backdrop={props.backdrop}>
        <div onClick={props.onClick}>
          <Link to={`detail/${props.id}`} className="LinkStyle">
            <h4>{props.title}</h4>
          </Link>

          <p>{props.price}</p>

          <div className="anubis"></div>
        </div>
      </Card>
    </>
  );
};

export default Cards;
