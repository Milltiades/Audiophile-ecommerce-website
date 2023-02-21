import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ThemeData } from "../components/ThemeDataComponent";

export default function XX99MarkIPage() {
  const navigate = useNavigate();
  return (
    <>
      <BackButton onClick={() => navigate("/headphones")}>Go Back</BackButton>
      <ProductDiv>
        <ProductImg
          src="/assets/product-xx99-mark-two-headphones/mobile/image-product.jpg"
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
          <ProductPrice>$ 2,999</ProductPrice>
          <ButtonsDiv>
            <QuanityDiv>
              <ButtonMinus> - </ButtonMinus>
              <ButtonP>1</ButtonP>
              <ButtonMinus> + </ButtonMinus>
            </QuanityDiv>
            <ProductButton>See Product</ProductButton>
          </ButtonsDiv>
        </ProductText>
      </ProductDiv>
      <FeaturesDiv>
        <FeatureH1>FEATURES</FeatureH1>
        <FeatureP>
          Featuring a genuine leather head strap and premium earcups, these
          headphones deliver superior comfort for those who like to enjoy
          endless listening. It includes intuitive controls designed for any
          situation. Whether you’re taking a business call or just in your own
          personal space, the auto on/off and pause features ensure that you’ll
          never miss a beat.
          <br></br>
          <br></br>
          The advanced Active Noise Cancellation with built-in equalizer allow
          you to experience your audio world on your terms. It lets you enjoy
          your audio in peace, but quickly interact with your surroundings when
          you need to. Combined with Bluetooth 5. 0 compliant connectivity and
          17 hour battery life, the XX99 Mark II headphones gives you superior
          sound, cutting-edge technology, and a modern design aesthetic.
        </FeatureP>
      </FeaturesDiv>
      <InTheBoxDiv>
        <InTheBoxDivH1>in the box</InTheBoxDivH1>
        <InTheBoxDivText>
            <InTheBoxDivP1>1x</InTheBoxDivP1>
            <InTheBoxDivP2>Headphone Unit</InTheBoxDivP2>
        </InTheBoxDivText>
        <InTheBoxDivText>
            <InTheBoxDivP1>2x</InTheBoxDivP1>
            <InTheBoxDivP2>Replacement Earcups</InTheBoxDivP2>
        </InTheBoxDivText>
        <InTheBoxDivText>
            <InTheBoxDivP1>1x</InTheBoxDivP1>
            <InTheBoxDivP2>User Manual</InTheBoxDivP2>
        </InTheBoxDivText>
        <InTheBoxDivText>
            <InTheBoxDivP1>1x</InTheBoxDivP1>
            <InTheBoxDivP2>3.5mm 5m Audio Cable</InTheBoxDivP2>
        </InTheBoxDivText>
        <InTheBoxDivText>
            <InTheBoxDivP1>1x</InTheBoxDivP1>
            <InTheBoxDivP2>Travel Bag</InTheBoxDivP2>
        </InTheBoxDivText>

      </InTheBoxDiv>
    </>
  );
}
const InTheBoxDivText = styled.div`
    display: flex;
    margin-bottom: 8px;

`
const InTheBoxDivP1 = styled.p`
    font-style: normal;
font-weight: 700;
font-size: 15px;
line-height: 25px;
color: ${ThemeData.colors.orange};
margin-right: 24px;
`
const InTheBoxDivP2 = styled.p`
    font-weight: 500;
font-size: 15px;
line-height: 25px;
color: ${ThemeData.colors.darkBlack};
mix-blend-mode: normal;
opacity: 0.5;
`

const InTheBoxDivH1 = styled.h1`
   font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: 0.857143px;
  text-transform: uppercase;
  color: ${ThemeData.colors.darkBlack};
  margin-bottom: 24px; 
`
const InTheBoxDiv = styled.div`
margin-top: 88px;
    display: flex;
    flex-direction: column;
    padding: 0 24px;
`
const FeatureP = styled.p`
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  color: ${ThemeData.colors.darkBlack};
  mix-blend-mode: normal;
  opacity: 0.5;
`;

const FeatureH1 = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: 0.857143px;
  text-transform: uppercase;
  color: ${ThemeData.colors.darkBlack};
  margin-bottom: 24px;
`;
const FeaturesDiv = styled.div`
padding: 0 24px;
`;
const ButtonP = styled.p`
  width: 16px;
  font-weight: 700;
  font-size: 13px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${ThemeData.colors.darkBlack};
  margin-left: 20px;
  margin-right: 21px;
  
`;
const ButtonMinus = styled.button`
  width: 16px;
  border: none;
  background: transparent;
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${ThemeData.colors.darkBlack};
  mix-blend-mode: normal;
  opacity: 0.25;
  &:hover {
    opacity: 1;
  }
`;
const ButtonsDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;
const QuanityDiv = styled.div`
  height: 48px;
  background: ${ThemeData.colors.silver};
  padding: 15px 15.5px;
  display: flex;
  flex-direction: row;

  margin-right: 16px;
  align-items: center;
`;

const ProductPrice = styled.h1`
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 1.28571px;
  text-transform: uppercase;
  color: ${ThemeData.colors.darkBlack};
  margin-bottom: 31px;
`;

const BackButton = styled.button`
  margin-top: 16px;
  margin-left: 24px;
  background: transparent;
  border: none;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  color: ${ThemeData.colors.darkBlack};
  mix-blend-mode: normal;
  opacity: 0.5;
  margin-bottom: 24px;
  transition: all 0.3s easy;
  &:hover {
    opacity: 1;
  }
`;

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
  
`;

const OrangeP = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  /* align-items: flex-start; */
  letter-spacing: 10px;
  text-transform: uppercase;
  color: ${ThemeData.colors.orange};
  margin-bottom: 24px;
`;
const ProductH1 = styled.h1`
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  /* text-align: center; */
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${ThemeData.colors.darkBlack};
  margin-bottom: 24px;
`;

const ProductP = styled.p`
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  /* text-align: center; */
  color: ${ThemeData.colors.darkBlack};
  opacity: 0.5;
  margin-bottom: 24px;
`;

const ProductText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ProductDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 24px 0 24px;
  margin-bottom: 88px;
`;
const ProductImg = styled.img`
  border-radius: 8px;
  margin-bottom: 32px;
`;
