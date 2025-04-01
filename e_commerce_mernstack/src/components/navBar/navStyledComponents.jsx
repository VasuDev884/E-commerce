import styled from "styled-components";

export const Nav = styled.div`
  position: fixed;
  align-items: center;
  width: 99%;
  color: white;
  z-index: 2;
  padding: 10px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

export const Category = styled.div`
  width: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 1080px) {
    width: 30%;
    font-size: 13px;
    font-weight: 300;
  }
  @media screen and (max-width: 720px) {
    font-size: 12px;
    width: 40%;
  }
  @media screen and (max-width: 480px) {
    font-size: 10px;
    width: 40%;
  }
`;

export const Login = styled.div`
  width: 5%;
  @media screen and (max-width: 1080px) {
    width: 7%;
  }
  @media screen and (max-width: 720px) {
    width: 10%;
  }
  @media screen and (max-width: 480px) {
    width: 12%;
  }
`;

export const Heading = styled.h4`
  font-family: "Moon Dance", serif;
  font-size: 20px;
  font-style: italic;
  @media screen and (max-width: 1080px) {
    font-size: 18px;
  }
  @media screen and (max-width: 720px) {
    font-size: 15px;
  }
  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`;
