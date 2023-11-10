import styled from "styled-components";

export const Heading = styled.h4`
  font-size: 25px;
  font-weight: 700;
`;

export const CartDivHolder = styled.div`
  border-bottom: 1px solid #818589;
  border-top: 1px solid #818589;
  padding: 15px 0px;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
`;

export const CartContainer = styled.div`
  display: grid;
  width: 320px;
  border-left: 1px solid #818589;
  border-right: 1px solid #818589;
  padding: 0px 10px;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

export const ImgComtainer = styled.div`
  width: 300px;
  height: 360px;
  margin-bottom: 10px;
`;

export const LogoImg = styled.div`
  width: 70px;
  height: 20px;
  margin: 3px 0px;
`;

export const Text = styled.h6`
  font-size: 15px;
`;

export const MainText = styled.div`
  font-size: 12px;
`;

export const Button = styled.button`
  width: 95%;
  height: 28px;
  border-radius: 10px;
  border: 1px solid #818589;
  margin-top: 5px;
  background-color: #ffa41c;
  &:hover{
    background-color: #faae3d;
  }
`;
