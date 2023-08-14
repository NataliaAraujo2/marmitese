import React from "react";
//CSS
import styles from "./Footer.module.css";
//Icons
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <ul>
          <li>
            <a
              href="https://www.instagram.com/marmite__se/"
              rel="noreferrer"
              target="_blank"
            >
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="./" rel="noreferrer" target="_blank">
              <FaFacebook />
            </a>
          </li>
          <li>
            <a href="./" rel="noreferrer" target="_blank">
              <FaLinkedin />
            </a>
          </li>
        </ul>
      </div>
      <div>
        <p className={styles.copyright}>
          <span>Kay &copy; 2023</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
