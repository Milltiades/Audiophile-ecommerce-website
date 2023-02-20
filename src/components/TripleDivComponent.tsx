import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ThemeData } from './ThemeDataComponent';

export default function TripleDivComponent() {
    const navigate = useNavigate();
  return (
    <>
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
    </>
  )
}


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