import React from "react";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from './redux/idex'

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Categories from "./components/Categories/Categories";
import Item from "./components/Item/Item.jsx";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App" data-test-id="app">
        <Header />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route
            exact
            path="/women"
            element={<Categories product_type={"women"} />}
          />
          <Route
            exact
            path="/men"
            element={<Categories product_type={"men"} />}
          />
          <Route path="/men/*" element={<Item product_type={"men"} />} />
          <Route path="/women/*" element={<Item product_type={"women"} />} />
        </Routes>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
