import React, { useState } from "react";
//CSS
import styles from "./Services.module.css";
import { NavLink } from "react-router-dom";

const Services = ({ Title, word, subtitle, bg }) => {
  return (
    <div
      className={styles.services}
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className={styles.title}>
        <p>
          {Title}
          <span>{word}</span>
        </p>
      </div>
      <div className={styles.subtitle}>
        <p>{subtitle}</p>
      </div>

        <button>Saiba mais</button>
      
    </div>
  );
};

export default Services;
