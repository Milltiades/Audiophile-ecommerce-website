import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import MaindDiv2Component from "../components/MaindDiv2Component";
import { ThemeData } from "../components/ThemeDataComponent";
import TripleDivComponent from "../components/TripleDivComponent";
import data from "../../data.json";
import { MyContext } from "../App";
import Menu from "../components/Menu";

export default function ZX7Page() {
  const navigate = useNavigate();
  const zx7 = data.find((e) => e.id === 5);
  const context = useContext(MyContext);
  return (
    <div style={{opacity:context.isCart  || context.isMenu ? "0.4" : "1", background: context.isCart || context.isMenu ? "#000000" : "transparent"}}>
      <BackButton onClick={() => navigate("/speakers")}>Go Back</BackButton>
      <ProductDiv>
        <ProductImg src={zx7?.image.mobile} alt="" />
        <ProductText>
          <OrangeP>NEW PRODUCT</OrangeP>
          <ProductH1>{zx7?.name}</ProductH1>
          <ProductP>{zx7?.description}</ProductP>
          <ProductPrice>{"$ " + zx7?.price}</ProductPrice>
          <ButtonsDiv>
            <QuanityDiv>
              <ButtonMinus onClick={() => {
                context.setQuantityZX7(context.QuantityZX7 - 1)
                if(context.QuantityZX7 == 0){
                  context.setQuantityZX7(0)
                }
                }}> - </ButtonMinus>
              <ButtonP>{context.QuantityZX7}</ButtonP>
              <ButtonMinus onClick={() => context.setQuantityZX7(context.QuantityZX7 + 1)}> + </ButtonMinus>
            </QuanityDiv>
            <ProductButton onClick={() => {
              if(context.QuantityZX7 > 0){
                context.setItemAddZX7(true)
                
              }
              context.setIsRemoved(false)
                context.setCurtNum(context.CurtNum + 1)
              

            }}>ADD TO CART</ProductButton>
          </ButtonsDiv>
        </ProductText>
      </ProductDiv>
      <FeaturesDiv>
        <FeatureH1>FEATURES</FeatureH1>
        <FeatureP>
          Reap the advantages of a flat diaphragm tweeter cone. This provides a
          fast response rate and excellent high frequencies that lower tiered
          bookshelf speakers cannot provide. The woofers are made from aluminum
          that produces a unique and clear sound. XLR inputs allow you to
          connect to a mixer for more advanced usage. 
          <br/>
          <br/>
          The ZX7 speaker is the
          perfect blend of stylish design and high performance. It houses an
          encased MDF wooden enclosure which minimises acoustic resonance. Dual
          connectivity allows pairing through bluetooth or traditional optical
          and RCA input. Switch input sources and control volume at your finger
          tips with the included wireless remote. This versatile speaker is
          equipped to deliver an authentic listening experience.
        </FeatureP>
      </FeaturesDiv>
      <InTheBoxDiv>
        <InTheBoxDivH1>in the box</InTheBoxDivH1>
        <InTheBoxDivText>
          <InTheBoxDivP1>{zx7?.includes[0].quantity + "x"}</InTheBoxDivP1>
          <InTheBoxDivP2>{zx7?.includes[0].item}</InTheBoxDivP2>
        </InTheBoxDivText>
        <InTheBoxDivText>
          <InTheBoxDivP1>{zx7?.includes[1].quantity + "x"}</InTheBoxDivP1>
          <InTheBoxDivP2>{zx7?.includes[1].item}</InTheBoxDivP2>
        </InTheBoxDivText>
        <InTheBoxDivText>
          <InTheBoxDivP1>{zx7?.includes[2].quantity + "x"}</InTheBoxDivP1>
          <InTheBoxDivP2>{zx7?.includes[2].item}</InTheBoxDivP2>
        </InTheBoxDivText>
        <InTheBoxDivText>
          <InTheBoxDivP1>{zx7?.includes[3].quantity + "x"}</InTheBoxDivP1>
          <InTheBoxDivP2>{zx7?.includes[3].item}</InTheBoxDivP2>
        </InTheBoxDivText>
        <InTheBoxDivText>
          <InTheBoxDivP1>{zx7?.includes[4].quantity + "x"}</InTheBoxDivP1>
          <InTheBoxDivP2>{zx7?.includes[4].item}</InTheBoxDivP2>
        </InTheBoxDivText>
      </InTheBoxDiv>

      <ImagesDiv>
        <Img1 src={zx7?.gallery.first.mobile} alt="" />
        <Img1 src={zx7?.gallery.second.mobile} alt="" />
        <Img3 src={zx7?.gallery.third.mobile} alt="" />
      </ImagesDiv>

      <YuoMayAlsoLikeDiv>
        <H1>you may also like</H1>
        <LikeDiv>
          <LikeDivImg src={zx7?.others[0].image.mobile} alt="" />

          <LikeH1>{zx7?.others[0].name}</LikeH1>
          <LikeButton onClick={() => navigate("/speakers/zx9")}>
            See Product
          </LikeButton>
        </LikeDiv>
        <LikeDiv>
          <LikeDivImg src={zx7?.others[1].image.mobile} alt="" />

          <LikeH1>{zx7?.others[1].name}</LikeH1>
          <LikeButton onClick={() => navigate("/headphones/xx99-mark-I")}>
            See Product
          </LikeButton>
        </LikeDiv>
        <LikeDiv>
          <LikeDivImg src={zx7?.others[2].image.mobile} alt="" />

          <LikeH1>{zx7?.others[2].name}</LikeH1>
          <LikeButton onClick={() => navigate("/headphones/xx59")}>
            See Product
          </LikeButton>
        </LikeDiv>
      </YuoMayAlsoLikeDiv>

      <Menu />

      <MaindDiv2Component />
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
`;
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
`;

const ImagesDiv = styled.div`
  padding: 0 24px;
  overflow: hidden;
  width: 100%;
`;
const Img3 = styled.img`
  overflow: hidden;
  border-radius: 8px;
  height: 368px;
  width: 100%;
`;
const Img1 = styled.img`
  height: 174px;
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 20px;
  width: 100%;
`;

const InTheBoxDivText = styled.div`
  display: flex;
  margin-bottom: 8px;
`;
const InTheBoxDivP1 = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 25px;
  color: ${ThemeData.colors.orange};
  margin-right: 24px;
`;
const InTheBoxDivP2 = styled.p`
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  color: ${ThemeData.colors.darkBlack};
  mix-blend-mode: normal;
  opacity: 0.5;
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
`;
const InTheBoxDiv = styled.div`
  margin-top: 88px;
  display: flex;
  flex-direction: column;
  padding: 0 24px;
  margin-bottom: 88px;
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
