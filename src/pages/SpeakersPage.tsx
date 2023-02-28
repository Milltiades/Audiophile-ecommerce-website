import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { MyContext } from "../App";
import MaindDiv2Component from "../components/MaindDiv2Component";
import Menu from "../components/Menu";
import { ThemeData } from "../components/ThemeDataComponent";
import TripleDivComponent from "../components/TripleDivComponent";

export default function SpeakersPage() {
  const context = useContext(MyContext);
  const navigate = useNavigate();
  return (
    <div style={{opacity:context.isCart  || context.isMenu ? "0.4" : "1", background: context.isCart || context.isMenu ? "#000000" : "transparent"}}>
      <Header>
        <HeaderH1>SPEAKERS</HeaderH1>
      </Header>
      <ProductDiv>
      <ImgDiv>
        <ProductImg
          src="/assets/product-zx9-speaker/mobile/image-category-page-preview.jpg"
          alt=""
        /></ImgDiv>
        <ProductText>
          <OrangeP>NEW PRODUCT</OrangeP>
          <ProductH1>ZX9
speaker</ProductH1>
          <ProductP>
          Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.
          </ProductP>
          <ProductButton onClick={() => {
            navigate("zx9")
            context.HeaderGoFunc();
            }}>See Product</ProductButton>
        </ProductText>
      </ProductDiv>
      <ProductDiv>
      <ImgDiv>
        <ProductImg
          src="/assets/product-zx7-speaker/mobile/image-category-page-preview.jpg"
          alt=""
        /> </ImgDiv>
        <ProductText>
          <ProductH1>ZX7
SPEAKER</ProductH1>
          <ProductP>
          Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.
          </ProductP>
          <ProductButton onClick={() => {
            navigate("zx7")
            context.HeaderGoFunc();
            }}>See Product</ProductButton>
        </ProductText>
      </ProductDiv>
     
      <Menu/>
      <MaindDiv2Component/>
      

    </div>
  );
}

const ImgDiv = styled.div`
@media (width > 767px){
  width: 100%;
height: 352px;
background: ${ThemeData.colors.silver};
border-radius: 8px;
margin-bottom: 32px;

align-items: center;
display: flex;
justify-content: center;
overflow: hidden;

}
`
const ProductButton = styled.button`
  
  padding: 15px 29.5px 15px 31.5px;
  border: none;
  background: ${ThemeData.colors.orange};
  font-weight: 700;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${ThemeData.colors.white};
  margin-bottom: 56px;
`;

const OrangeP = styled.p`
 
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 10px;
  text-transform: uppercase;
  color: ${ThemeData.colors.orange};
  margin-bottom: 24px;
`;
const ProductH1 = styled.h1`
 
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${ThemeData.colors.darkBlack};
  overflow: hidden;
  margin-bottom: 24px;
  @media (width > 767px) {
    margin-bottom: 32px;

    font-size: 40px;
line-height: 44px;
letter-spacing: 1.42857px;
width: 390px;
  }
`;

const ProductP = styled.p`
  
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  text-align: center;
  color: ${ThemeData.colors.darkBlack};
  opacity: 0.5;
  margin-bottom: 24px;

  @media (width > 767px) {
    width: 572px;
    margin-bottom: 32px;
  }
`;

const ProductText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProductDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 24px 120px 24px;
`;
const ProductImg = styled.img`
  border-radius: 8px;
  margin-bottom: 32px;
  width: 100%;
  @media (width > 767px){
    margin-bottom: 0;
    width: 320px; 
  }
`;
const Header = styled.div`
  width: 100%;
  background: ${ThemeData.colors.darkBlack};
  padding: 32px;
  
  margin-bottom: 64px;
  overflow: hidden;
  display: flex;
    justify-content: center;
    align-items: center;
  @media (width > 767px) {
    padding: 105px 0 97px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 120px;
  }
`;
const HeaderH1 = styled.h1`
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  text-align: center;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${ThemeData.colors.white};
  overflow: hidden;
  @media (width > 767px) {
    font-size: 40px;
line-height: 44px;
letter-spacing: 1.42857px;
width: 283px;
  }
`;
