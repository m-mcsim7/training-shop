import React from "react";

import Header from "./components/Header/Header";
import FirstPart from "./components/FirstPart/FirstPart";
import SecondPart from "./components/SecondPart/SecondPart";
import ThirdPart from "./components/ThirdPart/ThirdPart";
import FourthPart from "./components/FourthPart/FourthPart";
import FifthPart from "./components/FifthPart/FifthPart";
import SixthPart from "./components/SixthPart/SixthPart";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <FirstPart />
      <SecondPart />
      <ThirdPart />
      <FourthPart />
      <FifthPart />
      <SixthPart />
      <Footer />
    </div>
  );
}

export default App;
