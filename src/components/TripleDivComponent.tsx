import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ThemeData } from "./ThemeDataComponent";

export default function TripleDivComponent() {
  const navigate = useNavigate();
  return (
    <>
      <TripleDiv>
       
        <Category style={{zIndex: "3"}}>
          <CategoryImgDiv>
            <Img src="/assets/shared/desktop/image-category-thumbnail-headphones.png" alt="" />
          </CategoryImgDiv>
          <CategoryDiv>
            <CategoryP>HEADPHONES</CategoryP>
            <CategoryDivButton onClick={() => navigate("/headphones")}>
            <CategoryDivButtonP>shop</CategoryDivButtonP>
            <ImgArrowRight
              src="/assets/shared/desktop/icon-arrow-right.svg"
              alt=""
            />
          </CategoryDivButton>
          </CategoryDiv>
        </Category>
        <Category style={{zIndex: "2", top:"-84px", position:"relative"}}>
          <CategoryImgDiv>
            <Img src="/assets/shared/desktop/image-category-thumbnail-speakers.png" alt="" />
          </CategoryImgDiv>
          <CategoryDiv>
            <CategoryP>SPEAKERS</CategoryP>
            <CategoryDivButton onClick={() => navigate("/speakers")}>
            <CategoryDivButtonP>shop</CategoryDivButtonP>
            <ImgArrowRight
              src="/assets/shared/desktop/icon-arrow-right.svg"
              alt=""
            />
          </CategoryDivButton>
          </CategoryDiv>
        </Category>
        <Category style={{zIndex: "1", top:"-168px", position:"relative"}}>
          <CategoryImgDiv>
            <Img src="/assets/shared/desktop/image-category-thumbnail-earphones.png" alt="" />
          </CategoryImgDiv>
          <CategoryDiv>
            <CategoryP>EARPHONES</CategoryP>
            <CategoryDivButton onClick={() => navigate("/earphones")}>
            <CategoryDivButtonP>shop</CategoryDivButtonP>
            <ImgArrowRight
              src="/assets/shared/desktop/icon-arrow-right.svg"
              alt=""
            />
          </CategoryDivButton>
          </CategoryDiv>
        </Category>
       

        
      </TripleDiv>
    </>
  );
}

const CategoryP = styled.p`
  font-weight: 700;
font-size: 15px;
line-height: 20px;
text-align: center;
letter-spacing: 1.07143px;
text-transform: uppercase;
color: ${ThemeData.colors.darkBlack};
overflow: hidden;
`

const Category = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  position: relative;
  
`

const CategoryImgDiv = styled.div`
  width: 100%;
  background: transparent;
  z-index: 3;
  align-items: center;
  display: flex;
  justify-content: center;
  overflow: hidden;
  position: relative;
  top: 100px;
  
`
const Img = styled.img`
  width: 170px;
  z-index: 3;
  overflow: hidden;
  
`

const CategoryDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: blue;
  height: 165px;
  align-items: center;
  padding: 88px 107px 22px 109px;
  overflow: hidden;
  z-index: 2;
  /* top: -100px;
  position: relative; */
  background: #F1F1F1;
border-radius: 8px;
`


const ImgArrowRight = styled.img`
  width: 5px;
  height: 10px;
  margin-left: 13.32px;
`;
const CategoryDivButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background: transparent;
  margin-top: 17px;
  overflow: hidden;
`;
const CategoryDivButtonP = styled.p`
  font-weight: 700;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${ThemeData.colors.darkBlack};
  opacity: 0.5;
  overflow: hidden;
`;


const TripleDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  padding: 0 24px;
  position: relative;
  top: -100px;
  
 
`;








// const DivImgSize = styled.div`
//   width: 80px;
//   height: 104px;
//   overflow: visible;
// `;



// const ImgTriple = styled.img`
//   transform: scale(0.35);
// `;

// const ImgArrowRight = styled.img`
//   width: 5px;
//   height: 10px;
//   margin-left: 13.32px;
// `;
// const HeadphonesDivButton = styled.button`
//   display: flex;
//   align-items: center;
//   border: none;
//   background: transparent;
//   /* margin-top: 17px; */
//   overflow: hidden;
// `;
// const HeadphonesDivButtonP = styled.p`
//   font-weight: 700;
//   font-size: 13px;
//   line-height: 18px;
//   letter-spacing: 1px;
//   text-transform: uppercase;
//   color: ${ThemeData.colors.darkBlack};
//   opacity: 0.5;
//   overflow: hidden;
// `;
// const HeadphonesDivP = styled.p`
//   font-weight: 700;
//   font-size: 15px;
//   line-height: 20px;
//   text-align: center;
//   letter-spacing: 1.07143px;
//   text-transform: uppercase;
//   overflow: hidden;
// `;

// const HeadphonesDiv = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   background: ${ThemeData.colors.silver};
//   border-radius: 8px;
// `;


