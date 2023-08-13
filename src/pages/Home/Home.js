import React from "react";
//CSS
import styles from "./Home.module.css";
//Images
import coffe from "../../images/cofeebreak.png";
import pockets from "../../images/marmita.png"
import desserts from "../../images/sobremesas.png";
import broths from "../../images/caldos-e-sopas.png";
import Services from "../../components/Services/Services";

const Home = () => {
  return (
    <div className={styles.home}>
      <Services Title="M" word="armitas" bg={pockets} />
      <Services Title="C" word="offe-Break" bg={coffe} />
      <Services Title="C" word="aldos e Sopas" bg={broths} />
      <Services Title="S" word="obremesas" bg={desserts} />
    </div>
  );
};

export default Home;
