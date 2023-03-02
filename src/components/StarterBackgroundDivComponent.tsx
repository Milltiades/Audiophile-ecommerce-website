import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { MyContext } from '../App';
import { ThemeData } from './ThemeDataComponent';

export default function StarterBackgroundDivComponent() {
  const navigate = useNavigate();
  const context = useContext(MyContext)
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
          <Button onClick={() => {
            navigate("/headphones/xx99-mark-II")
            context.HeaderGoFunc();
            }}>See Product</Button>
        </ContentDiv>
      </BackgroundDiv>
    </>
  )
}


const BackgroundDiv = styled.div`
  position: relative;
  background: #191919;
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  background-image: url("/assets/home/mobile/image-header.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: 104px;
  top: -59.78px;
  overflow: hidden;
  @media (width > 767px) {
    background-image: url("/assets/home/tablet/image-header.jpg");
    
    height: 729px;
    padding-right: 186.61px;
    padding-left: 185.61px;
    padding-bottom:167px;
    
  }

  @media (width > 1200px) {
   align-items: flex-start;
    background-size: contain;
    background-position-x: 100% ;
    padding-bottom:158px;
    
  }
  
`;
const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 24px;
  padding-right: 24px;
   @media (width > 1200px) {
    padding: 0;
    align-items: flex-start;
  }
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
  @media (width > 767px) {
font-weight: 700;
font-size: 56px;
line-height: 58px;
text-align: center;
letter-spacing: 2px;
width: 396px;
  }
  @media (width > 1200px) {
    text-align: start;
  }
  
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
  @media (width > 1200px) {
    width: 349px;
    text-align: start;
  }
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
  transition: all .3s ease;
  &:hover {
    background: #FBAF85;
  }
`;