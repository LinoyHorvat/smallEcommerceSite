import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div style={{ background: "grey" }}>
        <Link to="/"> Home </Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
      </div>
    );
  }
}
