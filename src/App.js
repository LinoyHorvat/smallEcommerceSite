import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Products from "./components/Products";
import Cart from "./components/Cart";

class App extends Component {
  render() {
    return (
      <div>
      <BrowserRouter>
      <div>
        <Navbar />
        <Route path="/" exact component={HomePage} />
        <Route path="/products" exact component={Products} />
        <Route path="/cart" exact component={Cart} />
      </div>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;


