import React  from "react";
import { FlexWrapper } from "../../const/flexWrapper";
 import { MdArrowOutward } from "react-icons/md";
import {
  FooterWrapper,
  FooterContentHolder,
  FooterContent,
  Subscribe,
  SubUs,
  FooterCompany,  
} from "./styledComponents";

export const Footer = () => {
  return (

    <FooterWrapper>
      <FlexWrapper content="space-between">
        <FooterContentHolder>
          <FooterContent>
            Stay in The Loop And Never Miss An Update From <br />
            Us! Subscribe To Our NewsLetter And Be The First <br />
            To Recive The Latest News , Exclusive Offers, <br />
            Insightful Articles, And Much More
          </FooterContent>
        </FooterContentHolder>
        <FooterContentHolder>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>info@gmail.com</li>
          </ul>
        </FooterContentHolder>
      </FlexWrapper>
      <div>
        <Subscribe>
          <SubUs>
            Subscribe Us
            <span>
              <MdArrowOutward style={{ fontSize: "60px" }} />
            </span>
          </SubUs>
        </Subscribe>
      </div>
      <FooterCompany>
                <div>
                    <h4>Shop</h4>
                    <ul>
                    <li>Men</li>
                    <li>Women</li>
                    <li>Kibs</li>
                    <li>Sale</li>
                </ul>
                </div>
             
                <div>
                    <h4>Shop</h4>
                    <ul>
                    <li>Men</li>
                    <li>Women</li>
                    <li>Kibs</li>
                    <li>Sale</li>
                </ul>
                </div>
                
                <div>
                    <h4>Shop</h4>
                    <ul>
                    <li>Men</li>
                    <li>Women</li>
                    <li>Kibs</li>
                    <li>Sale</li>
                </ul>
                </div>
            </FooterCompany>
    </FooterWrapper>
  );
};
