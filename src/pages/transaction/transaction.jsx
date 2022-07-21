import React, { useState } from "react";
import style from "./transaction.module.css";
import Button from "../../components/button/Button";
import Cards from "../../components/card/Card";
import logo from "../home/Logo.svg";
import bag from "./bag-check 1.png";

const Transaction = () => {
  return (
    <>
      <div className={style.top}>
        <div className={style.img}>
          <img alt="" src={logo} width="50" height="50" />
        </div>

        <div className={style.transaction}>
          <img alt="" src={bag} width="150" height="150" />
          <h3>Transaction Succes</h3>
          <p>Transaction was successful, do you want to shop again?</p>
          <Button
            val="shop again"
            clrbg="#0300AD"
            clrfnt="white"
            wdth="25%"
            hght="59px"
            size="18px"
            weight="400"
            rad="10px"
            shad="none"
            brdr="1px solid #0300AD"
          />
        </div>
        <h4>Recommendation For you</h4>
        <div className={style.gridcontainer}>
          <Cards
            title="seinheisser"
            price="$3000"
            image="https://www.sony.co.id/image/a181504e081f5e4af6f88861c58de008?fmt=png-alpha&resMode=bisharp&wid=384"
          />
          <Cards
            title="seinheisser"
            price="$3000"
            image="https://www.sony.co.id/image/a181504e081f5e4af6f88861c58de008?fmt=png-alpha&resMode=bisharp&wid=384"
          />
          <Cards
            title="seinheisser"
            price="$3000"
            image="https://www.sony.co.id/image/a181504e081f5e4af6f88861c58de008?fmt=png-alpha&resMode=bisharp&wid=384"
          />
          <Cards
            title="seinheisser"
            price="$3000"
            image="https://www.sony.co.id/image/a181504e081f5e4af6f88861c58de008?fmt=png-alpha&resMode=bisharp&wid=384"
          />
          <Cards
            title="seinheisser"
            price="$3000"
            image="https://www.sony.co.id/image/a181504e081f5e4af6f88861c58de008?fmt=png-alpha&resMode=bisharp&wid=384"
          />
          <Cards
            title="seinheisser"
            price="$3000"
            image="https://www.sony.co.id/image/a181504e081f5e4af6f88861c58de008?fmt=png-alpha&resMode=bisharp&wid=384"
          />
        </div>
        <div className={style.top}>
          <div className={style.barbottom}>
            <div className={style.pagination}>
              <a href="#">&laquo;</a>
              <a href="#">1</a>
              <a href="#">2</a>
              <a href="#">3</a>
              <a href="#">4</a>
              <a href="#">5</a>
              <a href="#">6</a>
              <a href="#">&raquo;</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Transaction;
