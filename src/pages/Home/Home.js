import React, { useState } from "react";
//CSS
import styles from "./Home.module.css";
import Services from "../../components/Services/Services";
import pocket from "../../images/Pockets/marmita2.jpg";
import coffee from "../../images/Coffee/coffe-break.png";
import broths from "../../images/Broths/caldos.jpg";
import desserts from "../../images/Desserts/sobremesas2.png";

const Home = () => {
  return (
    <div className={styles.home}>
      <Services
        Title="M"
        word="armitas"
        bg={pocket}
        subtitle="Apresentando Sabores Saudáveis: A Essência da Nutrição em Cada Mordida"
        way="/pocket"
      />
      <hr />
      <Services
        Title="C"
        word="offee-Break"
        bg={coffee}
        subtitle="Elevando o Seu Evento com o Nosso Serviço de Coffee Break Empresarial "
        way="/coffee"
      />
      <hr />
      <Services
        Title="C"
        word="aldos"
        bg={broths}
        subtitle="Aqueça o Momento com os Nossos Caldos e Sopas Especiais! "
        way="/broths"
      />
      <hr />
      <Services
        Title="S"
        word="obremesas"
        bg={desserts}
        subtitle="Deleite-se com as Nossas Sobremesas Irresistíveis! "
        way="/desserts"
      />
    </div>
  );
};

export default Home;
