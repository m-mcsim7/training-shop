import React from "react";
import { Link, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import FirstPart from "./components/FirstPart/FirstPart";
//import SecondPart from "./components/SecondPart/SecondPart";
//import ThirdPart from "./components/ThirdPart/ThirdPart";
//import FourthPart from "./components/FourthPart/FourthPart";
//import FifthPart from "./components/FifthPart/FifthPart";
//import SixthPart from "./components/SixthPart/SixthPart";
import CategoriesWomen from "./components/Categories/CategoriesWomen";
import CategoriesMen from "./components/Categories/CategoriesMen";
//import Item from "./components/Item/Item";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <div className="App" data-test-id="app">
      <Header />
      <Routes>
        <Route  exact path="/" element={<FirstPart />} />
        <Route exact path="/Women" element={<CategoriesWomen />} />
        <Route exact path="/men" element={<CategoriesMen />} />
      </Routes>

      {/*<FirstPart />
         <SecondPart />
         <ThirdPart />
         <FourthPart />
         <FifthPart />
         <SixthPart />
        <CategoriesWomen />
         <CategoriesMen />
        <Item />*/}

      <Footer />
    </div>
  );
}

export default App;
