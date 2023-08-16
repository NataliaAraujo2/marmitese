import React from "react";
//CSS
import styles from "./Footer.module.css";
//Icons
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import Button from "../Button/Button";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.contact}>
        <ul>
          <li>
            <p>CONTATO</p>
          </li>
          <li>
            <Button way="/contact" Text="WhatsAPP" Icon={FaWhatsapp} />
          </li>
          <li>
            <Button way="/contact" Text="Email" Icon={MdOutlineEmail} />
          </li>
        </ul>
        <ul className={styles.links}>
          <li>
            <Button way="/contact" Icon={FaFacebook} />
          </li>
          <li>
            <Button way="/contact" Icon={FaInstagram} />
          </li>
          <li>
            <Button way="/contact" Icon={FaLinkedin} />
          </li>
        </ul>
      </div>
     <div className={styles.copyright}>
      <p>&copy;2023 Kay</p>
     </div>
    </footer>
  );
};

export default Footer;
