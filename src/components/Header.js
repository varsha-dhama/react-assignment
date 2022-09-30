import React from "react";
import classes from "./Header.module.css";
import { Route, Link } from "react-router-dom";
import { FaSearch, FaShoppingCart } from "react-icons/fa";

function Header(props) {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.brandName}>
          <Link to="/">
            <h1>T-Mart</h1>
          </Link>
        </div>

        <div className={classes.headerIcons}>
          <Link to="/">
            <span>
              <FaShoppingCart />
            </span>
          </Link>
          <Link to="/">
            <span>
              <FaSearch />
            </span>
          </Link>
        </div>
      </header>
    </>
  );
}

export default Header;
