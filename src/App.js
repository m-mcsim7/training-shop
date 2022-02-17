import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Categories from "./components/Categories/Categories";
//import CategoriesWomen from "./components/Categories/CategoriesWomen";
//import CategoriesMen from "./components/Categories/CategoriesMen";
//import ItemMen from "./components/Item/ItemMen.jsx";
//import ItemWomen from "./components/Item/ItemWomen.jsx";
import Item from "./components/Item/Item.jsx";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <div className="App" data-test-id="app">
      <Header />
      <Routes>
        <Route  exact path="/" element={<Main />} />
        <Route exact path="/women" element={<Categories product_type={"women"}/>} />
        <Route exact path="/men" element={<Categories product_type={"men"}/>} />
        <Route path="/men/*" element={<Item product_type={"men"}/>} />
        {/*<Route path="/men/*" element={<ItemMen />} />*/}
        {/*<Route path="/women/*" element={<ItemWomen />} />*/}
        <Route path="/women/*" element={<Item product_type={"women"} />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
