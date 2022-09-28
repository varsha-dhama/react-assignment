import React from "react";
import classes from "./Header.module.css";

import { FaSearch, FaShoppingCart } from "react-icons/fa";

function Header(props) {
  return (
    <>
      <header className={classes.header}>
        <h1>T-Mart</h1>
        <a href="/">
          <FaShoppingCart fontSize={20} color="white"/>
        </a>
      </header>
    </>
  );
}

export default Header;
