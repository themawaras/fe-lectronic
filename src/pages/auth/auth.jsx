import style from "./auth.module.css";
import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/reducer/users";
import Button from "../../components/button/Button";
import useApi from "../../helpers/useApi";

const auth = () => {
  const [Users, setUsers] = useState({ name: "name", email: "email", password: "password" });

  const { isAuth } = useSelector((state) => state.users);

  const api = useApi();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [isAuth]);

  const onChangeInput = (event) => {
    event.preventDefault();
    const data = { ...Users };
    data[event.target.name] = event.target.value;
    setUsers(data);
  };

  const goLogin = () => {
    api
      .requests({
        method: "POST",
        url: "/auth/login",
        data: Users
      })
      .then((res) => {
        const { data } = res.data;
        dispatch(login(data.token));
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
            <h3>Welcome Back!</h3>
            <p>Steps to get started, find the best stuff.</p>
            <form action="">
              {" "}
              <input
                className={style.inpt}
                type="text"
                onChange={onChangeInput}
                name="email"
                id=""
                placeholder="Your e-mail address"
              />
              <input
                className={style.inpt}
                type="text"
                onChange={onChangeInput}
                name="password"
                id=""
                placeholder="Your password"
              />
            </form>
            <div className={style.submit}>
              {" "}
              <p>Forgot password? </p>
              <Button
                val="login"
                clrbg="#0300AD"
                clrfnt="white"
                wdth="159px"
                hght="46px"
                size="18px"
                onClick={goLogin}
              />
            </div>
          </div>
        </div>
        <div className={style.bottom}>
          Not registered yet? <a href="/signup">Create an Account</a>{" "}
        </div>
      </div>
      <div className={style.right}></div>
    </div>
  );
};

export default auth;
