import React from "react";
//CSS
import styles from "./Footer.module.css";
//Icons
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.contact}>
        <ul>
          <li>
          <FaWhatsapp />
          </li>
          <li>
          <MdOutlineEmail />
          </li>
        </ul>
       
      </div>
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
      <div className={styles.copyright}>
      <p >
         &copy;2023 Kay
        </p>
      </div>
     
    </footer>
  );
};

export default Footer;
