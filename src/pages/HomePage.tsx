import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { MyContext } from "../App";
import MaindDiv2Component from "../components/MaindDiv2Component";
import MainDiv1Component from "../components/MainDiv1Component";
import Menu from "../components/Menu";
import StarterBackgroundDivComponent from "../components/StarterBackgroundDivComponent";
import { ThemeData } from "../components/ThemeDataComponent";
import TripleDivComponent from "../components/TripleDivComponent";

export default function HomePage() {
  const context = useContext(MyContext)
  
  return (
    <div style={{ overflow: "hidden", opacity:context.isCart  || context.isMenu ? "0.4" : "1", background: context.isCart || context.isMenu ? "#000000" : "transparent"}}>
     
      <StarterBackgroundDivComponent/>
      <Menu/>
      <MainDiv1Component />
      <MaindDiv2Component/>
     
    </div>
  );
}






