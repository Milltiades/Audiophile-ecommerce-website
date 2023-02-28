import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { MyContext } from "../App";
import { ThemeData } from "./ThemeDataComponent";

export default function FooterComponent() {
  const navigate = useNavigate();
  const context = useContext(MyContext)

  
  return (
    <>
      <Footer>
        <FooterLine />
        <FooterUp>
          <FooterLogo src="/assets/shared/desktop/logo.svg" alt="" />
          <FooterUpUl>
            <FooterUpLi>
              <LiButtons onClick={() => {
                navigate("/");
                context.HeaderGoFunc();
                }}>Home</LiButtons>
            </FooterUpLi>
            <FooterUpLi>
              <LiButtons onClick={() => {
                navigate("/headphones");
                context.HeaderGoFunc();
                }}>Headphones</LiButtons>
            </FooterUpLi>
            <FooterUpLi>
              <LiButtons onClick={() => {
                navigate("/speakers");
                context.HeaderGoFunc();
                }}>speakers</LiButtons>
            </FooterUpLi>
            <FooterUpLi>
              <LiButtons onClick={() => {
                navigate("/earphones");
                context.HeaderGoFunc();
            }}>earphones</LiButtons>
            </FooterUpLi>
          </FooterUpUl>
        </FooterUp>
        <FooterDown>
          <FooterDownP>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </FooterDownP>
          <FooterLastDiv >
          <FooterDownlastP>Copyright 2021. All Rights Reserved</FooterDownlastP>
          <Socials>
            <img src="/assets/shared/desktop/icon-facebook.svg" alt="" />
            <TwitterImg src="/assets/shared/desktop/icon-twitter.svg" alt="" />
            <img src="/assets/shared/desktop/icon-instagram.svg" alt="" />
          </Socials>
          </FooterLastDiv>
        </FooterDown>
      </Footer>
    </>
  );
}

const FooterLastDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
@media (width > 767px) {
  flex-direction: row;
  text-align: start;
  justify-content: space-between;
}
`
const LiButtons = styled.button`
  border: none;
  background: transparent;
  color: ${ThemeData.colors.white};
  font-weight: 700;
  font-size: 13px;
  line-height: 25px;
  letter-spacing: 2px;
  text-transform: uppercase;
  transition: all .3s ease;
  &:hover {
    opacity: 0.5;
  }

`
const Socials = styled.div`
  margin-top: 50.25px;
  align-items: center;
  display: flex;
  flex-direction: row;
`;
const TwitterImg = styled.img`
  margin-left: 16px;
  margin-right: 16px;
`;

const FooterLine = styled.div`
  width: 101px;
  height: 4px;
  background: ${ThemeData.colors.orange};
`;
const FooterDownP = styled.p`
  margin-top: 32px;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  text-align: center;
  opacity: 0.5;
  color: ${ThemeData.colors.white};
  @media (width > 767px) {
    text-align: start;
  }
`;
const FooterDownlastP = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  text-align: center;
  opacity: 0.5;
  color: ${ThemeData.colors.white};
  margin-top: 48px;
`;

const FooterLogo = styled.img`
  margin-top: 48px;
  width: 143px;
  height: 25px;
`;
const Footer = styled.div`
  padding: 0 24px 38px 24px;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: ${ThemeData.colors.black};
  align-items: center;
  margin-top: 120px;
  @media (width > 767px){
    padding: 0 40px 46px ;
    align-items: flex-start;
  }
`;

const FooterUp = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (width > 767px) {
    align-items: flex-start;
  }
`;

const FooterUpUl = styled.ul`
  margin-top: 48px;
  text-align: center;
  @media (width > 767px) {
    display: flex;
    flex-direction: row;
    margin-top: 32px;
  }
`;
const FooterUpLi = styled.li`
  list-style: none;
  margin-bottom: 16px;
  @media (width > 767px) {
    margin-right: 34px ;
  }
`;

const FooterDown = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
 
`;
