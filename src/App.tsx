import { Route, Routes } from "react-router-dom";
import FooterComponent from "./components/FooterComponent";
import GlobalStyles from "./components/GlobalStyles";
import HeaderComponent from "./components/HeaderComponent";
import CheckoutPage from "./pages/CheckoutPage";
import EarphonesPage from "./pages/EarphonesPage";
import HeadphonesPage from "./pages/HeadphonesPage";
import HomePage from "./pages/HomePage";
import SpeakersPage from "./pages/SpeakersPage";
import XX59Page from "./pages/XX59Page";
import XX99MarkIIPage from "./pages/XX99MarkIIPage";
import XX99MarkIPage from "./pages/XX99MarkIPage";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/headphones">
          <Route index={true} element={<HeadphonesPage />} />
          <Route path="xx99-mark-I" element={<XX99MarkIPage />} />
          <Route path="xx99-mark-II" element={<XX99MarkIIPage />} />
          <Route path="xx59" element={<XX59Page />} />
        </Route>
        <Route path="/speakers">
          <Route index={true} element={<SpeakersPage />} />
          <Route path="zx9" element={<XX99MarkIPage />} />
          <Route path="zx7" element={<XX99MarkIPage />} />
        </Route>
        <Route path="/earphones">
          <Route index={true} element={<EarphonesPage />} />
          <Route path="yx1" element={<XX99MarkIPage />} />
        </Route>
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
      <FooterComponent />
    </div>
  );
}

export default App;
