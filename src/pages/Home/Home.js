import React, { useState } from "react";
//CSS
import styles from "./Home.module.css";
import Services from "../../components/Services/Services";
import pocket from "../../images/marmita2.jpg";
import coffee from "../../images/coffe-break.png";
import broths from "../../images/caldos.jpg";
import desserts from "../../images/sobremesas2.png";


const Home = () => {
  return (
    <div className={styles.home}>
        <Services Title="M" word="armitas" bg={pocket} subtitle="Apresentando Sabores Saudáveis: A Essência da Nutrição em Cada Mordida" />
        <hr/>
        <Services Title="C" word="offe-Break" bg={coffee} subtitle="Apresentando Sabores Saudáveis: A Essência da Nutrição em Cada Mordida"/>
        <hr />
        <Services Title="C" word="aldos e Sopas" bg={broths} subtitle="Apresentando Sabores Saudáveis: A Essência da Nutrição em Cada Mordida"/>
        <hr />
        <Services Title="S" word="obremesas" bg={desserts} subtitle="Apresentando Sabores Saudáveis: A Essência da Nutrição em Cada Mordida"/>
    </div>
  );
};

export default Home;
