import React from "react";
import classes from "./Header.module.css";

import { FaSearch, FaShoppingCart } from "react-icons/fa";

function Header(props) {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.brandName}>
          <a href="/">
            <h1>T-Mart</h1>
          </a>
        </div>

        <div className={classes.headerIcons}>
          <span>
            <FaShoppingCart />
          </span>
          <span>
            <FaSearch />
          </span>
        </div>
      </header>
    </>
  );
}

export default Header;
