import Sidebar from "./components/Sidebar/Sidebar";
import { AppStyle } from "./App.style";
import Header from "./components/Header/Header";
import Card, { CardProps } from "./components/UI/Card/Card";
import { images } from "./config/images";
import { Route, Routes } from "react-router-dom";
import Discovery from "./Pages/Discovery/Discovery";
import TopRated from "./Pages/TopRated/TopRated";

// const data: CardProps = {
//   image: images.topMovies.redemption,
//   name: "dark knoght d feargstdy yhjt",
//   rating: 9.8,
//   tag: ["Drama"],
// };
function App() {
  return (
    <>
      <Header />
      <AppStyle>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Discovery />} />
          <Route path="discovery" element={<Discovery />} />
          <Route path="topRated" element={<TopRated />} />

          {/* <Card {...data} /> */}
        </Routes>
      </AppStyle>
    </>
  );
}

export default App;
