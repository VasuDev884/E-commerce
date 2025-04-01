import React , {useState} from "react";
import { Nav, Category, Login, Heading } from "./navStyledComponents";
import { CiShoppingCart } from "react-icons/ci";
import { IoPeopleCircleOutline } from "react-icons/io5";
import { FlexWrapper } from "../../const/flexWrapper";

export const NavBar = () => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
        setColorchange(true);
    } else {
        setColorchange(false);
    }
};
window.addEventListener("scroll", changeNavbarColor);

  return (
    <Nav style={{ backgroundColor:colorChange ? "#8c8b8ef7" :"transparent"}}>
      <FlexWrapper content="space-between">
        <div>
          <Heading>UrbanNomad</Heading>
        </div>
        <Category>
          <div>MEN</div>
          <div>WOMEN</div>
          <div>KIDS</div>
          <div>SALE</div>
        </Category>
        <Login>
          <FlexWrapper content="space-between">
            <div>
              <CiShoppingCart style={{ fontSize: "22px" }} />
            </div>
            <div>
              <IoPeopleCircleOutline style={{ fontSize: "22px" }} />
            </div>
          </FlexWrapper>
        </Login>
      </FlexWrapper>
    </Nav>

  );
};
