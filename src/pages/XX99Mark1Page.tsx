import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import MaindDiv2Component from "../components/MaindDiv2Component";
import { ThemeData } from "../components/ThemeDataComponent";
import TripleDivComponent from "../components/TripleDivComponent";
import data from "../../data.json";
import { MyContext } from "../App";
import Menu from "../components/Menu";

export default function xx99mark1Page() {
  const navigate = useNavigate();
  const xx99mark1 = data.find((e) => e.id === 3);
  const context = useContext(MyContext);
  return (
    <div style={{opacity:context.isCart  || context.isMenu ? "0.4" : "1", background: context.isCart || context.isMenu ? "#000000" : "transparent"}}>
      <BackButton onClick={() => {
        navigate("/headphones")
        context.HeaderGoFunc();
        }}>Go Back</BackButton>
      <ProductDiv>
        <ImgDiv>
        <ProductImg src={
          window.innerWidth < 768 ? xx99mark1?.image.mobile : 
          window.innerWidth > 1200 ? xx99mark1?.image.desktop :
          xx99mark1?.image.tablet
          
          } alt="" />
        </ImgDiv>
        <ProductText>
          <OrangeP>NEW PRODUCT</OrangeP>
          <ProductH1>{xx99mark1?.name}</ProductH1>
          <ProductP>{xx99mark1?.description}</ProductP>
          <ProductPrice>{"$ " + xx99mark1?.price}</ProductPrice>
          <ButtonsDiv>
            <QuanityDiv>
              <ButtonMinus onClick={() => {
                context.setQuantityXX99M1(context.QuantityXX99M1 - 1)
                if(context.QuantityXX99M1 == 0){
                  context.setQuantityXX99M1(0)
                }
                }}> - </ButtonMinus>
              <ButtonP>{context.QuantityXX99M1}</ButtonP>
              <ButtonMinus onClick={() => context.setQuantityXX99M1(context.QuantityXX99M1 + 1)}> + </ButtonMinus>
            </QuanityDiv>
            <ProductButton onClick={() => {
              if(context.QuantityXX99M1 > 0){
                context.setItemAddXX99M1(true)
                
              }
              context.setIsRemoved(false)
                context.setCurtNum(context.CurtNum + 1)
              

            }}>ADD TO CART</ProductButton>
          </ButtonsDiv>
        </ProductText>
      </ProductDiv>
      <DivFIn>
      <FeaturesDiv>
        <FeatureH1>FEATURES</FeatureH1>
        <FeatureP>
          As the headphones all others are measured against, the XX99 Mark I
          demonstrates over five decades of audio expertise, redefining the
          critical listening experience. This pair of closed-back headphones are
          made of industrial, aerospace-grade materials to emphasize durability
          at a relatively light weight of 11 oz.
          <br/>
          <br/>
          From the handcrafted microfiber
          ear cushions to the robust metal headband with inner damping element,
          the components work together to deliver comfort and uncompromising
          sound. Its closed-back design delivers up to 27 dB of passive noise
          cancellation, reducing resonance by reflecting sound to a dedicated
          absorber. For connectivity, a specially tuned cable is included with a
          balanced gold connector.
        </FeatureP>
      </FeaturesDiv>
      <InTheBoxDiv>
        <InTheBoxDivH1>in the box</InTheBoxDivH1>
        <DivFeatureRight>
        <InTheBoxDivText>
          <InTheBoxDivP1>{xx99mark1?.includes[0].quantity + "x"}</InTheBoxDivP1>
          <InTheBoxDivP2>{xx99mark1?.includes[0].item}</InTheBoxDivP2>
        </InTheBoxDivText>
        <InTheBoxDivText>
          <InTheBoxDivP1>{xx99mark1?.includes[1].quantity + "x"}</InTheBoxDivP1>
          <InTheBoxDivP2>{xx99mark1?.includes[1].item}</InTheBoxDivP2>
        </InTheBoxDivText>
        <InTheBoxDivText>
          <InTheBoxDivP1>{xx99mark1?.includes[2].quantity + "x"}</InTheBoxDivP1>
          <InTheBoxDivP2>{xx99mark1?.includes[2].item}</InTheBoxDivP2>
        </InTheBoxDivText>
        <InTheBoxDivText>
          <InTheBoxDivP1>{xx99mark1?.includes[3].quantity + "x"}</InTheBoxDivP1>
          <InTheBoxDivP2>{xx99mark1?.includes[3].item}</InTheBoxDivP2>
        </InTheBoxDivText>
        </DivFeatureRight>
      </InTheBoxDiv>
      </DivFIn>
      <ImagesDiv>
        <ImgDiv1>
        <Img1 src={
          window.innerWidth < 768 ? xx99mark1?.gallery.first.mobile : 
          window.innerWidth > 1200 ? xx99mark1?.gallery.first.desktop : 
          xx99mark1?.gallery.first.tablet
          
          } alt="" />
        <Img1 src={
          window.innerWidth < 768 ? xx99mark1?.gallery.second.mobile : 
          window.innerWidth > 1200 ? xx99mark1?.gallery.second.desktop : 
          xx99mark1?.gallery.second.tablet
          } alt="" />
        </ImgDiv1>
        <Img3 src={
          window.innerWidth < 768 ? xx99mark1?.gallery.third.mobile :
          window.innerWidth > 1200 ? xx99mark1?.gallery.third.desktop : 
          xx99mark1?.gallery.third.tablet} alt="" />
      </ImagesDiv>

      <YuoMayAlsoLikeDiv>
        <H1>you may also like</H1>
        <LikdeDivMain>
        <LikeDiv>
          <LikeDivImg src={
            window.innerWidth < 768 ? xx99mark1?.others[0].image.mobile : 
            window.innerWidth > 1200 ? xx99mark1?.others[0].image.desktop : 
            xx99mark1?.others[0].image.tablet
            } alt="" />

          <LikeH1>{xx99mark1?.others[0].name}</LikeH1>
          <LikeButton onClick={() => {
            navigate("/headphones/xx99-mark-II")
            context.HeaderGoFunc();
            }}>
            See Product
          </LikeButton>
        </LikeDiv>
        <LikeDiv2 >
          <LikeDivImg src={
            window.innerWidth < 768 ? xx99mark1?.others[1].image.mobile : 
            window.innerWidth > 1200 ? xx99mark1?.others[1].image.desktop : 
            xx99mark1?.others[1].image.tablet
            } alt="" />

          <LikeH1>{xx99mark1?.others[1].name}</LikeH1>
          <LikeButton onClick={() => {
            navigate("/headphones/xx99-mark-I")
            context.HeaderGoFunc();
            }}>See Product</LikeButton>
        </LikeDiv2>
        <LikeDiv>
          <LikeDivImg src={
            window.innerWidth < 768 ? xx99mark1?.others[2].image.mobile : 
            window.innerWidth > 1200 ? xx99mark1?.others[2].image.desktop : 
            xx99mark1?.others[2].image.tablet
            } alt="" />

          <LikeH1>{xx99mark1?.others[2].name}</LikeH1>
          <LikeButton onClick={() => {
            navigate("/speakers/zx9")
            context.HeaderGoFunc();
            }}>See Product</LikeButton>
        </LikeDiv>
        </LikdeDivMain>
      </YuoMayAlsoLikeDiv>

      <Menu />

      <MaindDiv2Component />
    </div>
  );
}


const DivFIn = styled.div`
  @media (width > 1200px) {
    display: flex;
    flex-direction: row;
    padding: 0 165px;
    margin-bottom: 160px;
  
  }
`
const LikdeDivMain = styled.div`
  @media (width > 767px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`

const ImgDiv1 = styled.div`
  @media (width > 767px) {
    margin-right: 17.67px;
    width: 40%;
  }
  @media (width > 767px) {
    margin-right: 27px;
    width: 40%;
  }
`

const DivFeatureRight = styled.div`
  width: 50%;
  @media (width > 1200px) {
    width: 100%;
  }
`

const ImgDiv = styled.div`
@media (width > 767px){
 
height: 480px;
background: ${ThemeData.colors.silver};
border-radius: 8px;
margin-bottom: 32px;
align-items: center;
display: flex;
justify-content: center;
overflow: hidden;
width: 40%
}
@media (width > 1200px) {
  height: 560px;
  width: 50%;
  margin-right: 125px;
}
`

const LikeButton = styled.button`
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${ThemeData.colors.white};
  background: ${ThemeData.colors.orange};
  border: none;
  padding: 15px 29.5px 15px 31.5px;
  margin-bottom: 56px;
`;
const H1 = styled.h1`
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  text-align: center;
  letter-spacing: 0.857143px;
  text-transform: uppercase;
  color: ${ThemeData.colors.darkBlack};
  margin-bottom: 40px;
`;

const LikeH1 = styled.h1`
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  text-align: center;
  letter-spacing: 1.71429px;
  text-transform: uppercase;
  color: ${ThemeData.colors.darkBlack};
  margin-bottom: 32px;
`;

const LikeDiv = styled.div`
  width: 100%;
  overflow: hidden;
  align-items: center;
  display: flex;
  flex-direction: column;
  @media (width > 767px) {
   width: 33%;
   
  }
`;
const LikeDiv2 = styled(LikeDiv)`
@media (width > 767px) {
  margin: 0 11px;
}
@media (width > 1200px) {
  margin: 0 30px;
}
`


const LikeDivImg = styled.img`
  width: 100%;
  border-radius: 8px;
  margin-bottom: 32px;
`;

const YuoMayAlsoLikeDiv = styled.div`
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  margin-top: 120px;
  margin-bottom: 120px;
  @media (width > 767px) {
    padding: 0 40px;
    
  }
  @media (width > 1200px) {
    padding: 0 165px;
    
  }
`;

const ImagesDiv = styled.div`
  padding: 0 24px;
  overflow: hidden;
  width: 100%;
  @media (width > 767px) {
    display: flex;
    flex-direction: row;
    padding: 0 40px;
  }
  @media (width > 1200px) {
    padding: 0 165px;
  }
`;
const Img3 = styled.img`
  overflow: hidden;
  border-radius: 8px;
  height: 368px;
  width: 100%;
  @media (width > 767px){
    width: 56.26%;
  }
  @media (width > 1200px) {
    height: 592px;
  }
`;
const Img1 = styled.img`
  height: 174px;
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 20px;
  width: 100%;
  @media (width > 767px) {
    margin-bottom: 17.67px;
  }
  @media (width > 1200px) {
    height: 280px;
    margin-bottom: 27px;
  }
`;

const InTheBoxDivText = styled.div`
  display: flex;
  margin-bottom: 8px;
   overflow: hidden;
`;
const InTheBoxDivP1 = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 25px;
  color: ${ThemeData.colors.orange};
  margin-right: 24px;
   overflow: hidden;
`;
const InTheBoxDivP2 = styled.p`
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  color: ${ThemeData.colors.darkBlack};
  mix-blend-mode: normal;
  opacity: 0.5;
   overflow: hidden;
`;

const InTheBoxDivH1 = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: 0.857143px;
  text-transform: uppercase;
  color: ${ThemeData.colors.darkBlack};
  margin-bottom: 24px;
  overflow: hidden;
  @media (width > 767px) {
    font-size: 32px;
line-height: 36px;
letter-spacing: 1.14286px;
width: 50%;
  }
  @media (width > 1200px) {
    width: 100%;
  }
`;
const InTheBoxDiv = styled.div`
  margin-top: 88px;
  display: flex;
  flex-direction: column;
  padding: 0 24px;
  margin-bottom: 88px;
  overflow: hidden;
  @media (width > 767px){
    padding: 0 40px;
    display: flex;
    flex-direction: row;
    
  }
 
    @media (width > 1200px) {
    width: 47%;
    margin-top: 0;
    flex-direction: column;
    padding-left: 125px;
  }
`;
const FeatureP = styled.p`
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  color: ${ThemeData.colors.darkBlack};
  mix-blend-mode: normal;
  opacity: 0.5;
`;

const FeatureH1 = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: 0.857143px;
  text-transform: uppercase;
  color: ${ThemeData.colors.darkBlack};
  margin-bottom: 24px;
  overflow: hidden;
  @media (width > 767px) {
    font-size: 32px;
line-height: 36px;
letter-spacing: 1.14286px;
  }
`;
const FeaturesDiv = styled.div`
  padding: 0 24px;
  overflow: hidden;
  
  @media (width > 767px) {
    padding: 0 40px;
    
    
  }
  @media (width > 1200px) {
    width: 53%;
    padding: 0;
  }
 
  
`;
const ButtonP = styled.p`
  width: 16px;
  font-weight: 700;
  font-size: 13px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${ThemeData.colors.darkBlack};
  margin-left: 20px;
  margin-right: 21px;
`;
const ButtonMinus = styled.button`
  width: 16px;
  border: none;
  background: transparent;
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${ThemeData.colors.darkBlack};
  mix-blend-mode: normal;
  opacity: 0.25;
  &:hover {
    opacity: 1;
  }
`;
const ButtonsDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;
const QuanityDiv = styled.div`
  height: 48px;
  background: ${ThemeData.colors.silver};
  padding: 15px 15.5px;
  display: flex;
  flex-direction: row;

  margin-right: 16px;
  align-items: center;
`;

const ProductPrice = styled.h1`
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 1.28571px;
  text-transform: uppercase;
  color: ${ThemeData.colors.darkBlack};
  margin-bottom: 31px;
`;

const BackButton = styled.button`
  margin-top: 16px;
  margin-left: 24px;
  background: transparent;
  border: none;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  color: ${ThemeData.colors.darkBlack};
  mix-blend-mode: normal;
  opacity: 0.5;
  margin-bottom: 24px;
  transition: all 0.3s easy;
  &:hover {
    opacity: 1;
  }
  @media (width > 767px) {
    margin-top: 33px;
    margin-left: 40px;
  }
  @media (width > 1200px) {
    margin-top: 79px;
    margin-left: 165px;
    margin-bottom: 56px
  }
`;

const ProductButton = styled.button`
  padding: 15px 29.5px 15px 31.5px;
  border: none;
  background: ${ThemeData.colors.orange};
  font-weight: 700;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${ThemeData.colors.white};
`;

const OrangeP = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  /* align-items: flex-start; */
  letter-spacing: 10px;
  text-transform: uppercase;
  color: ${ThemeData.colors.orange};
  margin-bottom: 24px;
  @media (width > 767px) {
    font-weight: 400;
font-size: 12px;
line-height: 16px;
letter-spacing: 8.57143px;
margin-bottom: 17px;
  }
  @media (width > 1200px) {

  }
`;
const ProductH1 = styled.h1`
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  /* text-align: center; */
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${ThemeData.colors.darkBlack};
  margin-bottom: 24px;
  overflow: hidden;
  @media (width > 767px) {
    margin-bottom: 32px;
line-height: 32px;
width: 339px;

  }
  @media (width > 1200px) {
    font-size: 40px;
line-height: 44px;
letter-spacing: 1.42857px;
  }
`;

const ProductP = styled.p`
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  /* text-align: center; */
  color: ${ThemeData.colors.darkBlack};
  opacity: 0.5;
  margin-bottom: 24px;overflow: hidden;
  @media (width > 767px) {
    width: 339px;
    /* width: 100%; */
    margin-right: 39.5px;
   
  }
  @media (width > 1200px) {
    width: 445px;
  }
`;

const ProductText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;overflow: hidden;
  @media (width > 767px) {
   
   width: 50%;
   
  }
`;

const ProductDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 24px 0 24px;
  margin-bottom: 88px;
  width: 100%;
  overflow: hidden;
  align-items: center;
  @media (width > 767px) {
    flex-direction: row;
   
    padding: 0 40px;
    justify-content: space-between;
  }
  @media (width > 1200px) {
    padding: 0 165px;
    margin-bottom: 160px;
  }
`;
const ProductImg = styled.img`
  border-radius: 8px;
  margin-bottom: 32px;
  width: 100%;
 
`;
