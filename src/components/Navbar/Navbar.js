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
import { GrContact, GrDocumentConfig } from "react-icons/gr";
import { MdRestaurantMenu } from "react-icons/md";
//hook
import { useAuthentication } from "../../hooks/useAuthentication";
//context
import { useAuthValue } from "../context/AuthContext";

const Navbar = () => {
  const [menuMobile, setMenuMobile] = useState(false);
  const showMenuMobile = () => setMenuMobile(!menuMobile);

  const { user } = useAuthValue();
  const { logout } = useAuthentication();

  return (
    <div className={styles.navbar}>
      {user && (
        <>
          <div className={styles.mobile}>
            <FaBars className={styles.faBars} onClick={showMenuMobile} />
            {menuMobile && <MenuMobile active={setMenuMobile} />}
          </div>
          <div className={styles.brand}>
            <img src={logo} alt="logo" className={styles.brand} />
          </div>

          <div className={styles.links}>
            <ul>
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

              <li>
                <Button Icon={GrContact} way="/contact" Text="Contato" />
              </li>
            </ul>
          </div>
          <div className={styles.links}>
            <div className={styles.link_list}>
              <li>
                <Button Icon={FaUserCog} way="/" Text="Meus Dados" />
              </li>
              <li>
                <Button Icon={FaShoppingBag} way="/" Text="Meus Pedidos" />
              </li>
              <li>
                <Button
                  action={logout}
                  way="/"
                  Icon={FaUnlock}
                  Text="Logout"
                  className={styles.siderbaritem}
                ></Button>
              </li>
            </div>
          </div>
        </>
      )}

      {!user && (
        <>
          <div className={styles.mobile}>
            <FaBars className={styles.faBars} onClick={showMenuMobile} />
            {menuMobile && <MenuMobile active={setMenuMobile} />}
          </div>
          <div>
            <img src={logo} alt="logo" className={styles.brand} />
          </div>

          <div className={styles.links}>
            <ul>
              <Button
                Icon={GrDocumentConfig}
                way="/admin/products"
                Text="Contato"
              />
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
            </ul>
          </div>

          <div className={styles.link_list}>
            <li>
              <Button way="/login" Icon={FaLock} Text="Login"></Button>
            </li>
            <li>
              <Button way="/register" Icon={FaPen} Text="Cadastre-se"></Button>
            </li>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
