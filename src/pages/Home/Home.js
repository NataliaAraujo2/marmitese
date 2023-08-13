import React from "react";
//CSS
import styles from "./Home.module.css";
import Pocket from "../../components/Services/Service/Pocket";
import Coffee from "../../components/Services/Service/Coffee";
import Broths from "../../components/Services/Service/Broths";
import Desserts from "../../components/Services/Service/Desserts";



const Home = () => {
  return (
    <div className={styles.home}>
      <Pocket />
      <Coffee />
      <Broths />
      <Desserts />
    </div>
  );
};

export default Home;
