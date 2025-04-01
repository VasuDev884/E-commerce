import styled from "styled-components";

export const DataContainer = styled.div`
  width: 280px;
  height: 280px;
  background-color: #e6e5e5;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  margin-right: 10px;
  @media screen and (max-width: 1080px) {
    width: 230px;
    height: 230px;
  }
  @media screen and (max-width: 720px) {
    width: 200px;
    height: 200px;
  }
  @media screen and (max-width: 480px) {

  }
`;

export const ContainerButton = styled.button`
  width: 280px;
  height: 40px;
  border: 2px solid gray;
  border-radius: 30px;
  margin-bottom: 5px;
  @media screen and (max-width: 1080px) {
    width: 230px;
  }
  @media screen and (max-width: 720px) {
    width: 200px;
  }
`;

export const SubHeadingDetails = styled.h4`
  font-size: 12px;
  font-weight: 400;
  color: rgb(99, 99, 99);
`;

export const HeadingDetails = styled.h4`
  font-size: 12px;
  font-weight: 400;
  color: rgb(45, 43, 43);
`;
