import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ThemeData } from "../components/ThemeDataComponent";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div style={{ overflow: "hidden" }}>
      <BackgroundDiv>
        <ContentDiv>
          <BackP>new product</BackP>
          <BackH1> XX99 Mark II HeadphoneS</BackH1>
          <BackText>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </BackText>
          <Button>See Product</Button>
        </ContentDiv>
      </BackgroundDiv>
      <TripleDiv>
        <HeadphonesDiv>
          <HeadphonesDivP>HEADPHONES</HeadphonesDivP>
          <HeadphonesDivButton onClick={() => navigate("/headphones")}>
            <HeadphonesDivButtonP>shop</HeadphonesDivButtonP>
            <ImgArrowRight
              src="/assets/shared/desktop/icon-arrow-right.svg"
              alt=""
            />
          </HeadphonesDivButton>
        </HeadphonesDiv>
        <HeadphonesDiv>
          <HeadphonesDivP>SPEAKERS</HeadphonesDivP>
          <HeadphonesDivButton onClick={() => navigate("/speakers")}>
            <HeadphonesDivButtonP>shop</HeadphonesDivButtonP>
            <ImgArrowRight
              src="/assets/shared/desktop/icon-arrow-right.svg"
              alt=""
            />
          </HeadphonesDivButton>
        </HeadphonesDiv>
        <HeadphonesDiv>
          <HeadphonesDivP>EARPHONES</HeadphonesDivP>
          <HeadphonesDivButton onClick={() => navigate("/earphones")}>
            <HeadphonesDivButtonP>shop</HeadphonesDivButtonP>
            <ImgArrowRight
              src="/assets/shared/desktop/icon-arrow-right.svg"
              alt=""
            />
          </HeadphonesDivButton>
        </HeadphonesDiv>
      </TripleDiv>
      <MainDiv>
        <Orange></Orange>
        <ZX7Speaker>
            <ZX7SpeakerP>ZX7 SPEAKER</ZX7SpeakerP>
            <ZX7SpeakerButton >See Product</ZX7SpeakerButton>
        </ZX7Speaker>
        <YX1Earphones>
          <YX1Black></YX1Black>
          <YX1White>
            <YX1WhiteP>YX1 EARPHONES</YX1WhiteP>
            <YX1WhiteButton>See Product</YX1WhiteButton>
          </YX1White>
        </YX1Earphones>
      </MainDiv>
      <MainDiv2>
        <MainDiv2Img />
        <MainDiv2Text>
          <MainDiv2H1>Bringing you the <Span>best</Span> audio gear</MainDiv2H1>
          <MainDiv2P>
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </MainDiv2P>
        </MainDiv2Text>
      </MainDiv2>
    </div>
  );
}

const Span = styled.span`
    color: ${ThemeData.colors.orange};
`

const MainDiv2H1 = styled.h1`
    font-weight: 700;
font-size: 28px;
line-height: 38px;
text-align: center;
letter-spacing: 1px;
text-transform: uppercase;
`
const MainDiv2P = styled.p`
margin-top: 32px;
    font-style: normal;
font-weight: 500;
font-size: 15px;
line-height: 25px;
text-align: center;
opacity: 0.5;
`

const MainDiv2Text = styled.div`
margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainDiv2Img = styled.div`
  width: 100%;
  height: 300px;
  background-image: url("/assets/shared/mobile/image-best-gear.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 8px;
`;

const MainDiv2 = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 24px;
  margin-top: 120px;
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
`
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

`

const Orange = styled.div`
  background: ${ThemeData.colors.orange};
  border-radius: 8px;
  overflow: hidden;
  height: 600px;
`;
const MainDiv = styled.div`
  padding: 0 24px;
`;
const ImgArrowRight = styled.img`
  width: 5px;
  height: 10px;
  margin-left: 13.32px;
`;
const HeadphonesDivButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background: transparent;
  margin-top: 17px;
`;
const HeadphonesDivButtonP = styled.p`
  font-weight: 700;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${ThemeData.colors.darkBlack};
  opacity: 0.5;
`;
const HeadphonesDivP = styled.p`
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 1.07143px;
  text-transform: uppercase;
`;

const HeadphonesDiv = styled.div`
  width: 100%;
  padding: 88px 107px 22px 109px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${ThemeData.colors.silver};
  border-radius: 8px;
  overflow-x: hidden;
  margin-bottom: 68px;
`;

const TripleDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;
  padding: 0 24px;
`;

const BackgroundDiv = styled.div`
  position: relative;
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  background-image: url("/assets/home/mobile/image-header.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: 104px;
  top: -59.78px;
`;
const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 24px;
  padding-right: 24px;
`;
const BackP = styled.p`
  margin-top: 198px;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 10px;
  text-transform: uppercase;
  color: ${ThemeData.colors.white};
  mix-blend-mode: normal;
  opacity: 0.5;
`;

const BackH1 = styled.h1`
  margin-top: 16px;
  font-weight: 700;
  font-size: 36px;
  line-height: 40px;
  text-align: center;
  letter-spacing: 1.28571px;
  text-transform: uppercase;
  color: ${ThemeData.colors.white};
  overflow: hidden;
`;

const BackText = styled.p`
  margin-top: 24px;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  text-align: center;
  color: ${ThemeData.colors.white};
  mix-blend-mode: normal;
  opacity: 0.75;
`;

const Button = styled.button`
  margin-top: 28px;
  font-weight: 700;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${ThemeData.colors.white};
  background: ${ThemeData.colors.orange};
  padding: 15px 29.5px 15px 31.5px;
  border: none;
`;
