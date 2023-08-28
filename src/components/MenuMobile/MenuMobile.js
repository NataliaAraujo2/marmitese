import React from "react";
//Icons
import {
  FaHome,
  FaInfo,
  FaShoppingBag,
  FaStore,
  FaTimes,
  FaUnlock,
  FaUserCog,
} from "react-icons/fa";
//Css

//components
import Button from "../Button/Button";
import { MdRestaurantMenu } from "react-icons/md";
import { GrContact } from "react-icons/gr";
import { Container, Content } from "./styles";
import { useAuthValue } from "../context/AuthContext";
import { useAuthentication } from "../../hooks/useAuthentication";

const MenuMobile = ({ active }) => {
  const closeMenu = () => {
    active(false);
  };
  const { user } = useAuthValue();
  const { logout } = useAuthentication();

  const handleClick =()=> {
    logout ()
    closeMenu()
  }

  return (
    <Container menumobile={active}>
      <FaTimes onClick={closeMenu} />
      {user && (
        <Content>
          <Button Icon={FaHome} way="/" Text="Início" action={closeMenu} />
          <Button
            Icon={MdRestaurantMenu}
            way="/menu"
            Text="Cardápio"
            action={closeMenu}
          />
          <Button Icon={FaStore} way="/store" Text="Loja" action={closeMenu} />
          <Button Icon={FaInfo} way="/about" Text="Sobre" action={closeMenu} />
          <Button
            Icon={FaShoppingBag}
            way="/my-orders"
            Text="Meus Pedidos"
            action={closeMenu}
          />
          <Button
            Icon={FaUserCog}
            way="/my-data"
            Text="Meus Dados"
            action={closeMenu}
          />
          <Button
            Icon={GrContact}
            way="/contact"
            Text="Contato"
            action={closeMenu}
          />
          <Button
            action={handleClick}
            way="/"
            Icon={FaUnlock}
            Text="Logout"
          ></Button>
        </Content>
      )}
      {!user && (
        <Content>
          <Button Icon={FaHome} way="/" Text="Início" action={closeMenu} />
          <Button
            Icon={MdRestaurantMenu}
            way="/menu"
            Text="Cardápio"
            action={closeMenu}
          />
          <Button Icon={FaStore} way="/store" Text="Loja" action={closeMenu} />
          <Button Icon={FaInfo} way="/about" Text="Sobre" action={closeMenu} />
          <Button
            Icon={GrContact}
            way="/contact"
            Text="Contato"
            action={closeMenu}
          />
        </Content>
      )}
    </Container>
  );
};

export default MenuMobile;
