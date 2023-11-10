import styled from "styled-components";

export const MainContainer = styled.div`
  margin-top: 30px;
  background-color: white;
  padding: 10px;
  flex-wrap: wrap;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 35% 65%;
`;

export const SideLandingContainer = styled.div`
  height: 12%;
  margin: 20px 10px 0px 40px;
`;

export const ImgHolder = styled.div`
  height: 600px;
  padding: 50px;
`;

export const Border = styled.div`
  border-bottom: 1px solid #818589;
  padding-bottom: 10px;
`;

export const RatingHolder = styled.div`
  display: flex;
  align-items: center;
  width: 22%;
  margin-top: 10px;
  justify-content: space-between;
`;

export const CountHolder = styled.div`
  margin-left: 10px;
  display: flex;
  align-items: center;
`;

export const PriceHolder = styled.div`
  margin-top: 10px;
  border-bottom: 1px solid #818589;
`;

export const TextDiscription = styled.h4`
  margin-top: 5px;
  font-weight: 400;
  padding-bottom: 10px;
`;

export const DescriptionWrapper = styled.h3`
  margin-top: 10px;
  line-height: 27px;
  font-weight: 400;
  padding-bottom: 15px;
`;
export const ButtonWrapper = styled.div`
  padding: 20px 0px;
  border-bottom: 1px solid #818589;
`;

export const ButtonCart = styled.button`
  width: 200px;
  height: 30px;
  border-radius: 10px;
  border: none;
  background-color: #ffd814;
  margin-top: 30px;
  &:hover {
    background-color: #fadc48;
  }
`;

export const ButtonBuy = styled.button`
  border: none;
  width: 200px;
  height: 30px;
  border-radius: 10px;
  margin-top: 10px;
  background-color: #ffa41c;
  &:hover {
    background-color: #faae3d;
  }
`;

export const Gap = styled.div`
    margin-top: 10px;
    align-items: center;
    display: flex;
`
