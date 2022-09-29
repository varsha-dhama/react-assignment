import React from "react";
import classes from "./Footer.module.css";
import { FaFacebook, FaTwitter } from "react-icons/fa";

function Footer(props) {
  return (
    <>
      <footer className={classes.footer}>
        <span>Copyrights ⓒ 2022</span>{" "}
        <FaFacebook className={classes.footerIcons} />{" "}
        <FaTwitter className={classes.footerIcons} />
      </footer>
    </>
  );
}

export default Footer;
