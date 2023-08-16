import React from "react";
import styles from './Button.module.css'
import { NavLink } from "react-router-dom";

const Button = ({  way, action, Text, Icon }) => {
  return (
    
    <NavLink to={way}>
    <div className= { styles.button} onClick={action}>
    <Icon />
    {Text}
    </div>
  </NavLink>
  );
};

export default Button;