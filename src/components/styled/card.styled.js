import styled from "styled-components";

export const Card = styled.div`
  height: 441px;
  width: 366px;
  background-color: white;
  font-size: 1.5em;
  color: white;
  border-radius: 20px;
  padding: 1em;
  /*margin: 2em;*/
  display: flex;
  align-items: flex-end;
  display: flex;
  padding: 0px;
  margin-top: 20px;
  margin-bottom: 20px;
  text-transform: capitalize;
  box-shadow: 0px 0px 60px rgba(45, 45, 45, 0.1);
  :hover {
    transform: scale(1.03);
    transition-duration: 0.4s;
  }
  div {
    align-self: flex-start;
    height: 100px;
    width: 300px;
    color: black;
    padding-left: 5px;
    cursor: pointer;
    padding-left: 20px;
    h4 {
      color: black;
      padding-top: 20px;
      margin-bottom: 0px;
      font-family: Nunito;
      font-size: 19px;
      font-weight: 600;
      overflow: hidden;
      white-space: nowrap; /* Don't forget this one */
      text-overflow: ellipsis;
    }
    p {
      font-size: 26px;
      color: #0300ad;
      font-weight: 800;
      margin-top: 10px;
    }

    .anubis {
      height: 310px;
      margin: auto 4%;
      //   border: 2px solid black;
      background-image: url("${({ bg, backdrop }) => bg || backdrop}");
      background-size: cover;
      background-position: center;
    }
  }
`;

export const Cardbig = styled.div`
  margin-right: 20px;
  height: 600px;
  width: 492px;
  border: 1px solid black;
  border-radius: 20px;
  box-shadow: 0px 0px 60px rgba(45, 45, 45, 0.1);
  padding: 30px;
`;
