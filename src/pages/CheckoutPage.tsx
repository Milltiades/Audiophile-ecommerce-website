import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { MyContext } from "../App";
import data from "../../data.json";
import { ThemeData } from "../components/ThemeDataComponent";

export default function CheckoutPage() {
  const context = useContext(MyContext);
  const navigate = useNavigate();
  const [isCircle1, setIsCircle1] = useState<boolean>(false);
  const [isCircle2, setIsCircle2] = useState<boolean>(false);
  return (
    <Background blur={context.isOrder ? "blur(10px)" : "none"}>
      <BackButton
        onClick={() => {
          navigate("/");
          context.HeaderGoFunc();
        }}
      >
        Go Back
      </BackButton>
      <CheckoutDiv>
        <H1>CHECKOUT</H1>
        <BillingDiv>
          <H3>Billing details</H3>
          <DivAllBill>
            <DivAllBilleach>
              <H4>Name</H4>

              <Input type="text" placeholder="Alexei Ward" />
            </DivAllBilleach>
            <DivAllBilleach>
              <H4>Email Address</H4>
              <Input type="text" placeholder="alexei@mail.com" />
            </DivAllBilleach>
            <DivAllBilleach>
              <H4>Phone Number</H4>
              <Input type="text" placeholder="+1 202-555-0136" />
            </DivAllBilleach>
          </DivAllBill>
        </BillingDiv>
        <ShippingDiv>
          <H3>shipping info</H3>
          <H4>Your Address</H4>
          <Input type="text" placeholder="1137 Williams Avenue" />
          <DivAllBill>
            <DivAllBilleach>
              <H4>ZIP Code</H4>
              <Input type="text" placeholder="10001" />
            </DivAllBilleach>
            <DivAllBilleach>
              <H4>City</H4>
              <Input type="text" placeholder="New York" />
            </DivAllBilleach>
            <DivAllBilleach>
              <H4>Country</H4>
              <Input type="text" placeholder="United States" />
            </DivAllBilleach>
          </DivAllBill>
        </ShippingDiv>
        <PaymentDiv>
          <P1DP2D>
          <P1Div>
            <H3>payment details</H3>
            <H4>Payment Method</H4>
          </P1Div>
          <P2Div>
            <MethodDiv
              border={isCircle1 ? "1px solid #D87D4A" : "1px solid #CFCFCF"}
            >
              <Circle
                onClick={() => {
                  setIsCircle2(false);
                  setIsCircle1(!isCircle1);
                }}
              >
                <CircleLil style={{ display: isCircle1 ? "flex" : "none" }} />
              </Circle>
              e-Money
            </MethodDiv>
            <MethodDiv
              border={isCircle2 ? "1px solid #D87D4A" : "1px solid #CFCFCF"}
            >
              <Circle
                onClick={() => {
                  setIsCircle1(false);
                  setIsCircle2(!isCircle2);
                }}
              >
                <CircleLil style={{ display: isCircle2 ? "flex" : "none" }} />
              </Circle>
              Cash on Delivery
            </MethodDiv>
          </P2Div>
          </P1DP2D>
          <LastCheck>
            <LastCheckEach>
          <H4>e-Money Number</H4>
          <Input type="text" placeholder="238521993" />
          </LastCheckEach>
          <LastCheckEach >
          <H4>e-Money PIN</H4>
          <Input type="text" placeholder="6891" />
          </LastCheckEach>
          </LastCheck>
        </PaymentDiv>
      </CheckoutDiv>
      <CartMainDiv>
        <CartHeader>
          <CartH1>SUMMARY</CartH1>
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
              <ButtonP>{"x" + context.QuantityXX99M2}</ButtonP>
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
              <ButtonP>{"x" + context.QuantityXX99M1}</ButtonP>
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
              <ButtonP>{"x" + context.QuantityXX59}</ButtonP>
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
              <ButtonP>{"x" + context.QuantityYX1}</ButtonP>
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
              <ButtonP>{"x" + context.QuantityZX7}</ButtonP>
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
              <ButtonP>{"x" + context.QuantityZX9}</ButtonP>
            </ItemQuantity>
          </CartItem>
        ) : null}

        <Total>
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
        <Total>
          <TotalP>SHIPPING</TotalP>
          <TotalH1>$ 50</TotalH1>
        </Total>
        <Total>
          <TotalP>VAT (INCLUDED)</TotalP>
          <TotalH1>$ 150</TotalH1>
        </Total>
        <Total style={{ marginTop: "16px" }}>
          <TotalP>GRAND TOTAL</TotalP>
          <TotalH1 style={{ color: "#D87D4A" }}>
            ${" "}
            {data[3].price * context.QuantityXX99M2 +
              data[2].price * context.QuantityXX99M1 +
              data[5].price * context.QuantityZX9 +
              data[4].price * context.QuantityZX7 +
              data[0].price * context.QuantityYX1 +
              data[1].price * context.QuantityXX59 +
              50}
          </TotalH1>
        </Total>
        <Button
          onClick={() => {
            context.setIsOrder(true);
            context.HeaderGoFunc();
          }}
        >
          CONTINUE & PAY
        </Button>
      </CartMainDiv>
    </Background>
  );
}

const P1DP2D = styled.div`
 @media (width > 767px) {
  display: flex;
  flex-direction: row;
 }
`

const LastCheckEach = styled.div`
@media (width > 767px) {
  width: 49%;

}
`

const LastCheck = styled.div`
  display: flex;
  flex-direction: column;
  @media (width > 767px){
    flex-direction: row;
    justify-content: space-between;
  }
`

const P1Div = styled.div`
  @media (width > 767px) {
    width: 49%;
    display: flex;
    flex-direction: column;
  }
`;

const P2Div = styled.div`
  @media (width > 767px) {
    width: 49%;
    display: flex;
    flex-direction: column;
    margin-top: 41px;
  }
`;

const DivAllBilleach = styled.div`
  @media (width > 767px) {
    width: 49%;
  }
`;

const DivAllBill = styled.div`
  @media (width > 767px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
  }
`;
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
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
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

  margin-bottom: 8px;
`;

const ButtonP = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 25px;
  text-align: right;
  color: #000000;
  mix-blend-mode: normal;
  opacity: 0.5;
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
  background: transparent;
  align-items: center;
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
  margin-top: 32px;
  border-radius: 8px;
  padding: 31px 29px 31px 28px;
`;
/////////
const CircleLil = styled.div`
  display: none;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${ThemeData.colors.orange};
`;
const Circle = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid #cfcfcf;
  margin-right: 16px;
  cursor: pointer;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BackButton = styled.button`
  align-self: flex-start;
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

const H1 = styled.h1`
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 32px;
  color: #000000;
`;

const H3 = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 25px;
  letter-spacing: 0.928571px;
  text-transform: uppercase;
  color: #d87d4a;
  margin-bottom: 16px;
`;

const H4 = styled.h4`
  margin-bottom: 9px;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.214286px;
  color: ${ThemeData.colors.darkBlack};
`;
const Input = styled.input`
  padding: 18px 0 19px 24px;
  border: 1px solid #cfcfcf;
  border-radius: 8px;
  margin-bottom: 24px;
  width: 100%;
`;
const MethodDiv = styled.div<any>`
  border: ${(props) => props.border};
  border-radius: 8px;
  padding: 18px 0 19px 16px;
  margin-bottom: 16px;
  display: flex;
  flex-direction: row;
  
`;
const PaymentDiv = styled.div`
  display: flex;
  flex-direction: column;
  
`;
const ShippingDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
const BillingDiv = styled.div`
  display: flex;
  flex-direction: column;
  @media (width > 767px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;
const Background = styled.div<any>`
  width: 100%;
  padding: 16px 24px 97px 24px;
  background: ${ThemeData.colors.backgroundSilver};
  display: flex;
  flex-direction: column;
  @media (width > 767px) {
    padding: 48px 40px 116px 39px;
  }

  filter: ${(props) => props.blur};
`;
const CheckoutDiv = styled.div<any>`
  display: flex;
  flex-direction: column;
  padding: 24px 24px 31px 23px;
  background: ${ThemeData.colors.white};
  border-radius: 8px;
  @media (width > 767px) {
    padding: 30px 27px 30px 28px;
  }
`;
