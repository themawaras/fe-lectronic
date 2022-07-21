import React, { useState } from "react";
import style from "./payment.module.css";
import Button from "../../components/button/Button";
import logo from "../home/Logo.svg";
import foto from "../payment/cart.png";
import fotodua from "../payment/Group 126.png";
import search from "../payment/search 1.png";
import Cards from "../../components/card/Card";

const Payment = () => {
  const [counter, setCounter] = useState(0);
  const [stok, setStok] = useState(5);

  const inc = (e) => {
    e.preventDefault();
    if (counter == stok) {
      setCounter(stok);
    } else {
      setCounter(counter + 1);
    }
  };

  const dec = (e) => {
    e.preventDefault();
    if (counter == 0) {
      setCounter(0);
    } else {
      setCounter(counter - 1);
    }
  };
  return (
    <>
      <div className={style.top}>
        <div className={style.img}>
          <img alt="" src={logo} width="50" height="50" />
        </div>

        <div className={style.heading}>
          <h3>Checkout</h3>
        </div>
        <div className={style.cards}>
          <div>
            <div className={style.cardaddress}>
              <h3>Delivery Address</h3>
              <textarea
                type="text"
                id="name"
                className="address"
                placeholder="Add your address here"
              ></textarea>
              <Button
                val="change address"
                clrbg="white"
                clrfnt="#0300AD"
                wdth="217px"
                hght="59px"
                size="20px"
                weight="400"
                rad="15px"
                shad="none"
                brdr="1px solid #0300AD"
              />
            </div>
            {/* MAP THIS A!!!!! */}

            <div className={style.card}>
              <div className={style.image}>
                <input type="checkbox" name="checkbox-1" id="checkbox-1" />{" "}
                <div className={style.specificimage}>
                  <img src="" alt="" width="120" height="120" />
                </div>
                <div className={style.name}>
                  <h4>Name of Product</h4>
                  <div className={style.bluelabel}>Category</div>

                  <p>1 item | $3000</p>
                </div>
              </div>
              <div className={style.cardend}>
                <div className={style.df}>
                  <div className={style.counterbar}>
                    <div>
                      <div className={style.counter}>
                        <button onClick={dec}>-</button>
                        <p className={style.numbercounter}>{counter}</p>
                        <button onClick={inc}>+</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* END OF THIS A NOTE: MAP THIS */}
          </div>
          <div className={style.total}>
            <h4>Total</h4>
            <div>
              <p>item price</p>
              <div>
                <p>300</p>
              </div>
            </div>
            <div>
              <p>item price</p>
              <div>
                <p>300</p>
              </div>
            </div>
            <div className={style.bill}>
              <p>Bill</p>
              <div>
                <p>300</p>
              </div>
            </div>
            <Button
              val="pay bills"
              clrbg="#0300AD"
              clrfnt="white"
              wdth="100%"
              hght="40px"
              size="18px"
              weight="400"
              rad="10px"
              shad="none"
              brdr="1px solid #0300AD"
            />
            <Button
              val="choose payment method"
              clrbg="white"
              clrfnt="#0300AD"
              wdth="100%"
              hght="40px"
              size="18px"
              weight="400"
              rad="10px"
              shad="none"
              brdr="1px solid #0300AD"
            />
          </div>
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

export default Payment;
