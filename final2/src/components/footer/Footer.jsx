import React from "react";
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <h4>© 2023 PG. All Rights Reserved</h4>
      <div className={styles.footer_icons}>
        <a href="https://www.facebook.com/imdb" target="_blank" rel="noopener noreferrer">
          <i id={styles.facebook} className="fa-brands fa-facebook"></i>
        </a>
        <a href="https://twitter.com/imdb"target="_blank" rel="noopener noreferrer">
          <i id={styles.twitter} className="fa-brands fa-twitter"></i>
        </a>
        <a href="https://www.instagram.com/imdb/"target="_blank" rel="noopener noreferrer">
          <i id={styles.insta}
          className="fa-brands fa-instagram"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
