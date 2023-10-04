import Sidebar from "./components/Sidebar/Sidebar";
import { AppStyle } from "./App.style";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Discovery from "./Pages/Discovery/Discovery";
import TopRated from "./Pages/TopRated/TopRated";
import ComingSoon from "./Pages/ComingSoon/ComingSoon";
import Subscribe from "./Pages/Subscribe/Subscribe";
import useHeaderChange from "./hook/useHeaderChange";
import { useColorMode } from "./providers/ColorMode";



function App() {
  const headerChange = useHeaderChange();
  const mode = useColorMode();


  return (
    <>
      <Header />
      <AppStyle className={`${headerChange ? "subscribe" : ""} ${mode.mode}`}>
        {!headerChange && <Sidebar  />}
        <div className="appContainer">

          <Routes>
            <Route path="/" element={<Discovery />} />
            <Route path="discovery" element={<Discovery />} />
            <Route path="topRated" element={<TopRated />} />
            <Route path="comingSoon" element={<ComingSoon />} />
            <Route path="subscribe" element={<Subscribe />} />
          </Routes>
        </div>
      </AppStyle>
    </>
  );
}

export default App;
