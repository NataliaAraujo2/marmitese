import React from "react";
//CSS
import styles from "./Services.module.css";

import Button from "../Button/Button";
import { FaInfo } from "react-icons/fa";

const Services = ({ Title, word, subtitle, bg, way }) => {
  return (
    <div className={styles.services} style={{ backgroundImage: `url(${bg})` }}>
      <div className={styles.title}>
        <p>
          {Title}
          <span>{word}</span>
        </p>
      </div>
      <div className={styles.subtitle}>
        <p>{subtitle}</p>
      </div>
      <div className={styles.button}>
        <Button Icon={FaInfo} way={way} Text="Saiba Mais" />
      </div>
    </div>
  );
};

export default Services;
