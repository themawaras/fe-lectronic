import React from "react";
import { Btn } from "../styled/button.styled";

const Button = (props) => {
  return (
    <>
      <Btn
        clrbg={props.clrbg}
        clrfnt={props.clrfnt}
        wdth={props.wdth}
        hght={props.hght}
        size={props.size}
        onClick={props.onClick}
        weight={props.weight}
        rad={props.rad}
        shad={props.shad}
        brdr={props.brdr}
      >
        {props.val}
      </Btn>
    </>
  );
};

export default Button;
