import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "./product.module.css";
import Button from "../../components/button/Button";
import logo from "../home/Logo.svg";
import foto from "../product/cart.png";
import fotodua from "../product/Group 126.png";
import search from "../product/search 1.png";
import Cards from "../../components/card/Card";
import axios from "axios";

const Product = () => {
  const [prod, setProd] = useState([]);
  const navigate = useNavigate();

  const getDataProd = async () => {
    try {
      const { data } = await axios.get("http://be-lectronic.herokuapp.com/api/v1/products/");
      setProd(data.data);
    } catch (error) {
      console.log("🚀 ~ file: product.jsx ~ line 15 ~ getDataProd ~ error", error);
    }
  };

  useEffect(() => {
    getDataProd();
  }, []);

  return (
    <>
      <div className={style.top}>
        <div className={style.img}>
          <img alt="" src={logo} width="50" height="50" />
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
        <div className={style.filter}>
          <Button
            val="headphone"
            clrbg="#0300AD"
            clrfnt="white"
            wdth="168px"
            hght="56px"
            size="18px"
            weight="200"
            rad="12px"
          />
          <Button
            val="headphone"
            clrbg="white"
            clrfnt="gray"
            wdth="168px"
            hght="56px"
            size="18px"
            weight="600"
            rad="12px"
            shad="none"
          />
          <Button
            val="headphone"
            clrbg="white"
            clrfnt="gray"
            wdth="168px"
            hght="56px"
            size="18px"
            weight="600"
            rad="12px"
            shad="none"
          />
        </div>
        <div className={style.gridcontainer}>
          {prod.map((v) => {
            return (
              <Cards
                onClick={() => navigate(`/detail/${v.id}`, { state: { v } })}
                title={v.name}
                price={v.price}
                image={v.product_images[0].image_path}
                id={v.id}
              />
            );
          })}
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

export default Product;
