import React from "react";
import styled from "styled-components";
import { ThemeData } from "./ThemeDataComponent";
import data from "../../data.json";
import { useNavigate } from "react-router-dom";

export default function MainDiv1Component() {
  const navigate = useNavigate()
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
            <OrangeButton onClick={() => navigate("speakers/zx9")}>See Product</OrangeButton>
          </OrangeContent>
        </Orange>
        <ZX7Speaker>
          <ZX7SpeakerP>ZX7 SPEAKER</ZX7SpeakerP>
          <ZX7SpeakerButton onClick={() => navigate("speakers/zx7")}>See Product</ZX7SpeakerButton>
        </ZX7Speaker>
        <YX1Earphones>
          <YX1Black></YX1Black>
          <YX1White>
            <YX1WhiteP>YX1 EARPHONES</YX1WhiteP>
            <YX1WhiteButton onClick={() => navigate("earphones/yx1")}>See Product</YX1WhiteButton>
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
  
`;
const YX1Black = styled.div`
  width: 100%;
  height: 200px;
  background-image: url("/assets/product-yx1-earphones/mobile/image-gallery-2.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 8px;
  position: relative;
`;
const YX1White = styled.div`
  width: 100%;
  height: 200px;
  background: ${ThemeData.colors.silver};
  margin-top: 24px;
  border-radius: 8px;
  padding: 41px 0px 41px 24px;
  overflow: hidden;
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
`;

const MainDiv = styled.div`
  padding: 0 24px;
  margin-bottom: 120px;
`;
