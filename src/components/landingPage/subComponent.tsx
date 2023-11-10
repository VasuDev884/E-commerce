import styled from "styled-components";

export const MainContainer = styled.div`
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  overflow: hidden;
`;

export const Div = styled.div`
  width: 99%;
  background-color: white;
  border-radius: 10px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  padding: 10px 15px;
  &:hover {
    background-color: #c8c1c1;
  }
`;

export const ImgDiv1 = styled.div`
  width: 300px;
  height: 300px;
`;

export const NameHolder = styled.div`
  width: 300px;
  height: 50px;
  overflow-y: hidden;
  color: #000000;
  font-weight: 600;
  margin-bottom: 6px;
`;

export const ArrowRight = styled.div`
  width: 50px;
  background-color: black;
  height: 23.5px;
  padding: 3.5px 0px 3px 2px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  display: flex;
  &:hover {
    background-color: #585757;
    width: 52px;
    padding: 3.5px 0px 3px 2px;
  }
`;

export const ArrowLeft = styled.div`
  width: 50px;
  background-color: black;
  height: 23.5px;
  padding: 3.5px 0px 3px 27px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  display: flex;
  z-index: 1;
  &:hover {
    background-color: #585757;
    width: 52px;
    padding: 3.5px 0px 3px 30px;
  }
`;

export const PriceDiv = styled.div`
  height: 100px;
`;

export const PriceHolder = styled.h4`
  color: #000000;
  font-weight: 600;
`;

export const Price = styled.span`
  color: black;
  font-size: 30px;
  margin-bottom: -10px;
`;

export const CardHolder = styled.div`
  padding: 5px 5px 0px 5px;
  width: 380px;
  &:hover {
    background-color: #d9d9d9;
    border-radius: 10px;
  }
`;

export const CardHolderFilter = styled.div`
  padding: 5px;
  width: 380px;
`;

export const FlexWrapper = styled.div`
  display: flex;
`;

export const AllNameHolder = styled.div`
  width: 99.2%;
  border-radius: 10px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  padding: 10px 15px;
  font-size: 20px;
  margin: 10px 0px 2px 5px;
`;
