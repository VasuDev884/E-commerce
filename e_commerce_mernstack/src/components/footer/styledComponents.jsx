import styled from "styled-components";

export const FooterWrapper = styled.div`
background-color: gray;
padding: 20px 0;
` 

export const FooterContentHolder = styled.div`
width: 50%;
display: flex;
justify-content: center;
`

export const FooterContent = styled.h4`
font-size: 15px;
font-weight: 400;
`


export const Subscribe = styled.div`
margin-top: 10px;
padding:10px ;
`

export const SubUs = styled.h4`
right: 0%;
font-size: 70px;
font-weight: 300;
border-bottom: 1px solid black;
&:hover{
    color:gray;
    border-bottom: 1px solid gray;
}
`

export const FooterCompany  = styled.div`
display: flex;
justify-content: space-between;
padding: 10px 50px;
`
