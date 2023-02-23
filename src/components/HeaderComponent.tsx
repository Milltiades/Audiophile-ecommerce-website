import React, { useContext, useState } from "react";
import styled from "styled-components";
import { MyContext } from "../App";
import Menu from "./Menu";
import { ThemeData } from "./ThemeDataComponent";
import data from "../../data.json";

export default function HeaderComponent() {
  const context = useContext(MyContext);

  return (
    <>
      <Header>
        <ButtonIcon onClick={() => context.setIsMenu(!context.isMenu)}>
          <ImgB src="/assets/shared/tablet/icon-hamburger.svg" alt="" />
        </ButtonIcon>
        <img src="/assets/shared/desktop/logo.svg" alt="" />
        <ButtonIcon onClick={() => context.setIsCart(!context.isCart)}>
          <ImgC src="/assets/shared/desktop/icon-cart.svg" alt="" />
        </ButtonIcon>
      </Header>
      <UnderHeaderLine />
      <CartDiv display={context.isCart ? "block" : "none"}>
        <CartMainDiv>
          <CartHeader>
            <CartH1>cart ({context.CurtNum})</CartH1>
            <CartButton
              onClick={() => {
                context.setIsRemoved(true);
                context.setCurtNum(0);
                context.setItemAddXX99M2(false);
                context.setItemAddXX99M1(false);
                context.setItemAddXX59(false);
                context.setItemAddYX1(false);
                context.setItemAddZX7(false);
                context.setItemAddZX9(false);

                context.setQuantityXX99M2(0);
                context.setQuantityXX99M1(0);
                context.setQuantityZX9(0);
                context.setQuantityZX7(0);
                context.setQuantityYX1(0);
                context.setQuantityXX59(0);
              }}
            >
              Remove all
            </CartButton>
          </CartHeader>

          {context.itemAddXX99M2 ? (
            <CartItem style={{ display: context.isRemoved ? "none" : "flex" }}>
              <PriceText>
                <ItemImg src={data[3].image.mobile} alt="" />
                <CartItemText>
                  <H2>XX99 MK II</H2>
                  <P>$ {data[3].price}</P>
                </CartItemText>
              </PriceText>
              <ItemQuantity>
                <ButtonMinus
                  onClick={() => {
                    context.setQuantityXX99M2(context.QuantityXX99M2 - 1);
                    if (context.QuantityXX99M2 == 0) {
                      context.setQuantityXX99M2(0);
                    }
                  }}
                >
                  -
                </ButtonMinus>
                <ButtonP>{context.QuantityXX99M2}</ButtonP>
                <ButtonMinus
                  onClick={() =>
                    context.setQuantityXX99M2(context.QuantityXX99M2 + 1)
                  }
                >
                  +
                </ButtonMinus>
              </ItemQuantity>
            </CartItem>
          ) : null}

          {context.itemAddXX99M1 ? (
            <CartItem style={{ display: context.isRemoved ? "none" : "flex" }}>
              <PriceText>
                <ItemImg src={data[2].image.mobile} alt="" />
                <CartItemText>
                  <H2>XX99 MK I</H2>
                  <P>$ {data[2].price}</P>
                </CartItemText>
              </PriceText>
              <ItemQuantity>
                <ButtonMinus
                  onClick={() => {
                    context.setQuantityXX99M1(context.QuantityXX99M1 - 1);
                    if (context.QuantityXX99M1 == 0) {
                      context.setQuantityXX99M1(0);
                    }
                  }}
                >
                  -
                </ButtonMinus>
                <ButtonP>{context.QuantityXX99M1}</ButtonP>
                <ButtonMinus
                  onClick={() =>
                    context.setQuantityXX99M1(context.QuantityXX99M1 + 1)
                  }
                >
                  +
                </ButtonMinus>
              </ItemQuantity>
            </CartItem>
          ) : null}

          {context.itemAddXX59 ? (
            <CartItem style={{ display: context.isRemoved ? "none" : "flex" }}>
              <PriceText>
                {" "}
                <ItemImg src={data[1].image.mobile} alt="" />
                <CartItemText>
                  <H2>XX59</H2>
                  <P>$ {data[1].price}</P>
                </CartItemText>
              </PriceText>
              <ItemQuantity>
                <ButtonMinus
                  onClick={() => {
                    context.setQuantityXX59(context.QuantityXX59 - 1);
                    if (context.QuantityXX59 == 0) {
                      context.setQuantityXX59(0);
                    }
                  }}
                >
                  -
                </ButtonMinus>
                <ButtonP>{context.QuantityXX59}</ButtonP>
                <ButtonMinus
                  onClick={() =>
                    context.setQuantityXX59(context.QuantityXX59 + 1)
                  }
                >
                  +
                </ButtonMinus>
              </ItemQuantity>
            </CartItem>
          ) : null}

          {context.itemAddYX1 ? (
            <CartItem style={{ display: context.isRemoved ? "none" : "flex" }}>
              <PriceText>
                {" "}
                <ItemImg src={data[0].image.mobile} alt="" />
                <CartItemText>
                  <H2>YX1</H2>
                  <P>$ {data[0].price}</P>
                </CartItemText>
              </PriceText>
              <ItemQuantity>
                <ButtonMinus
                  onClick={() => {
                    context.setQuantityYX1(context.QuantityYX1 - 1);
                    if (context.QuantityYX1 == 0) {
                      context.setQuantityYX1(0);
                    }
                  }}
                >
                  -
                </ButtonMinus>
                <ButtonP>{context.QuantityYX1}</ButtonP>
                <ButtonMinus
                  onClick={() =>
                    context.setQuantityYX1(context.QuantityYX1 + 1)
                  }
                >
                  +
                </ButtonMinus>
              </ItemQuantity>
            </CartItem>
          ) : null}

          {context.itemAddZX7 ? (
            <CartItem style={{ display: context.isRemoved ? "none" : "flex" }}>
              <PriceText>
                {" "}
                <ItemImg src={data[4].image.mobile} alt="" />
                <CartItemText>
                  <H2>ZX7</H2>
                  <P>$ {data[4].price}</P>
                </CartItemText>
              </PriceText>
              <ItemQuantity>
                <ButtonMinus
                  onClick={() => {
                    context.setQuantityZX7(context.QuantityZX7 - 1);
                    if (context.QuantityZX7 == 0) {
                      context.setQuantityZX7(0);
                    }
                  }}
                >
                  -
                </ButtonMinus>
                <ButtonP>{context.QuantityZX7}</ButtonP>
                <ButtonMinus
                  onClick={() =>
                    context.setQuantityZX7(context.QuantityZX7 + 1)
                  }
                >
                  +
                </ButtonMinus>
              </ItemQuantity>
            </CartItem>
          ) : null}

          {context.itemAddZX9 ? (
            <CartItem style={{ display: context.isRemoved ? "none" : "flex" }}>
              <PriceText>
                {" "}
                <ItemImg src={data[5].image.mobile} alt="" />
                <CartItemText>
                  <H2>ZX9</H2>
                  <P>$ {data[5].price}</P>
                </CartItemText>
              </PriceText>
              <ItemQuantity>
                <ButtonMinus
                  onClick={() => {
                    context.setQuantityZX9(context.QuantityZX9 - 1);
                    if (context.QuantityZX9 == 0) {
                      context.setQuantityZX9(0);
                    }
                  }}
                >
                  -
                </ButtonMinus>
                <ButtonP>{context.QuantityZX9}</ButtonP>
                <ButtonMinus
                  onClick={() =>
                    context.setQuantityZX9(context.QuantityZX9 + 1)
                  }
                >
                  +
                </ButtonMinus>
              </ItemQuantity>
            </CartItem>
          ) : null}

          <Total style={{ display: context.isRemoved ? "none" : "flex" }}>
            <TotalP>TOTAL</TotalP>
            <TotalH1>
              ${" "}
              {data[3].price * context.QuantityXX99M2 +
                data[2].price * context.QuantityXX99M1 +
                data[5].price * context.QuantityZX9 +
                data[4].price * context.QuantityZX7 +
                data[0].price * context.QuantityYX1 +
                data[1].price * context.QuantityXX59}
            </TotalH1>
          </Total>
          <Button style={{ display: context.isRemoved ? "none" : "flex" }}>
            checkout
          </Button>
        </CartMainDiv>
      </CartDiv>
      <MenuDiv display={context.isMenu ? "block" : "none"}>
        <Menu />
      </MenuDiv>
    </>
  );
}
const PriceText = styled.div`
  display: flex;
  flex-direction: row;
`;
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
`;

const TotalH1 = styled.h1`
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  text-transform: uppercase;
  color: ${ThemeData.colors.darkBlack};
`;

const TotalP = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  color: ${ThemeData.colors.darkBlack};
  mix-blend-mode: normal;
  opacity: 0.5;
`;

const Total = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;
  margin-bottom: 24px;
`;

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
`;
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
`;

const H2 = styled.h2`
  font-weight: 700;
  font-size: 15px;
  line-height: 25px;
  color: ${ThemeData.colors.darkBlack};
`;
const P = styled.p`
  font-weight: 700;
  font-size: 14px;
  line-height: 25px;
  color: ${ThemeData.colors.darkBlack};

  mix-blend-mode: normal;
  opacity: 0.5;
`;

const ItemImg = styled.img`
  border-radius: 8px;
  width: 64px;
  height: 64px;
  margin-right: 16px;
`;

const ItemQuantity = styled.div`
  display: flex;
  flex-direction: row;
  padding: 7px 11.5px;
  background: ${ThemeData.colors.silver};
`;

const CartItemText = styled.div`
  display: flex;
  flex-direction: column;
  /* margin-right: 20px; */
  text-align: left;
`;
const CartItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 24px;
  justify-content: space-between;
`;

const CartButton = styled.button`
  border: none;
  background: transparent;

  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  text-decoration-line: underline;
  opacity: 0.5;
  color: ${ThemeData.colors.darkBlack};
`;
const CartH1 = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  color: ${ThemeData.colors.darkBlack};
  letter-spacing: 1.28571px;
  text-transform: uppercase;
`;

const CartHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 31px;
`;

const CartDiv = styled.div<any>`
  display: ${(props) => props.display};
  position: absolute;
  width: 100%;
  padding: 0 24px;

  background: transparent;

  z-index: 1;
  overflow: hidden;
  margin-top: 24px;
`;
const CartMainDiv = styled.div`
  background: ${ThemeData.colors.white};
  width: 100%;

  border-radius: 8px;
  padding: 31px 29px 31px 28px;
`;
const MenuDiv = styled(CartDiv)`
  padding: 0;
  margin-top: 0;
`;

const ButtonIcon = styled.button`
  border: none;
  background: transparent;
`;
const Header = styled.div`
  display: flex;
  padding: 32px 24px;
  background: ${ThemeData.colors.headerBlack};
  align-items: center;
  justify-content: space-between;
`;

const UnderHeaderLine = styled.div`
  width: 100%;
  height: 1px;
  background: #2d2d2d;
`;

const ImgB = styled.img`
  width: 16px;
  height: 15px;
`;
const ImgC = styled.img`
  width: 23px;
  height: 20px;
`;
