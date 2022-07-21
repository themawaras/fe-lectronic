import React, { useState, useRef } from "react";
import style from "./signup.module.css";
import Button from "../../components/button/Button";
import useApi from "../../helpers/useApi";

const Signup = () => {
  const [Users, setUsers] = useState({ name: "name", email: "email", password: "password" });

  const api = useApi();

  const onChangeInput = (event) => {
    event.preventDefault();
    const data = { ...Users };
    data[event.target.name] = event.target.value;
    setUsers(data);
  };

  const register = () => {
    api
      .requests({
        method: "POST",
        url: "/users/",
        data: Users
      })
      .then((res) => {
        console.log("res ", res);
      })
      .catch((err) => {
        console.log("error ", err);
      });
  };
  return (
    <div className={style.df}>
      <div className={style.left}>
        <div className={style.leftcenter}>
          <div>
            <div className={style.break}>
              <h3>Welcome, Please Create an Account!</h3>
            </div>

            <p>Please fill your name, email and password.</p>
            <form action="">
              {" "}
              <input
                type="text"
                onChange={onChangeInput}
                name="name"
                id=""
                placeholder="What's your name?"
              />
              <input
                type="text"
                onChange={onChangeInput}
                name="email"
                id=""
                placeholder="Your e-mail address"
              />
              <input
                type="text"
                onChange={onChangeInput}
                name="password"
                id=""
                placeholder="Your password"
              />
            </form>
            <div className={style.submit}>
              {" "}
              <p></p>
              <Button
                val="register"
                clrbg="#0300AD"
                clrfnt="white"
                wdth="159px"
                hght="46px"
                size="18px"
                onClick={register}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={style.right}></div>
    </div>
  );
};

export default Signup;
