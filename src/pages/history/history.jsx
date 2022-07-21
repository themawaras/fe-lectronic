import React, { useState } from "react";
import style from "./history.module.css";
import Button from "../../components/button/Button";
import logo from "../home/Logo.svg";
import foto from "../history/cart.png";
import fotodua from "../history/Group 126.png";
import search from "../history/search 1.png";
import Cards from "../../components/card/Card";

const History = () => {
  return (
    <>
      <div className={style.top}>
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
        <div className={style.bar}>
          <div className={style.wrapperbar}>
            <input type="text" className={style.searchbar} placeholder="Tap To Seaerch Something" />
            <button type="submit" className={style.searchbutton}>
              <img src={search} alt="" width="30" />
            </button>
          </div>
          <button className={style.btn}>
            <img src={foto} alt="" width="30" />
          </button>
          <button className={style.btn}>
            {" "}
            <img src={fotodua} alt="" width="30" />
          </button>
        </div>
        <div className={style.heading}>
          <h3>Shopping History</h3>
        </div>
        <div className={style.cards}>
          <div>
            <p>Date</p>

            {/* MAP THIS A!!!!! */}
            <a href="">
              <div className={style.card}>
                <div className={style.image}>
                  <div className={style.specificimage}>
                    <img src="" alt="" width="150" height="150" />
                  </div>

                  <div className={style.name}>
                    <div className={style.bluelabel}>Category</div>
                    <h4>Name of Product</h4>
                    <p>1 item | $3000</p>
                  </div>
                </div>
                <div className={style.cardend}>
                  <div className={style.df}>
                    <p>Total</p>
                    <h4>$3000</h4>
                  </div>
                  <div className={style.cardbtn}>
                    <button>Details</button>
                    <button>Review</button>
                  </div>
                </div>
              </div>
            </a>
            <a href="">
              <div className={style.card}>
                <div className={style.image}>
                  <div className={style.specificimage}>
                    <img src="" alt="" width="150" height="150" />
                  </div>

                  <div className={style.name}>
                    <div className={style.bluelabel}>Category</div>
                    <h4>Name of Product</h4>
                    <p>1 item | price</p>
                  </div>
                </div>
                <div className={style.cardend}>
                  <div className={style.df}>
                    <p>Total</p>
                    <h4>PRICE</h4>
                  </div>
                  <div className={style.cardbtn}>
                    <button>Details</button>
                    <button>Review</button>
                  </div>
                </div>
              </div>
            </a>
            {/* END OF THIS A NOTE: MAP THIS */}
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

export default History;
