import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import {
  Container,
  MainContainer,
  SideLandingContainer,
  RatingHolder,
  CountHolder,
  PriceHolder,
  TextDiscription,
  DescriptionWrapper,
  ImgHolder,
  Border,
  ButtonCart,
  ButtonBuy,
  ButtonWrapper,
  Gap,
} from "./styledComponents";
import { Img } from "../navBar/styledComponents";
import ReactStars from "react-rating-star-with-type";
import { Price } from "../landingPage/subComponent";
import { AiFillLock } from "react-icons/ai";
import {AddCartData } from "../../redux/MainApi/action";

function ViewProductData() {
  const [list, setList] = useState<any>();
  const { ViewProduct , AllData} = useSelector((state: RootState) => ({
    ViewProduct: state.AllDataInOneApi.setViewData,
    AllData:state.AllDataInOneApi.LoadData
  }));
  console.log(ViewProduct);
  const dispatch = useDispatch()
  const HandleClick = (ids:any) =>{
    const newData = AllData.filter((data: any) => data.id === ids);
    dispatch(AddCartData(newData))
}
  return (
    <MainContainer>
      {ViewProduct.map((e: any, index: any) => (
        <Container key={index}>
          <ImgHolder>
            <Img src={e.image} alt="" />
          </ImgHolder>
          <SideLandingContainer>
            <Border>
              <p>{e.title}</p>
              <RatingHolder>
                {e.rating.rate}
                <ReactStars value={e.rating.rate} activeColors={["#FFCE00"]} />
                <CountHolder>{e.rating.count} Rating</CountHolder>
              </RatingHolder>
            </Border>
            <PriceHolder>
              <Border>
                $<Price>{e.price}</Price>00
                <TextDiscription>Inclusive of all taxes</TextDiscription>
              </Border>
              <DescriptionWrapper>{e.description}</DescriptionWrapper>
            </PriceHolder>

            <ButtonWrapper>
              $<Price>{e.price}</Price>00
              <RatingHolder>
                {e.rating.rate}
                <ReactStars value={e.rating.rate} activeColors={["#FFCE00"]} />
                <CountHolder>{e.rating.count} Rating</CountHolder>
              </RatingHolder>
              <div>
                <ButtonCart onClick={() =>HandleClick(e.id)}>Add to cart</ButtonCart>
              </div>
              <div>
                <ButtonBuy>Buy Now</ButtonBuy>
              </div>
              <Gap>
                <AiFillLock /> Secure transaction
              </Gap>
            </ButtonWrapper>
          </SideLandingContainer>
        </Container>
      ))}
    </MainContainer>
  );
}

export default ViewProductData;
