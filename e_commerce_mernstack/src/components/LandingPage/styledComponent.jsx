import styled from "styled-components";

export const ImgHolder = styled.div`
  width: 102%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.img`
  width: 100%;
  height: 80vh;
  object-fit: cover;
  z-index: -1;
  filter: blur(3px);
  filter: brightness(70%);
  @media screen and (max-width: 1080px) {
    height: 70vh;
  }
  @media screen and (max-width: 720px) {
    height: 60vh;
  }
`;

export const Discription = styled.div`
  position: absolute;
  top: 13%;
  flex-direction: column;
  width: 100%;
  color: white;
`;
export const Heading = styled.h1`
  font-family: "Moon Dance", serif;
  font-size: 9vw;
  font-style: italic;
`;
export const HeadingHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: -100px;
`;

export const SubHeadingHolder = styled.div`
  position: absolute;
  left: 17%;
  @media screen and (max-width: 1080px) {
    left: 13%;
  }
  @media screen and (max-width: 720px) {
    left: 10%;
  }
`;

export const SubHeading = styled.h4`
  font-family: "Poppins", serif;
  font-weight: 300;
  font-size: 2.5vh;
  letter-spacing: 1px;
  @media screen and (max-width: 1080px) {
    font-size: 2vh;
  }
  @media screen and (max-width: 720px) {
    font-size: 1.6vh;
  }
`;

export const Button = styled.button`
  width: 200px;
  height: 50px;
  background-color: transparent;
  border: 2px solid white;
  border-radius: 30px;
  color: white;
  &:hover {
    border: 3px solid white;
    font-weight: 600;
  }
  @media screen and (max-width: 1080px) {
    font-size: 12px;
  }
  @media screen and (max-width: 720px) {
    width: 150px;
    height: 50px;
    font-size: 10px;
  }
`;
export const ButtonHolder = styled.div`
  margin-top: 20px;
`;
