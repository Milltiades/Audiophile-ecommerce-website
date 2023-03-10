import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { MyContext } from "../App";
import MaindDiv2Component from "../components/MaindDiv2Component";
import Menu from "../components/Menu";
import { ThemeData } from "../components/ThemeDataComponent";
import TripleDivComponent from "../components/TripleDivComponent";
import data from "../../data.json";

export default function EarphonesPage() {
  const navigate = useNavigate();
  const context = useContext(MyContext);
  const yx1 = data.find((e) => e.id === 1);
  return (
    <div style={{opacity:context.isCart  || context.isMenu ? "0.4" : "1", background: context.isCart || context.isMenu ? "#000000" : "transparent"}}>
      <Header>
        <HeaderH1>Earphones</HeaderH1>
      </Header>
      <ProductDiv>
        <ImgDiv>
        <ProductImg src={
          window.innerWidth < 768 ? yx1?.image.mobile : 
          window.innerWidth > 1200 ? yx1?.image.desktop :
          yx1?.image.tablet
          } alt="" />
          </ImgDiv>
        <ProductText>
          <OrangeP>NEW PRODUCT</OrangeP>
          <ProductH1>YX1 WIRELESS EARPHONES</ProductH1>
          <ProductP>
            Tailor your listening experience with bespoke dynamic drivers from
            the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound
            even in noisy environments with its active noise cancellation
            feature.
          </ProductP>
          <ProductButton onClick={() => {
            navigate('yx1')
            context.HeaderGoFunc();
            }}>See Product</ProductButton>
        </ProductText>
      </ProductDiv>

      <Menu />
      <MaindDiv2Component />
    </div>
  );
}

// const ImgDiv = styled.div`
// @media (width > 767px){
//   width: 100%;
// height: 352px;
// background: ${ThemeData.colors.silver};
// border-radius: 8px;
// margin-bottom: 32px;

// align-items: center;
// display: flex;
// justify-content: center;
// overflow: hidden;

// }
// `
// const ProductButton = styled.button`
  
//   padding: 15px 29.5px 15px 31.5px;
//   border: none;
//   background: ${ThemeData.colors.orange};
//   font-weight: 700;
//   font-size: 13px;
//   line-height: 18px;
//   letter-spacing: 1px;
//   text-transform: uppercase;
//   color: ${ThemeData.colors.white};
//   margin-bottom: 56px;
// `;

// const OrangeP = styled.p`
 
//   font-style: normal;
//   font-weight: 400;
//   font-size: 14px;
//   line-height: 19px;
//   text-align: center;
//   letter-spacing: 10px;
//   text-transform: uppercase;
//   color: ${ThemeData.colors.orange};
//   margin-bottom: 24px;
// `;
// const ProductH1 = styled.h1`
 
//   font-weight: 700;
//   font-size: 28px;
//   line-height: 38px;
//   text-align: center;
//   letter-spacing: 1px;
//   text-transform: uppercase;
//   color: ${ThemeData.colors.darkBlack};
//   overflow: hidden;
//   margin-bottom: 24px;
//   @media (width > 767px) {
//     margin-bottom: 32px;

//     font-size: 40px;
// line-height: 44px;
// letter-spacing: 1.42857px;
// width: 390px;
//   }
// `;

// const ProductP = styled.p`
  
//   font-weight: 500;
//   font-size: 15px;
//   line-height: 25px;
//   text-align: center;
//   color: ${ThemeData.colors.darkBlack};
//   opacity: 0.5;
//   margin-bottom: 24px;

//   @media (width > 767px) {
//     width: 572px;
//     margin-bottom: 32px;
//   }
// `;

// const ProductText = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const ProductDiv = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   padding: 0 24px 120px 24px;
// `;
// const ProductImg = styled.img`
//   border-radius: 8px;
//   margin-bottom: 32px;
//   width: 100%;
//   @media (width > 767px){
//     margin-bottom: 0;
//     width: 320px; 
//   }
// `;
// const Header = styled.div`
//   width: 100%;
//   background: ${ThemeData.colors.darkBlack};
//   padding: 32px;
  
//   margin-bottom: 64px;
//   overflow: hidden;
//   display: flex;
//     justify-content: center;
//     align-items: center;
//   @media (width > 767px) {
//     padding: 105px 0 97px 0px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     margin-bottom: 120px;
//   }
// `;
// const HeaderH1 = styled.h1`
//   font-weight: 700;
//   font-size: 28px;
//   line-height: 38px;
//   text-align: center;
//   letter-spacing: 2px;
//   text-transform: uppercase;
//   color: ${ThemeData.colors.white};
//   overflow: hidden;
//   @media (width > 767px) {
//     font-size: 40px;
// line-height: 44px;
// letter-spacing: 1.42857px;
// width: 283px;
//   }
// `;



const ImgDiv = styled.div`
  @media (width > 767px) {
    width: 100%;
    height: 352px;
    background: ${ThemeData.colors.silver};
    border-radius: 8px;
    margin-bottom: 32px;

    align-items: center;
    display: flex;
    justify-content: center;
    overflow: hidden;
    
  }
  @media (width > 1200px) {
    height: 560px;
    width: 50%;
    margin-right: 120px;

  }
`;

const ImgDiv2 = styled(ImgDiv)`
  @media (width > 1200px) {
    order: 1

  }
`

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
  margin-bottom: 56px;
  transition: all .3s ease;
  &:hover {
    background: #FBAF85;
  }
`;

const OrangeP = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 10px;
  text-transform: uppercase;
  color: ${ThemeData.colors.orange};
  margin-bottom: 24px;
  @media (width > 1200px) {
    align-items: flex-start;
  }
`;
const ProductH1 = styled.h1`
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${ThemeData.colors.darkBlack};
  overflow: hidden;
  margin-bottom: 24px;
  @media (width > 767px) {
    margin-bottom: 32px;

    font-size: 40px;
    line-height: 44px;
    letter-spacing: 1.42857px;
    width: 390px;
  }
 
    @media (width > 1200px) {
    text-align: left;
  }
  
`;

const ProductP = styled.p`
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  text-align: center;
  color: ${ThemeData.colors.darkBlack};
  opacity: 0.5;
  margin-bottom: 24px;

  @media (width > 767px) {
    width: 572px;
    margin-bottom: 32px;
  }
  @media (width > 1200px) {
    text-align: left;
    width: 445px;
  }
`;

const ProductText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  @media (width > 1200px) {
    align-items: flex-start;
    width: 50%;
  }
`;

const ProductDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 24px 120px 24px;
  overflow: hidden;

  @media (width > 1200px){
    flex-direction: row;
    padding: 0 165px 160px 165px;
    align-items: center;
  }
`;

const ProductImg = styled.img`
  border-radius: 8px;
  margin-bottom: 32px;
  width: 100%;
  @media (width > 767px) {
    margin-bottom: 0;
    width: 320px;
  }
`;
const Header = styled.div`
  width: 100%;
  background: ${ThemeData.colors.darkBlack};
  padding: 32px;

  margin-bottom: 64px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (width > 767px) {
    padding: 105px 0 97px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 120px;
  }
`;
const HeaderH1 = styled.h1`
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  text-align: center;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${ThemeData.colors.white};
  overflow: hidden;
  @media (width > 767px) {
    font-size: 40px;
    line-height: 44px;
    letter-spacing: 1.42857px;
    width: 283px;
  }
`;
