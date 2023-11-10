import React from "react";
import {
  Input,
  NavComtainer,
  InputHolder,
  UserCartHolder,
  ImgHolder,
  Img,
} from "./styledComponents";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
const ImgLogo = require("../../assects/VASU-removebg-preview.png");

function NavBar() {
  return (
    <NavComtainer>
      <ImgHolder>
        <Link to={'/'}><Img src={ImgLogo} alt="" /></Link>
      </ImgHolder>
      <InputHolder>
        <Input type="search" name="" id="" placeholder="Search" />
      </InputHolder>
      <UserCartHolder>
        <div>
          <Link to={'/cart'}>
          <AiOutlineShoppingCart style={{ fontSize: "30px" }} />
          </Link>
        </div>
        <div>
          <AiOutlineUser style={{ fontSize: "30px" }} />
        </div>
      </UserCartHolder>
    </NavComtainer>
  );
}

export default NavBar;
