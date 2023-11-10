import React, { useEffect, useState } from "react";
import { MainContainer } from "../viewProduct/styledComponents";
import {
  Button,
  CartContainer,
  CartDivHolder,
  Heading,
  ImgComtainer,
  LogoImg,
  MainText,
  Text,
} from "./styledComponent";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Img } from "../navBar/styledComponents";
import { Price } from "../landingPage/subComponent";
const ImgLogo = require("../../assects/VASU-removebg-preview.png");

function Cart() {
  const [Array, setArray] = useState<any>([]);
  const [name, setName] = useState<any>();


  const { AllCartData } = useSelector((state: RootState) => ({
    AllCartData: state.AllDataInOneApi.AddCart,
  }));

  useEffect(() => {
    setArray( [...Array, AllCartData]);
  }, []);

  console.log(Array);

  useEffect(() => {
    setName(Array);
    localStorage.setItem("name", JSON.stringify(name));
  }, [name]);

  

  return (
    <MainContainer>
      <Heading>Shopping Cart</Heading>
      <CartDivHolder>
        {AllCartData.map((e: any, index: any) => (
          <CartContainer key={index}>
            <ImgComtainer>
              <Img src={e.image} alt="" />
            </ImgComtainer>
            <div>
              <Text>{e.title}</Text>
              <div>
                $<Price>{e.price}</Price>00 M.R.P
              </div>
              <MainText>In Stock</MainText>
              <MainText>Eligible for FREE Shipping</MainText>
              <LogoImg>
                <Img src={ImgLogo} alt="" />
              </LogoImg>
              <Button>Buy Now</Button>
            </div>
          </CartContainer>
        ))}
      </CartDivHolder>
    </MainContainer>
  );
}

export default Cart;
