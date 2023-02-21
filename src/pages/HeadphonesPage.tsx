import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import MaindDiv2Component from "../components/MaindDiv2Component";
import { ThemeData } from "../components/ThemeDataComponent";
import TripleDivComponent from "../components/TripleDivComponent";

export default function HeadphonesPage() {
  const navigate = useNavigate();
  return (
    <>
      <Header>
        <HeaderH1>headphones</HeaderH1>
      </Header>
      <ProductDiv>
        <ProductImg
          src="/assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg"
          alt=""
        />
        <ProductText>
          <OrangeP>NEW PRODUCT</OrangeP>
          <ProductH1>XX99 Mark II Headphones</ProductH1>
          <ProductP>
            The new XX99 Mark II headphones is the pinnacle of pristine audio.
            It redefines your premium headphone experience by reproducing the
            balanced depth and precision of studio-quality sound.
          </ProductP>
          <ProductButton onClick={() => navigate("xx99-mark-I")}>See Product</ProductButton>
        </ProductText>
      </ProductDiv>
      <ProductDiv>
        <ProductImg
          src="/assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg"
          alt=""
        />
        <ProductText>
          <ProductH1>XX99 Mark I Headphones</ProductH1>
          <ProductP>
            As the gold standard for headphones, the classic XX99 Mark I offers
            detailed and accurate audio reproduction for audiophiles, mixing
            engineers, and music aficionados alike in studios and on the go.
          </ProductP>
          <ProductButton>See Product</ProductButton>
        </ProductText>
      </ProductDiv>
      <ProductDiv>
        <ProductImg
          src="/assets/product-xx59-headphones/mobile/image-category-page-preview.jpg"
          alt=""
        />
        <ProductText>
          <ProductH1>XX59 Headphones</ProductH1>
          <ProductP>
            Enjoy your audio almost anywhere and customize it to your specific
            tastes with the XX59 headphones. The stylish yet durable versatile
            wireless headset is a brilliant companion at home or on the move.
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
