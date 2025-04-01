import styled from "styled-components";

export const ContainerHolder = styled.div`
  padding: 20px 10px;
`;

export const Heading = styled.h4`
  font-size: 15px;
  font-weight: 600;
`;

export const DataContainerHolder = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
`;

export const DeatilsHolder = styled.div`
  margin-top: 10px;
`;

export const WhatsNew = styled.div`
  width: 250px;
  height: 300px;
  margin-left: 10px;
  margin-right: 10px;
  font-size: 30px;
  line-height: 8vh;
`;

export const SellerSaleHolder = styled.div`
  width: 35vw;
  height: 400px;
  filter: blur(4px);
  margin-right: 20px;
`;

export const SaleDetails = styled.div`
  width: 300px;
  height: 260px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  position: absolute;
  margin-top: -330px;
  margin-left: 100px;
  background-color: black;
  border-radius: 10px;
  color: white;
  font-size: 20px;
`;


export const SaleButton = styled.button`
  width: 200px;
  height: 40px;
  border-radius: 20px;
  background-color: transparent;
  color: white;
  border: 2px solid white;
  &:hover{
    color: gray;
    border: 2px solid gray;
  }
`