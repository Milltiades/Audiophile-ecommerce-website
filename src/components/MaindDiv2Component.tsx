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
  margin-top: 52px;
  position: relative;
  
`;
