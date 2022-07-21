import React, { useState } from "react";
import style from "./cart.module.css";
import Button from "../../components/button/Button";
import logo from "../home/Logo.svg";
import foto from "../cart/cart.png";
import fotodua from "../cart/Group 126.png";
import search from "../cart/search 1.png";
import Cards from "../../components/card/Card";

const Cart = () => {
  const [counter, setCounter] = useState(0);
  const [stok, setStok] = useState(5);

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
          <h3>Shopping Cart</h3>
          <div className={style.dfs}>
            <input type="checkbox" name="checkbox-1" id="checkbox-1" />{" "}
            <span className={style.checkmark}>
              <h4>Select All</h4>
            </span>
          </div>
        </div>
        <div className={style.cards}>
          <div>
            {/* MAP THIS A!!!!! */}
            <a href="">
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
            </a>

            <a href="">
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
            </a>

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

export default Cart;
