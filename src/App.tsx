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
import { useState } from "react";
import { Drawer } from "antd";

// const data: CardProps = {
//   image: images.topMovies.redemption,
//   name: "dark knoght d feargstdy yhjt",
//   rating: 9.8,
//   tag: ["Drama"],
// };

function App() {
  const headerChange = useHeaderChange();
  const mode = useColorMode();
  const [open, setOpen] = useState(false);
  const openHandler = () => {
    setOpen(true);
  };
  // const closeHandler = () => {
  //   setOpen(false);
  // };
  return (
    <>
      <Header />
      <AppStyle className={`${headerChange ? "subscribe" : ""} ${mode.mode}`}>
        {!headerChange && <Sidebar onOpen={openHandler} />}
        <div className="appContainer">
          {/* <div style={{ position: "relative" }}>
          <Drawer
            open={open}
            onClose={closeHandler}
            getContainer={false}
            style={{ zIndex: -122 }}
            placement="left"
            afterOpenChange={(visibility) => setOpen(visibility)}
          /> */}
          <Routes>
            <Route path="/" element={<Discovery />} />
            <Route path="discovery" element={<Discovery />} />
            <Route path="topRated" element={<TopRated />} />
            <Route path="comingSoon" element={<ComingSoon />} />
            <Route path="subscribe" element={<Subscribe />} />
            {/* <Card {...data} /> */}
          </Routes>
        </div>
      </AppStyle>
    </>
  );
}

export default App;
