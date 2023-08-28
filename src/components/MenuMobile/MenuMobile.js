import React from "react";
//Icons
import { FaRegArrowAltCircleRight, FaRegTimesCircle } from "react-icons/fa";
//CSS
import styles from "./MenuMobile.module.css";
//components
import Button from "../Button/Button";
import { useAuthValue } from "../context/AuthContext";
import { useAuthentication } from "../../hooks/useAuthentication";


const MenuMobile = ({ active }) => {
  
  const closeMenu = () => {
    active(false);
  };
  const { user } = useAuthValue();
  const { logout } = useAuthentication();
  return (
    <div className={styles.menumobile} menuIsVisible={active}>
      <FaRegTimesCircle onClick={closeMenu} />
      <nav>
          <ul className={styles.links}>
          <li>
            <Button Icon={FaRegArrowAltCircleRight} way="/" action={closeMenu} Text="Início" />
          </li>
          <li>
            <Button Icon={FaRegArrowAltCircleRight}  way="/menu" action={closeMenu} Text="Cardápio" />
          </li>
          <li>
            <Button Icon={FaRegArrowAltCircleRight}  way="/store" action={closeMenu} Text="Loja" />
          </li>
          <li>
            <Button Icon={FaRegArrowAltCircleRight}  way="/about" action={closeMenu} Text="Sobre" />
          </li>
          {user && (
            <>
              <li>
              <Button Icon={FaRegArrowAltCircleRight} way="/about" action={closeMenu} Text="Sobre" />
              </li>
              <li>
              <Button Icon={FaRegArrowAltCircleRight} way="/about" action={closeMenu} Text="Sobre" />
              </li>
            </>
          )}
          <li>
            <Button way="/contact" action={closeMenu}  Text="Contato" />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MenuMobile;
