import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeData } from "./ThemeDataComponent";
import data from "../../data.json";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../App";

export default function MainDiv1Component() {
  const navigate = useNavigate()
  const context = useContext(MyContext)
  return (
    <>
      <MainDiv>
        <Orange>
          <OrangeCircle1></OrangeCircle1>
          <OrangeCircle2></OrangeCircle2>
          <OrangeCircle3></OrangeCircle3>
          <OrangeContent>
            <OrangeImg src="/assets/home/mobile/image-speaker-zx9.png" alt="" />
            <OrangeH1>ZX9 SPEAKER</OrangeH1>
            <OrangeP>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</OrangeP>
            <OrangeButton onClick={() => {
              navigate("speakers/zx9")
              context.HeaderGoFunc();
              }}>See Product</OrangeButton>
          </OrangeContent>
        </Orange>
        <ZX7Speaker>
          <ZX7SpeakerP>ZX7 SPEAKER</ZX7SpeakerP>
          <ZX7SpeakerButton onClick={() => {
            navigate("speakers/zx7")
            context.HeaderGoFunc();
            }}>See Product</ZX7SpeakerButton>
        </ZX7Speaker>
        <YX1Earphones>
          <YX1Black></YX1Black>
          <YX1White>
            <YX1WhiteP>YX1 EARPHONES</YX1WhiteP>
            <YX1WhiteButton onClick={() => {
              navigate("earphones/yx1")
              context.HeaderGoFunc();
              }}>See Product</YX1WhiteButton>
          </YX1White>
        </YX1Earphones>
      </MainDiv>
    </>
  );
}

const OrangeButton = styled.button`
  font-weight: 700;
font-size: 13px;
line-height: 18px;
letter-spacing: 1px;
text-transform: uppercase;
padding: 15px 29.5px 15px 31.5px;
color: ${ThemeData.colors.white};
background: ${ThemeData.colors.darkBlack};
margin-top: 24px;
border: none;
@media (width > 767px) {
  margin-top: 40px;
}
`

const OrangeP = styled.p`
  font-weight: 500;
font-size: 15px;
line-height: 25px;
text-align: center;
color: ${ThemeData.colors.white};
mix-blend-mode: normal;
opacity: 0.75;
margin-top: 24px;
@media (width > 767px){
  width: 349px;
}

`
const OrangeH1 = styled.h1`
overflow: hidden;
  font-weight: 700;
  font-size: 36px;
  line-height: 40px;
  text-align: center;
  letter-spacing: 1.28571px;
  text-transform: uppercase;
  color: ${ThemeData.colors.white};
  width: 70%;
  margin-top: 32px;
  @media (width > 767px){
    margin-top: 64px;
    font-weight: 700;
font-size: 56px;
line-height: 58px;
text-align: center;
letter-spacing: 2px;
text-transform: uppercase;
width: 261px;
  }
`;
const OrangeImg = styled.img`
  position: relative;

  width: 172.25px;
  height: 207px;
`;

const OrangeContent = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: -1120px;
  width: 100%;
  align-items: center;
  padding: 0 24px 55px 24px;
  @media (width > 767px){
    
    top: -1894px;
  }
  
`;
const YX1Black = styled.div`
  width: 100%;
  height: 200px;
  background-image: url("/assets/product-yx1-earphones/mobile/image-gallery-2.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 8px;
  position: relative;
  @media (width > 767px) {
    height: 320px;
  }
`;
const YX1White = styled.div`
  width: 100%;
  height: 200px;
  background: ${ThemeData.colors.silver};
  margin-top: 24px;
  border-radius: 8px;
  padding: 41px 0px 41px 24px;
  overflow: hidden;
 @media (width > 767px) {
  margin-top: 0;
  margin-left: 11px;
  padding: 101px 0px 41px 41px;
  height: 320px;
 }
`;
const YX1WhiteP = styled.p`
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${ThemeData.colors.darkBlack};
`;

const YX1WhiteButton = styled.button`
  margin-top: 32px;
  border: 1px solid ${ThemeData.colors.darkBlack};
  padding: 15px 29.5px 15px 31.5px;
  font-weight: 700;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${ThemeData.colors.darkBlack};
`;
const YX1Earphones = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 24px;
  @media (width > 767px) {
    flex-direction:row;
    align-items: center;
    margin-top: 32px;
  }
 
`;
const ZX7Speaker = styled.div`
  margin-top: 24px;
  border-radius: 8px;
  background: ${ThemeData.colors.silver};
  width: 100%;
  height: 320px;
  background-image: url("/assets/shared/mobile/Bitmap.png");
  background-repeat: no-repeat;
  background-size: cover;
  padding: 101px 0 101px 24px;
  overflow: hidden;
  @media (width > 767px) {
padding: 101px 0 101px 62px;
 margin-top: 32px;
  }
`;

const ZX7SpeakerP = styled.p`
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  letter-spacing: 2px;
  text-transform: uppercase;
`;
const ZX7SpeakerButton = styled.button`
  font-weight: 700;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 15px 29.5px 15px 31.5px;
  background: transparent;
  border: 1px solid #000000;
  margin-top: 32px;
`;

const Orange = styled.div`
  background: ${ThemeData.colors.orange};
  border-radius: 8px;
  overflow: hidden;
  height: 600px;
  @media (width > 767px){
    height: 720px;
  }
  
`;
const OrangeCircle1 = styled.div`
  width: 279px;
  height: 279px;
  border-radius: 50%;
  border: 1px solid ${ThemeData.colors.white};
  background: transparent;
  position: relative;
  opacity: 0.2;
  margin: 0 auto;
  margin-top: 19px;
  @media (width > 767px) {
    width: 472px;
  height: 472px;
  top: -52px;
  }
`;
const OrangeCircle2 = styled.div`
  width: 320px;
  height: 320px;
  border-radius: 50%;
  border: 1px solid ${ThemeData.colors.white};
  background: transparent;
  position: relative;
  opacity: 0.2;
  margin: 0 auto;
  top: -299px;
  @media (width > 767px) {
    width: 542px;
  height: 542px;
  top: -560px;
  }
`;
const OrangeCircle3 = styled.div`
  width: 558px;
  height: 558px;
  border-radius: 50%;
  border: 1px solid ${ThemeData.colors.white};
  background: transparent;
  position: relative;
  opacity: 0.2;
  margin: 0 auto;
  top: -760px;
  left: -30.8%;
@media (width > 767px) {
    width: 944px;
  height: 944px;
  top: -1360px;
  left: -14%;
  }

`;

const MainDiv = styled.div`
  padding: 0 24px;
  margin-bottom: 120px;
`;
