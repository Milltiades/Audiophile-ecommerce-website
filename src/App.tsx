import { createContext, useState } from "react";
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
import XX99Mark1Page from "./pages/XX99Mark1Page";
import XX99Mark2Page from "./pages/XX99Mark2Page";
import YX1Page from "./pages/YX1Page";
import ZX7Page from "./pages/Zx7Page";
import ZX9Page from "./pages/ZX9Page";

export const MyContext = createContext<any>("");

function App() {
  const [isCart, setIsCart] = useState<boolean>(false);
  const [isMenu, setIsMenu] = useState<boolean>(false);

  return (
    <MyContext.Provider value={{ isCart, setIsCart, isMenu, setIsMenu }}>
      <div className="App">
        <GlobalStyles />
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/headphones">
            <Route index={true} element={<HeadphonesPage />} />
            <Route path="xx99-mark-I" element={<XX99Mark1Page />} />
            <Route path="xx99-mark-II" element={<XX99Mark2Page />} />
            <Route path="xx59" element={<XX59Page />} />
          </Route>
          <Route path="/speakers">
            <Route index={true} element={<SpeakersPage />} />
            <Route path="zx9" element={<ZX9Page />} />
            <Route path="zx7" element={<ZX7Page />} />
          </Route>
          <Route path="/earphones">
            <Route index={true} element={<EarphonesPage />} />
            <Route path="yx1" element={<YX1Page />} />
          </Route>
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
        <FooterComponent />
      </div>
    </MyContext.Provider>
  );
}

export default App;
