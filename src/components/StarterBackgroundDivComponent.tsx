import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ThemeData } from './ThemeDataComponent';

export default function StarterBackgroundDivComponent() {
  const navigate = useNavigate();
  return (
    <>
    <BackgroundDiv>
        <ContentDiv>
          <BackP>new product</BackP>
          <BackH1> XX99 Mark II HeadphoneS</BackH1>
          <BackText>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </BackText>
          <Button onClick={() => navigate("/headphones/xx99-mark-II")}>See Product</Button>
        </ContentDiv>
      </BackgroundDiv>
    </>
  )
}


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