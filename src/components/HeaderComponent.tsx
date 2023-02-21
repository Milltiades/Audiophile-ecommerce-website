import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { MyContext } from '../App'
import { ThemeData } from './ThemeDataComponent'



export default function HeaderComponent() {
  const context = useContext(MyContext)
 
  return (
    <>
    <Header >
       <ButtonIcon><ImgB src="/assets/shared/tablet/icon-hamburger.svg" alt="" /></ButtonIcon>
      <img src="/assets/shared/desktop/logo.svg" alt="" />
      <ButtonIcon onClick={() => context.setIsCart(!context.isCart)}><ImgC src="/assets/shared/desktop/icon-cart.svg" alt="" /></ButtonIcon>
    </Header>
    <UnderHeaderLine/>
    <CartDiv display={context.isCart? "block" : "none"}>
      <CartMainDiv>
        <CartHeader>
          <CartH1>cart (3)</CartH1>
          <CartButton>Remove all</CartButton>
        </CartHeader>
        <CartItem>
          <ItemImg src="/assets/product-xx99-mark-two-headphones/mobile/image-product.jpg" alt="" />
          <CartItemText>
            <H2>XX99 MK II</H2>
            <P>$ 2,999</P>
            </CartItemText>
            <ItemQuantity>
              <ButtonMinus>-</ButtonMinus>
              <ButtonP>1</ButtonP>
              <ButtonMinus>+</ButtonMinus>

            </ItemQuantity>
        </CartItem>
        <Total>
          <TotalP>TOTAL</TotalP>
          <TotalH1>$ 5,396</TotalH1>
        </Total>
        <Button>checkout</Button>
      </CartMainDiv>
    </CartDiv>
    </>
  )
}
const Button = styled.button`
  width: 100%;
  background: ${ThemeData.colors.orange};
  padding: 15px 52px 15px 56px;
  font-weight: 700;
font-size: 13px;
line-height: 18px;
text-align: center;
letter-spacing: 1px;
text-transform: uppercase;
color: ${ThemeData.colors.white};
border: none;

`

const TotalH1 = styled.h1`
  font-weight: 700;
font-size: 18px;
line-height: 25px;
text-align: center;
text-transform: uppercase;
color: ${ThemeData.colors.darkBlack};
`

const TotalP = styled.p`
  font-style: normal;
font-weight: 500;
font-size: 15px;
line-height: 25px;
color: ${ThemeData.colors.darkBlack};
mix-blend-mode: normal;
opacity: 0.5;
`

const Total = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;
  margin-bottom: 24px;
  
`

const ButtonP = styled.p`
width: 16px;
height: 18px;
  font-weight: 700;
font-size: 13px;
line-height: 18px;
text-align: center;
letter-spacing: 1px;
text-transform: uppercase;
color: ${ThemeData.colors.darkBlack};
margin-left: 12px;
margin-right: 13px;
`
const ButtonMinus = styled.button`
  width: 16px;
  height: 18px;
  font-weight: 700;
font-size: 13px;
line-height: 18px;
text-align: center;
letter-spacing: 1px;
text-transform: uppercase;
color: ${ThemeData.colors.darkBlack};
mix-blend-mode: normal;
opacity: 0.25;
border: none;
background: transparent;

`

const H2 = styled.h2`
  font-weight: 700;
font-size: 15px;
line-height: 25px;
color: ${ThemeData.colors.darkBlack};
`
const P = styled.p`
  font-weight: 700;
font-size: 14px;
line-height: 25px;
color: ${ThemeData.colors.darkBlack};

mix-blend-mode: normal;
opacity: 0.5;
`

const ItemImg = styled.img`
  border-radius: 8px;
  width: 64px;
  height: 64px;
  margin-right: 16px;
`

const ItemQuantity = styled.div`
  display: flex;
  flex-direction: row;
  padding: 7px 11.5px;
  background: ${ThemeData.colors.silver};
`

const CartItemText = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
`
const CartItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const CartButton = styled.button`
  border: none;
  background: transparent;
  
  font-weight: 500;
font-size: 15px;
line-height: 25px;
text-decoration-line: underline;
opacity: 0.5;
color: ${ThemeData.colors.darkBlack};
`
const CartH1 = styled.h1`
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 25px;
color: ${ThemeData.colors.darkBlack};
letter-spacing: 1.28571px;
text-transform: uppercase;
`

const CartHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 31px;
`

const CartDiv = styled.div<any>`
display: ${(props) => props.display};
  position: absolute;
  width: 100%;
  padding: 0 24px;
  
  background: transparent;
  
  z-index: 1;
  overflow: hidden;
  margin-top: 24px;
`
const CartMainDiv = styled.div`
  background: ${ThemeData.colors.white};
  width: 100%;
  
  border-radius: 8px;
  padding: 31px 29px 31px 28px;
`

const ButtonIcon = styled.button`
  border: none;
  background: transparent;
`
const Header = styled.div`
  display: flex;
  padding: 32px 24px;
  background: ${ThemeData.colors.headerBlack};
  align-items: center;
  justify-content: space-between;
  
`

const UnderHeaderLine = styled.div`
  width: 100%;
  height: 1px;
  background: #2D2D2D;
  

`

const ImgB = styled.img`
  width: 16px;
  height: 15px;
`
const ImgC = styled.img`
  width: 23px;
  height: 20px;
`

