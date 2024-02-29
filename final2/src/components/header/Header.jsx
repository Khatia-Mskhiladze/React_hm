import React from "react";
import logo from "./logo.png";
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <img className={styles.logo} src={logo} alt="My Logo" />
      <h3 className={styles.headerText}>
        Check out our NEW movie website - the latest version of the RATING
      </h3>
    </div>
  );
};

export default Header;
