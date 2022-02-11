import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
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
        <Route  exact path="/" element={<Main />} />
        <Route exact path="/Women" element={<CategoriesWomen />} />
        <Route exact path="/men" element={<CategoriesMen />} />
      </Routes>

      {/*  <Item />*/}

      <Footer />
    </div>
  );
}

export default App;
