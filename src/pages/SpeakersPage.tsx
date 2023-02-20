import React from "react";
import styled from "styled-components";
import MaindDiv2Component from "../components/MaindDiv2Component";
import { ThemeData } from "../components/ThemeDataComponent";
import TripleDivComponent from "../components/TripleDivComponent";

export default function SpeakersPage() {
  return (
    <>
      <Header>
        <HeaderH1>SPEAKERS</HeaderH1>
      </Header>
      <ProductDiv>
        <ProductImg
          src="/assets/product-zx9-speaker/mobile/image-category-page-preview.jpg"
          alt=""
        />
        <ProductText>
          <OrangeP>NEW PRODUCT</OrangeP>
          <ProductH1>ZX9
speaker</ProductH1>
          <ProductP>
          Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.
          </ProductP>
          <ProductButton>See Product</ProductButton>
        </ProductText>
      </ProductDiv>
      <ProductDiv>
        <ProductImg
          src="/assets/product-zx7-speaker/mobile/image-category-page-preview.jpg"
          alt=""
        />
        <ProductText>
          <ProductH1>ZX7
SPEAKER</ProductH1>
          <ProductP>
          Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.
          </ProductP>
          <ProductButton>See Product</ProductButton>
        </ProductText>
      </ProductDiv>
     
      <TripleDivComponent/>
      <MaindDiv2Component/>
      

    </>
  );
}

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
  margin-bottom: 24px;
`;

const ProductP = styled.p`
  
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  text-align: center;
  color: ${ThemeData.colors.darkBlack};
  opacity: 0.5;
  margin-bottom: 24px;
`;

const ProductText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProductDiv = styled.div`
  
  display: flex;
  flex-direction: column;
  padding: 0 24px 120px 24px;
`;
const ProductImg = styled.img`
  border-radius: 8px;
  margin-bottom: 32px;
`;
const Header = styled.div`
  width: 100%;
  background: ${ThemeData.colors.darkBlack};
  padding: 32px 84px;
  margin-bottom: 64px;
  overflow: hidden;
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
`;
