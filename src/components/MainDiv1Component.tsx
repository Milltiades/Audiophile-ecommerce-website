import React from 'react'
import styled from 'styled-components';
import { ThemeData } from './ThemeDataComponent';

export default function MainDiv1Component() {
  return (
    <>
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
    </>
  )
}


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