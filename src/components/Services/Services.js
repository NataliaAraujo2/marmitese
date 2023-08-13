import React, { useState } from "react";
//CSS
import styles from "./Services.module.css";

const Services = ({ Title, word, bg }) => {
  return (
    <div className={styles.services} style={{ backgroundImage: `url(${bg})` }}>
      <p>
        {Title}
        <span>{word}</span>
      </p>
    </div>
  );
};

export default Services;
