import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import style from "./home.module.css";
import Button from "../../components/button/Button";
import Cards from "../../components/card/Card";
import logo from "./Logo.svg";
import axios from "axios";

const Home = () => {
  const navigate = useNavigate();

  const navigateSignup = () => {
    // 👇️ navigate to /
    navigate("/signup");
  };

  const [prod, setProd] = useState([]);

  const getDataProd = async () => {
    try {
      const { data } = await axios.get(
        'http://be-lectronic.herokuapp.com/api/v1/products/'
      );
      setProd(data.data);
    } catch (error) {
      console.log('🚀 ~ file: product.jsx ~ line 15 ~ getDataProd ~ error', error);
    }
  };

  useEffect(() => {
    getDataProd();
  }, []);

  return (
    <>
      {/* nav */}
      <div className={style.nav}>
        <div className={style.container}>
          <div className={style.df}>
            <div className={style.one}>
              <img alt="" src={logo} width="40" height="40" />
              <div>lectronics</div>
            </div>
            <div>
              <a href="#home">Home</a>
              <a href="/product">Product</a>
              <a href="#com">Community</a>
              <a href="#ab">About</a>
            </div>
            <Button
              val="Sign up"
              clrbg="#0300AD"
              clrfnt="white"
              wdth="131px"
              hght="44px"
              size="18px"
              weight="600"
              onClick={navigateSignup}
            />
          </div>
        </div>
      </div>

      {/* hero */}
      <div className={style.hero}>
        <div className={style.container}>
          <div className={style.dfhero}>
            {/* left right  */}
            <div className={style.lefthero}>
              <h2>
                Take Your Time And <span className={style.blue}>Shop</span> Anywhere
              </h2>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                officia consequat duis enim velit mollit..
              </p>
              <div className={style.herobtn}>
                <Button
                  val="Shop Now"
                  clrbg="#0300AD"
                  clrfnt="white"
                  wdth="165px"
                  hght="44px"
                  size="18px"
                  weight="200"
                />
                <Button
                  val="Be a Seller"
                  clrbg="#0300AD"
                  clrfnt="#0300ad"
                  wdth="165px"
                  hght="44px"
                  size="18px"
                  weight="200"
                />
              </div>
            </div>

            <div className={style.image}></div>
          </div>
        </div>
      </div>

      {/* content */}
      <div className={style.container}>
        <div className={style.title}>
          <div className={style.box}>
            <p>how it works</p>
          </div>
          <h2>make an order easily</h2>
        </div>

        <div className={style.gridcontainer}>
          <div className={style.griditem}>
            <h4>select product</h4>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud
              amet.
            </p>
          </div>
          <div className={style.griditem}>
            <h4>make payment</h4>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud
              amet.
            </p>
          </div>{" "}
          <div onClick="#" className={style.griditem}>
            <h4>receive product</h4>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud
              amet.
            </p>
          </div>
        </div>

        <div className={style.title}>
          <div className={style.box}>
            <p>our product</p>
          </div>
          <h2>The Best Product By Lectronic</h2>
        </div>

        <div className={style.gridcontainer}>

        {prod.map((v) => {
            return (
              <Cards
              title={v.name}
              price={v.price}
              image={v.product_images[0].image_path}
            />

              );
            })}
            
        </div>

        <div className={style.lastcontent}></div>
      </div>
      <div className={style.footer}>
        <div className={style.gridfooter}>
          <div className={style.itemfooter}>
            <img alt="" src={logo} width="40" height="40" className="d-inline-block align-top" />
            <p>91 Spring Dr. Hudsonville, MI 49426</p>
          </div>
          <div className={style.itemfooter}>
            <h4>how it works</h4>
            <ul>
              <li>select product</li>
              <li>make payment</li>
              <li>receive product</li>
            </ul>
          </div>
          <div className={style.itemfooter}>
            <h4>product</h4>
            <ul>
              <li>headphone</li>
              <li>air conditioner</li>
              <li>router</li>
              <li>television</li>
            </ul>
          </div>
          <div className={style.itemfooter}>
            <h4>help</h4>
            <ul>
              <li>about</li>
              <li>contact us</li>
              <li>download app</li>
              <li>FAQs</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
