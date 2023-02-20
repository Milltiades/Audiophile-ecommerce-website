import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import MaindDiv2Component from "../components/MaindDiv2Component";
import MainDiv1Component from "../components/MainDiv1Component";
import StarterBackgroundDivComponent from "../components/StarterBackgroundDivComponent";
import { ThemeData } from "../components/ThemeDataComponent";
import TripleDivComponent from "../components/TripleDivComponent";

export default function HomePage() {
  
  return (
    <div style={{ overflow: "hidden" }}>
     
      <StarterBackgroundDivComponent/>
      <TripleDivComponent/>
      <MainDiv1Component/>
      <MaindDiv2Component/>
     
    </div>
  );
}






