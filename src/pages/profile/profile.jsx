import React, { useState } from "react";
import style from "./profile.module.css";
import Button from "../../components/button/Button";

const Profile = () => {
  const [img, setImg] = useState();

  const onImageChange = (e) => {
    const [file] = e.target.files;
    setImg(URL.createObjectURL(file));
  };

  return (
    <>
      <div className={style.banner}>
        <div className={style.photo}>
          <img src={img} alt="" width="100%" height="100%" />
        </div>
        <div htmlFor="inputTag" className={style.input}>
          {" "}
          <input type="file" onChange={onImageChange} />
        </div>
      </div>
      <div className={style.container}>
        <h3>edit your personal bio</h3>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
          consequat duis enim velit mollit.
        </p>
        <hr />
        <div className={style.gridcontainer}>
          <div className={style.left}>
            <div className={style.label}>
              <label htmlFor="">Name</label>
              <input type="text" placeholder="What is your name" />
            </div>
            <div className={style.label}>
              <label htmlFor="">Address</label>
              <input type="text" placeholder="Where is your address" />
            </div>
            <div className={style.label}>
              <label htmlFor="">Phone number</label>
              <input type="text" placeholder="What is your phone number" />
            </div>
            <Button
              val="Submit"
              clrbg="#0300AD"
              clrfnt="white"
              wdth="30%"
              hght="65px"
              size="20px"
              weight="600"
              rad="15px"
              shad="none"
              brdr="none"
            />
          </div>

          {/* grid 2 */}
          <div>
            <div className={style.label}>
              <label htmlFor="">Date of Birth</label>
              <input type="text" placeholder="When were you born" />
            </div>
            <div className={style.label}>
              <label htmlFor="">Gender</label>
              <div className={style.gender}>
                <Button
                  val="Male"
                  clrbg="white"
                  clrfnt="black"
                  wdth="120px"
                  hght="100%"
                  size="18px"
                  weight="400"
                  rad="25px"
                  shad="none"
                  brdr="none"
                />
                <Button
                  val="Female"
                  clrbg="white"
                  clrfnt="black"
                  wdth="120px"
                  hght="100%"
                  size="18px"
                  weight="400"
                  rad="25px"
                  shad="none"
                  brdr="none"
                />
              </div>
            </div>
            <div className={style.label}>
              <label htmlFor="">Password</label>
              <input type="text" placeholder="existing password" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
