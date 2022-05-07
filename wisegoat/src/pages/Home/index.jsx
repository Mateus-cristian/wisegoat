import React from "react";
import Bode from "../../assets/images/bodezinho.png";
import Button from "../../components/Button";
import styles from "./Home.module.scss";

export default function index() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.main__description}>
          <h2>Wise</h2>
          <h1>Goat</h1>
          <Button />
        </div>
        <div>
          <img src={Bode} alt="imagem de bode" />
        </div>
      </div>
    </div>
  );
}
