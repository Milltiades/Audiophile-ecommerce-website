import React from 'react'
import styled from 'styled-components'
import { ThemeData } from './ThemeDataComponent'



export default function HeaderComponent() {
 
  return (
    <>
    <Header >
       <ButtonIcon><ImgB src="/assets/shared/tablet/icon-hamburger.svg" alt="" /></ButtonIcon>
      <img src="/assets/shared/desktop/logo.svg" alt="" />
      <ButtonIcon><ImgC src="/assets/shared/desktop/icon-cart.svg" alt="" /></ButtonIcon>
    </Header>
    <UnderHeaderLine/>
    </>
  )
}

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

