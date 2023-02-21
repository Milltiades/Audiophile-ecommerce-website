import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import MaindDiv2Component from "../components/MaindDiv2Component";
import { ThemeData } from "../components/ThemeDataComponent";
import TripleDivComponent from "../components/TripleDivComponent";
import data from "../../data.json";
import { MyContext } from "../App";

export default function XX99Mark2Page() {
  
  const context = useContext(MyContext);
  
  const navigate = useNavigate();
  const xx99mark2 = data.find((e) => e.id === 4)
  return (
    <div style={{opacity:context.isCart? "0.4" : "1", background: context.isCart? "#000000" : "transparent"}}>
      <BackButton onClick={() => navigate("/headphones")}>Go Back</BackButton>
      <ProductDiv>
        <ProductImg
          src={xx99mark2?.image.mobile}
          alt=""
        />
        <ProductText>
          <OrangeP>NEW PRODUCT</OrangeP>
          <ProductH1>{xx99mark2?.name}</ProductH1>
          <ProductP>
           {xx99mark2?.description}
          </ProductP>
          <ProductPrice>{"$ " + xx99mark2?.price}</ProductPrice>
          <ButtonsDiv>
            <QuanityDiv>
              <ButtonMinus> - </ButtonMinus>
              <ButtonP>1</ButtonP>
              <ButtonMinus> + </ButtonMinus>
            </QuanityDiv>
            <ProductButton>ADD TO CART</ProductButton>
          </ButtonsDiv>
        </ProductText>
      </ProductDiv>
      <FeaturesDiv>
        <FeatureH1>FEATURES</FeatureH1>
        <FeatureP>
          Featuring a genuine leather head strap and premium earcups, these
          headphones deliver superior comfort for those who like to enjoy
          endless listening. It includes intuitive controls designed for any
          situation. Whether you’re taking a business call or just in your own
          personal space, the auto on/off and pause features ensure that you’ll
          never miss a beat.
          <br/>
          <br/>
          The advanced Active Noise Cancellation with built-in equalizer allow
          you to experience your audio world on your terms. It lets you enjoy
          your audio in peace, but quickly interact with your surroundings when
          you need to. Combined with Bluetooth 5. 0 compliant connectivity and
          17 hour battery life, the XX99 Mark II headphones gives you superior
          sound, cutting-edge technology, and a modern design aesthetic.
        </FeatureP>
      </FeaturesDiv>
      <InTheBoxDiv>
        <InTheBoxDivH1>in the box</InTheBoxDivH1>
        <InTheBoxDivText>
            <InTheBoxDivP1>{xx99mark2?.includes[0].quantity + "x"}</InTheBoxDivP1>
            <InTheBoxDivP2>{xx99mark2?.includes[0].item}</InTheBoxDivP2>
        </InTheBoxDivText>
        <InTheBoxDivText>
            <InTheBoxDivP1>{xx99mark2?.includes[1].quantity + "x"}</InTheBoxDivP1>
            <InTheBoxDivP2>{xx99mark2?.includes[1].item}</InTheBoxDivP2>
        </InTheBoxDivText>
        <InTheBoxDivText>
            <InTheBoxDivP1>{xx99mark2?.includes[2].quantity + "x"}</InTheBoxDivP1>
            <InTheBoxDivP2>{xx99mark2?.includes[2].item}</InTheBoxDivP2>
        </InTheBoxDivText>
        <InTheBoxDivText>
            <InTheBoxDivP1>{xx99mark2?.includes[3].quantity + "x"}</InTheBoxDivP1>
            <InTheBoxDivP2>{xx99mark2?.includes[3].item}</InTheBoxDivP2>
        </InTheBoxDivText>
        <InTheBoxDivText>
            <InTheBoxDivP1>{xx99mark2?.includes[4].quantity + "x"}</InTheBoxDivP1>
            <InTheBoxDivP2>{xx99mark2?.includes[4].item}</InTheBoxDivP2>
        </InTheBoxDivText>

      </InTheBoxDiv>

      <ImagesDiv>
        
        <Img1 src={xx99mark2?.gallery.first.mobile} alt="" />
        <Img1 src={xx99mark2?.gallery.second.mobile} alt="" />
        <Img3 src={xx99mark2?.gallery.third.mobile} alt="" />
      
      </ImagesDiv>


      <YuoMayAlsoLikeDiv>
      <H1>you may also like</H1>
      <LikeDiv>
        <LikeDivImg src={xx99mark2?.others[0].image.mobile} alt="" />
      
      <LikeH1>{xx99mark2?.others[0].name}</LikeH1>
      <LikeButton onClick={() => navigate("/headphones/xx99-mark-I")}>See Product</LikeButton>
      </LikeDiv>
      <LikeDiv>
        <LikeDivImg src={xx99mark2?.others[1].image.mobile} alt="" />
      
      <LikeH1>{xx99mark2?.others[1].name}</LikeH1>
      <LikeButton onClick={() => navigate("/headphones/xx59")}>See Product</LikeButton>
      </LikeDiv>
      <LikeDiv>
        <LikeDivImg src={xx99mark2?.others[2].image.mobile} alt="" />
      
      <LikeH1>{xx99mark2?.others[2].name}</LikeH1>
      <LikeButton onClick={() => navigate("/speakers/zx9")}>See Product</LikeButton>
      </LikeDiv>
      </YuoMayAlsoLikeDiv>

      <TripleDivComponent/>

      <MaindDiv2Component/>


    </div>
  );
}

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
`
const H1 = styled.h1`
  font-weight: 700;
font-size: 24px;
line-height: 36px;
text-align: center;
letter-spacing: 0.857143px;
text-transform: uppercase;
color: ${ThemeData.colors.darkBlack};
margin-bottom: 40px;

`

const LikeH1 = styled.h1`
  font-weight: 700;
font-size: 24px;
line-height: 33px;
text-align: center;
letter-spacing: 1.71429px;
text-transform: uppercase;
color: ${ThemeData.colors.darkBlack};
margin-bottom: 32px;
`

const LikeDiv = styled.div`
  width: 100%;
  overflow: hidden;
  align-items: center;
  display: flex;
  flex-direction: column;
  
`
const LikeDivImg = styled.img`
  width: 100%;
  border-radius: 8px;
  margin-bottom: 32px;
`

const YuoMayAlsoLikeDiv = styled.div`
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  margin-top: 120px;
  margin-bottom: 120px;
`

const ImagesDiv = styled.div`
    padding: 0 24px;
    overflow: hidden;
    width: 100%;
`
const Img3 = styled.img`
  overflow: hidden;
  border-radius: 8px;
  height: 368px;
  width: 100%;
`
const Img1 = styled.img`
  height: 174px;
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 20px;
  width: 100%;
`

const InTheBoxDivText = styled.div`
    display: flex;
    margin-bottom: 8px;

`
const InTheBoxDivP1 = styled.p`
    font-style: normal;
font-weight: 700;
font-size: 15px;
line-height: 25px;
color: ${ThemeData.colors.orange};
margin-right: 24px;
`
const InTheBoxDivP2 = styled.p`
    font-weight: 500;
font-size: 15px;
line-height: 25px;
color: ${ThemeData.colors.darkBlack};
mix-blend-mode: normal;
opacity: 0.5;
`

const InTheBoxDivH1 = styled.h1`
   font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: 0.857143px;
  text-transform: uppercase;
  color: ${ThemeData.colors.darkBlack};
  margin-bottom: 24px; 
`
const InTheBoxDiv = styled.div`
margin-top: 88px;
    display: flex;
    flex-direction: column;
    padding: 0 24px;
    margin-bottom: 88px;
`
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
`;
const FeaturesDiv = styled.div`
padding: 0 24px;
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
`;

const ProductP = styled.p`
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  /* text-align: center; */
  color: ${ThemeData.colors.darkBlack};
  opacity: 0.5;
  margin-bottom: 24px;
`;

const ProductText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ProductDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 24px 0 24px;
  margin-bottom: 88px;
`;
const ProductImg = styled.img`
  border-radius: 8px;
  margin-bottom: 32px;
`;
