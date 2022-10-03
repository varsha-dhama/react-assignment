import React from "react";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaArrowLeft } from "react-icons/fa";

function Header(props) {
  return (
    <>
      <header className={classes.header}>
        <div className={`${classes.headerIcons} ${classes.backButton}`}>
          {props?.pathname !== "/" && (
            <Link to="/">
              <span>
                <FaArrowLeft />
              </span>
            </Link>
          )}
        </div>
        <div className={classes.brandName}>
          <Link to="/">
            <span>T-Mart</span>
          </Link>
        </div>

        <nav className={classes.headerIcons}>
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
        </nav>
      </header>
    </>
  );
}

export default Header;
