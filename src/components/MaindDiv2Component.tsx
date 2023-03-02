import React from 'react'
import styled from 'styled-components'
import { ThemeData } from './ThemeDataComponent'

export default function MaindDiv2Component() {
  return (
    <>
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
    </>
  )
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
overflow: hidden;
@media (width > 767px) {
  font-size: 40px;
line-height: 44px;
width: 573px;
}
@media (width > 1200px) {
  width: 445px;
  text-align: start;
}
`
const MainDiv2P = styled.p`
margin-top: 32px;
    font-style: normal;
font-weight: 500;
font-size: 15px;
line-height: 25px;
text-align: center;
opacity: 0.5;
@media (width > 767px) {
  width: 573px;
}
@media (width > 1200px) {
  width: 445px;
  text-align: start;
}
`

const MainDiv2Text = styled.div`
margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  @media (width > 767px) {
    margin-top: 63px;
  }
  @media (width > 1200px) {
    width: 49%;
    order: 1;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    margin-top: 0;
    margin-left: 0;
   
    
  }
`;

const MainDiv2Img = styled.div`
  width: 100%;
  height: 300px;
  background-image: url("/assets/shared/mobile/image-best-gear.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 8px;
  @media (width > 767px) {
    background-image: url("/assets/shared/tablet/image-best-gear.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  
  }
  @media (width > 1200px) {
    width: 49%;
    /* width: 540px; */
    order: 2;
     background-image: url("/assets/shared/desktop/image-best-gear.jpg");
  background-repeat: no-repeat;
    background-size: cover;
    height: 588px;
    /* margin-left: 125px; */
    
  
  }
`;

const MainDiv2 = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 24px;
  /* margin-top: 52px; */
  position: relative;
  @media (width > 767px) {
padding: 0 39px;
  }
   @media (width > 1200px) {
padding: 0 165px;
flex-direction: row;
align-items: center;
justify-content: space-between;
  }
  
`;
