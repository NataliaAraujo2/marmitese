import { React, useState } from "react";
import { NavLink } from "react-router-dom";
//CSS
import styles from "./Navbar.module.css";
//Images
import logo from "../../images/logo.png";
//Components
import Button from "../Button/Button";
import MenuMobile from "../MenuMobile/MenuMobile";
//Icons
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  const showMenuMobile = () => setMenuIsVisible(!menuIsVisible);

  return (
    <>
      <nav className={styles.navbar}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          <img
            className={styles.brand}
            src={logo}
            alt="logo Marmite-se Alimentação Saudável"
          />
        </NavLink>

        <ul className={styles.links}>
          <li>
            <Button way="/" Text="Início" />
          </li>
          <li>
            <Button way="/menu" Text="Cardápio" />
          </li>
          <li>
            <Button way="/store" Text="Loja" />
          </li>
          <li>
            <Button way="/about" Text="Sobre" />
          </li>
          <li>
            <Button way="/contact" Text="Contato" />
          </li>
        </ul>
        <ul className={styles.user}>
          <li>
            <Button way="/login" Text="Entrar" />
          </li>
          <li>
            <Button way="/register" Text="Cadastro" />
          </li>
        </ul>
        <div className={styles.mobile}>
          <ul className={styles.mobile_user}>
            <li>
              <FaBars onClick={showMenuMobile} />
              {menuIsVisible && <MenuMobile active={setMenuIsVisible} />}
            </li>
            <li className={styles.mobile_user_text}>
              <Button way="/login" Text="Entrar" />
            </li>
            <li>
              <Button way="/register" Text="Cadastro" />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
