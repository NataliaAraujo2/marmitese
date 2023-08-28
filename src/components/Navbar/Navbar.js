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
import {
  FaBars,
  FaHome,
  FaInfo,
  FaLock,
  FaPen,
  FaShoppingBag,  
  FaStore,
  FaUnlock,
  FaUserCog,
} from "react-icons/fa";
import { GrContact } from "react-icons/gr";
import { MdRestaurantMenu } from "react-icons/md";
//hook
import { useAuthentication } from "../../hooks/useAuthentication";
//context
import { useAuthValue } from "../context/AuthContext";

const Navbar = () => {
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  const showMenuMobile = () => setMenuIsVisible(!menuIsVisible);

  const { user } = useAuthValue();
  const { logout } = useAuthentication();

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
            <Button Icon={FaHome} way="/" Text="Início" />
          </li>
          <li>
            <Button Icon={MdRestaurantMenu} way="/menu" Text="Cardápio" />
          </li>
          <li>
            <Button Icon={FaStore} way="/store" Text="Loja" />
          </li>
          <li>
            <Button Icon={FaInfo} way="/about" Text="Sobre" />
          </li>
          {user && (
            <>
              <li>
                <Button Icon={FaShoppingBag} way="/my-orders" Text="Meus Pedidos" />
              </li>
              <li>
                <Button Icon={FaUserCog} way="/my-data" Text="Meus Dados" />
              </li>
            </>
          )}
          <li>
            <Button Icon={GrContact} way="/contact" Text="Contato" />
          </li>
        </ul>
        {!user && (
          <ul className={styles.user}>
            <li>
              <Button Icon={FaLock} way="/login" Text="Entrar" />
            </li>
            <li>
              <Button Icon={FaPen} way="/register" Text="Cadastro" />
            </li>
          </ul>
        )}
        {user && (
          <ul className={styles.user}>
            <li>
              <Button Icon={FaUnlock} action={logout} Text="Sair" />
            </li>
          </ul>
        )}
        <div className={styles.mobile}>
          <ul className={styles.mobile_user}>
            <li>
              <FaBars onClick={showMenuMobile} />
              {menuIsVisible && <MenuMobile active={setMenuIsVisible} />}
            </li>
            <li className={styles.mobile_user_text}>
              <Button Icon={FaLock} way="/login" Text="Entrar" />
            </li>
            <li>
              <Button Icon={FaPen} way="/register" Text="Cadastro" />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
