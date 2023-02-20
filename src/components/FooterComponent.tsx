import React from "react";
import styled from "styled-components";
import { ThemeData } from "./ThemeDataComponent";

export default function FooterComponent() {
  return (
    <>
      <Footer>
        <FooterLine />
        <FooterUp>
          <FooterLogo src="/assets/shared/desktop/logo.svg" alt="" />
          <FooterUpUl>
            <FooterUpLi>Home</FooterUpLi>
            <FooterUpLi>Headphones</FooterUpLi>
            <FooterUpLi>speakers</FooterUpLi>
            <FooterUpLi>earphones</FooterUpLi>
          </FooterUpUl>
        </FooterUp>
        <FooterDown>
          <FooterDownP>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </FooterDownP>
          <FooterDownlastP>Copyright 2021. All Rights Reserved</FooterDownlastP>
          <Socials>
            <img src="/assets/shared/desktop/icon-facebook.svg" alt="" />
            <TwitterImg src="/assets/shared/desktop/icon-twitter.svg" alt="" />
            <img src="/assets/shared/desktop/icon-instagram.svg" alt="" />
          </Socials>
        </FooterDown>
      </Footer>
    </>
  );
}
const Socials = styled.div`
margin-top: 50.25px;
    align-items: center;
    display: flex;
    flex-direction: row;
    
`
const TwitterImg = styled.img`
    margin-left:16px ;
    margin-right:16px ;
`

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
`;

const FooterUp = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FooterUpUl = styled.ul`
  margin-top: 48px;
  text-align: center;
`;
const FooterUpLi = styled.li`
  list-style: none;
  margin-bottom: 16px;
  color: ${ThemeData.colors.white};
  font-weight: 700;
  font-size: 13px;
  line-height: 25px;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

const FooterDown = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
