import React from "react";
//Icons
import { FaRegTimesCircle } from "react-icons/fa";
//CSS
import styles from "./MenuMobile.module.css";
//components
import Button from "../Button/Button";


const MenuMobile = ({ active }) => {
  
  const closeMenu = () => {
    active(false);
  };

  return (
    <div className={styles.menumobile} menuIsVisible={active}>
      <FaRegTimesCircle onClick={closeMenu} />
      <nav>
          <ul className={styles.links}>
          <li>
            <Button way="/" action={closeMenu} Text="Início" />
          </li>
          <li>
            <Button way="/menu" action={closeMenu} Text="Cardápio" />
          </li>
          <li>
            <Button way="/store" action={closeMenu} Text="Loja" />
          </li>
          <li>
            <Button way="/about" action={closeMenu} Text="Sobre" />
          </li>
          <li>
            <Button way="/contact" action={closeMenu}  Text="Contato" />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MenuMobile;
