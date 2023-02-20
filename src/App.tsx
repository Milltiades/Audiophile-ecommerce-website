import { Route, Routes, useNavigate } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import FooterComponent from "./components/FooterComponent";
import GlobalStyles from "./components/GlobalStyles";
import HeaderComponent from "./components/HeaderComponent";
import CheckoutPage from "./pages/CheckoutPage";
import EarphonesPage from "./pages/EarphonesPage";
import HeadphonesPage from "./pages/HeadphonesPage";
import HomePage from "./pages/HomePage";
import SpeakersPage from "./pages/SpeakersPage";

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <GlobalStyles />
      <HeaderComponent/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/headphones" element={<HeadphonesPage />} />
        <Route path="/speakers" element={<SpeakersPage />} />
        <Route path="/earphones" element={<EarphonesPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
      <FooterComponent/>
    </div>
  );
}

export default App;


