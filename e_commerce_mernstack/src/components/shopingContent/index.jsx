import React from "react";
import { FlexWrapper } from "../../const/flexWrapper";
import {
  DataContainer,
  SubHeadingDetails,
  HeadingDetails,
  ContainerButton,
} from "../../const/DataContainer";
import { Img } from "../../const/Img";
import Sale from "../../assest/SellerSale.jpeg";
import Shoes1 from "../../assest/shoesImg/71LzBEXnhaL._AC_UF1000_1000_QL80_-removebg-preview.png";
import {
  ContainerHolder,
  Heading,
  DataContainerHolder,
  DeatilsHolder,
  WhatsNew,
  SellerSaleHolder,
  SaleDetails,
  SaleButton,
} from "./styledComponents";

export const ShopingContent = () => {
  return (
    <ContainerHolder>
      <div>
        <FlexWrapper content="space-between">
          <Heading>SEE WHAT'S NEW</Heading>
          <Heading>SHOP ALL</Heading>
        </FlexWrapper>
      </div>
      <DataContainerHolder>
        <div>
          <DataContainer>
            <Img src={Shoes1} alt="Img" />
          </DataContainer>
          <DeatilsHolder>
            <ContainerButton>ADD TO CART</ContainerButton>
            <HeadingDetails>8053 Arc Crazy Horse Leather</HeadingDetails>
            <SubHeadingDetails>Men's Shoes</SubHeadingDetails>
          </DeatilsHolder>
        </div>
        <div>
          <DataContainer>
            <Img src={Shoes1} alt="Img" />
          </DataContainer>
          <DeatilsHolder>
            <HeadingDetails>8053 Arc Crazy Horse Leather</HeadingDetails>
            <SubHeadingDetails>Men's Shoes</SubHeadingDetails>
          </DeatilsHolder>
        </div>
        <div>
          <WhatsNew>
            <h1>
              See <br />
              What's
              <br />
              New
            </h1>
          </WhatsNew>
        </div>
        <div>
          <DataContainer>
            <Img src={Shoes1} alt="Img" />
          </DataContainer>
          <DeatilsHolder>
            <ContainerButton>ADD TO CART</ContainerButton>
            <HeadingDetails>8053 Arc Crazy Horse Leather</HeadingDetails>
            <SubHeadingDetails>Men's Shoes</SubHeadingDetails>
          </DeatilsHolder>
        </div>
        <div>
          <DataContainer>
            <Img src={Shoes1} alt="Img" />
          </DataContainer>
          <DeatilsHolder>
            <ContainerButton>ADD TO CART</ContainerButton>
            <HeadingDetails>8053 Arc Crazy Horse Leather</HeadingDetails>
            <SubHeadingDetails>Men's Shoes</SubHeadingDetails>
          </DeatilsHolder>
        </div>
      </DataContainerHolder>
      <DataContainerHolder>
        <div>
          <SellerSaleHolder>
            <Img src={Sale} alt="" />
          </SellerSaleHolder>
          <SaleDetails>
            <h3>
              Disover your new <br/>
              Favorite in our Best <br/>
              Sellers Sale
            </h3>
            <SaleButton>ADD TO CART</SaleButton>
          </SaleDetails>
        </div>
        <div>
          <DataContainer>
            <Img src={Shoes1} alt="Img" />
          </DataContainer>
          <DeatilsHolder>
            <ContainerButton>ADD TO CART</ContainerButton>
            <HeadingDetails>8053 Arc Crazy Horse Leather</HeadingDetails>
            <SubHeadingDetails>Men's Shoes</SubHeadingDetails>
          </DeatilsHolder>
        </div>
        <div>
          <DataContainer>
            <Img src={Shoes1} alt="Img" />
          </DataContainer>
          <DeatilsHolder>
            <ContainerButton>ADD TO CART</ContainerButton>
            <HeadingDetails>8053 Arc Crazy Horse Leather</HeadingDetails>
            <SubHeadingDetails>Men's Shoes</SubHeadingDetails>
          </DeatilsHolder>
        </div>
        <div>
          <DataContainer>
            <Img src={Shoes1} alt="Img" />
          </DataContainer>
          <DeatilsHolder>
            <ContainerButton>ADD TO CART</ContainerButton>
            <HeadingDetails>8053 Arc Crazy Horse Leather</HeadingDetails>
            <SubHeadingDetails>Men's Shoes</SubHeadingDetails>
          </DeatilsHolder>
        </div>
      </DataContainerHolder>
    </ContainerHolder>
  );
};
