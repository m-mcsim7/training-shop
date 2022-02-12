import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import CategoriesWomen from "./components/Categories/CategoriesWomen";
import CategoriesMen from "./components/Categories/CategoriesMen";
import ItemMen from "./components/Item/ItemMen.jsx";
import ItemWomen from "./components/Item/ItemWomen.jsx";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <div className="App" data-test-id="app">
      <Header />
      <Routes>
        <Route  exact path="/" element={<Main />} />
        <Route exact path="/women" element={<CategoriesWomen />} />
        <Route exact path="/men" element={<CategoriesMen />} />
        {/*<Route path="/product_page" element={<Item />} />*/}
        <Route path="/men/*" element={<ItemMen />} />
        <Route path="/women/*" element={<ItemWomen />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
