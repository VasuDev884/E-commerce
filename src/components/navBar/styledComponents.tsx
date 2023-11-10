import styled from "styled-components";

export const NavComtainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px 0px 10px;
  margin-bottom: -15px;
`;

export const InputHolder = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  width: 50%;
`;

export const Input = styled.input`
  width: 100%;
  height: 35px;
  border-radius: 5px;
  border: 1px solid gray;
  padding-left: 15px;
  padding-right: 15px;
`;
export const UserCartHolder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100px;
  margin-right: 10px;
`;

export const ImgHolder = styled.div`
  width: 150px;
`;

export const Img = styled.img`
    width: 100%;
    height: 100%;
        mix-blend-mode: multiply;
    filter: contrast(1);

`