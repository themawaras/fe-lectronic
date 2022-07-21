import styled from "styled-components";

export const Btn = styled.button`
  background-color: ${({ clrbg }) => clrbg};
  color: ${({ clrfnt }) => clrfnt};
  width: ${({ wdth }) => wdth};
  height: ${({ hght }) => (hght ? hght : "40px")};
  font-size: ${({ size }) => (size ? size : "20px")};
  font-weight: ${({ weight }) => (weight ? weight : "900")};
  border-radius: ${({ rad }) => (rad ? rad : "10px")};
  box-shadow: ${({ shad }) => (shad ? shad : "5px 4px 50px 0px #0300ad33")};
  border: ${({ brdr }) => (brdr ? brdr : "none")};
  font-family: Nunito;
  padding: 0px;
  cursor: pointer;
  text-transform: capitalize;
`;
