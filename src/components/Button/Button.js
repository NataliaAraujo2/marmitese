import React from "react";
import styles from './Button.module.css'
import { NavLink } from "react-router-dom";

const Button = ({ action, way, Text }) => {
  return (
    
      <NavLink to={way} onClick={action}  className={styles.button}>
    
        {Text}
    
      </NavLink>
   
  );
};

export default Button;