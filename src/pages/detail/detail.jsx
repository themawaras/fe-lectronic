import React, { useState } from "react";
import style from "./detail.module.css";
import { useLocation } from "react-router-dom";
import Button from "../../components/button/Button";
import Cardsbig from "../../components/card/Cardbig";
import logo from "../home/Logo.svg";

const Detail = () => {
  const [counter, setCounter] = useState(0);
  const [stok, setStok] = useState(5);

  const { state } = useLocation();

  const inc = () => {
    if (counter == stok) {
      setCounter(stok);
    } else {
      setCounter(counter + 1);
    }
  };

  const dec = () => {
    if (counter == 0) {
      setCounter(0);
    } else {
      setCounter(counter - 1);
    }
  };
  const image =
    "https://www.sony.co.id/image/a181504e081f5e4af6f88861c58de008?fmt=png-alpha&resMode=bisharp&wid=384";
  return (
    <>
      {console.log(state)}
      <div className="img">
        <div>
          <img alt="" src={logo} width="50" height="50" />
        </div>
        <div class="dropdown-content">
          <img alt="" src={logo} width="50" height="50" />
          <hr />

          <a href="/cart">cart</a>
          <a href="/history">history</a>
          <a href="/profile">profile</a>
          <a href="#">logout</a>
        </div>
      </div>
      <div className={style.container}>
        <div className={style.dgrid}>
          <div>
            <div className={style.cardbig}>
              {/* category */}
              <div className={style.bluelabel}>{state.v.category}</div>
              <img src={state.v.product_images[0].image_path} alt="" width="420px" />
              <div className={style.fotoflex}>
                <img src={state.v.product_images[1].image_path} alt="" width="99px" height="99px" />
                <img src={state.v.product_images[2].image_path} alt="" width="99px" height="99px" />
                <img src={state.v.product_images[3].image_path} alt="" width="99px" height="99px" />
                <img src={state.v.product_images[4].image_path} alt="" width="99px" height="99px" />
              </div>
            </div>

            <div className={style.cardsmall}>
              {/* category */}
              <div className={style.smallcontainer}>
                <h4>details</h4>
                <div className={style.counterbar}>
                  <div>
                    <div className={style.counter}>
                      <button onClick={dec}>-</button>
                      <p className={style.numbercounter}>{counter}</p>
                      <button onClick={inc}>+</button>
                    </div>
                    <div>add notes</div>
                  </div>
                  <p className={style.stok}>
                    Stok <span className={style.stoknum}>5</span>
                  </p>
                </div>
                <div className={style.subbtn}>
                  <div className={style.sub}>
                    <p>Sub-Total</p>
                    <h4 className={style.subtotal}>$3000</h4>
                  </div>
                  <div>
                    <Button
                      val="CheckOut"
                      clrbg="#0300AD"
                      clrfnt="white"
                      wdth="322px"
                      hght="87px"
                      size="25px"
                      weight="200"
                      rad="25px"
                    />
                    <Button
                      val="+"
                      clrbg="white"
                      clrfnt="#0300AD"
                      wdth="98px"
                      hght="87px"
                      size="50px"
                      weight="200"
                      rad="25px"
                      shad="none"
                      brdr="1px solid #0300AD"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={style.right}>
            {/* nama produk */}
            <h3>{state.v.name}</h3>
            <p>
              Sold <span className={style.blue}>6</span> |{" "}
              <span className={style.blue}>Star 4.9</span>
            </p>
            <div className={style.df}>
              <a href="">
                <p className={style.blue}>Details</p>
              </a>
              <a href="">
                <p>Review</p>
              </a>
            </div>
            <p>{state.v.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
