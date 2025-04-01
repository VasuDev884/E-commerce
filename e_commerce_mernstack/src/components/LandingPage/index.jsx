import React from "react";
import {ShopingContent} from '../shopingContent/index'
import MainImg from "../../assest/pexels-pluyar-786003.jpg";
import {
  ImgHolder,
  Img,
  Discription,
  Heading,
  HeadingHolder,
  SubHeadingHolder,
  SubHeading,
  Button,
  ButtonHolder,
} from "./styledComponent";
import { MdOutlineArrowRightAlt } from "react-icons/md";
export const LandingPage = () => {
  return (
    <>
      <ImgHolder>
        <Img src={MainImg} alt="img" />
      </ImgHolder>
      <Discription>
        <HeadingHolder>
          <Heading>UrbanNomad</Heading>
        </HeadingHolder>
        <SubHeadingHolder>
          <SubHeading>
            WELCOME TO FASHIONFUSION, YOUR ULTIMATE DESTINATION FOR ONLINE
            SHOPPING <br />
            FOR ALL THINGS FASHION AND STYLED. IMMERSE YOURSELF IN <br />A WORLD
            WHERE CREATIVITY KNOWS NO LIMITS,<span>_</span> AND <br />
            INVOVATION IS THE DRIVING FORCE BEHIND EVERY TREND
          </SubHeading>
          <ButtonHolder>
            <Button>
              EXPLORE MORE
            </Button>
          </ButtonHolder>
        </SubHeadingHolder>
      </Discription>
      <ShopingContent/>
    </>
  );
};
