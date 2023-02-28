import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { MyContext } from "../App";
import { ThemeData } from "./ThemeDataComponent";

export default function Menu() {
  const navigate = useNavigate();
  const context = useContext(MyContext)

  

 


  
  
  return (

    <>
      <TripleDiv>
       
        <Category >
          <CategoryImgDiv>
            <Img src="/assets/shared/desktop/image-category-thumbnail-headphones.png" alt="" />
          </CategoryImgDiv>
          <CategoryDiv>
            <CategoryP>HEADPHONES</CategoryP>
            <CategoryDivButton onClick={() => {
              context.setIsMenu(false)
              navigate("/headphones")
              context.HeaderGoFunc();
              }}>
            <CategoryDivButtonP>shop</CategoryDivButtonP>
            <ImgArrowRight
              src="/assets/shared/desktop/icon-arrow-right.svg"
              alt=""
            />
          </CategoryDivButton>
          </CategoryDiv>
        </Category>
        <Category2>
          <CategoryImgDiv>
            <Img src="/assets/shared/desktop/image-category-thumbnail-speakers.png" alt="" />
          </CategoryImgDiv>
          <CategoryDiv>
            <CategoryP>SPEAKERS</CategoryP>
            <CategoryDivButton onClick={() => {
              context.setIsMenu(false)
              navigate("/speakers")
              context.HeaderGoFunc();
              }}>
            <CategoryDivButtonP>shop</CategoryDivButtonP>
            <ImgArrowRight
              src="/assets/shared/desktop/icon-arrow-right.svg"
              alt=""
            />
          </CategoryDivButton>
          </CategoryDiv>
        </Category2>
        <Category3 >
          <CategoryImgDiv>
            <Img src="/assets/shared/desktop/image-category-thumbnail-earphones.png" alt="" />
          </CategoryImgDiv>
          <CategoryDiv>
            <CategoryP>EARPHONES</CategoryP>
            <CategoryDivButton onClick={() => {
              context.setIsMenu(false)
              navigate("/earphones")
              context.HeaderGoFunc();
              }}>
            <CategoryDivButtonP>shop</CategoryDivButtonP>
            <ImgArrowRight
              src="/assets/shared/desktop/icon-arrow-right.svg"
              alt=""
            />
          </CategoryDivButton>
          </CategoryDiv>
        </Category3>
       

        
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
  z-index: 3;
  @media (width > 767px) {
    all: unset;
     display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  position: relative
  }
`

const Category2 = styled(Category)`
  z-index: 2;
  top:-84px ;
  position:relative;
  @media (width > 767px) {
    all: unset;
     display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  position: relative;
  margin: 0 10px;
  }
  
`

const Category3 = styled(Category)`
z-index: 1;
 top:-168px; 
 position:relative;
 
 @media (width > 767px) {
    all: unset;
     display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  position: relative;
    
  }
  
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
  height: 160px;
  
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
  /* align-items: center; */
  overflow: hidden;
  padding: 0 24px;
  position: relative;
  top: -100px;
  background: ${ThemeData.colors.white};
  margin-top: 32px;

  @media (width > 767px) {
    flex-direction: row;
    align-items: center;
    padding: 0 39px;
    padding-bottom: 67px;
  }
  
 
`;










