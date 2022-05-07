import React, { useEffect, useState } from "react";
import styles from "./Response.module.scss";
import bode from "../../assets/images/bode.jpg";
import api from "../../services/api.js";

export default function Response() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    api
      .get("/advice")
      .then((response) => setQuote(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <>
      <div className={styles.logo}>
        <h2>wise</h2>
        <h1>Goat</h1>
      </div>
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.main__quote}>
            <p>{quote.slip?.advice}</p>
            <h3>- Goat</h3>
          </div>
          <div className={styles.main__images}></div>
          <img src={bode} alt="Bodezinho" />
        </div>
      </div>
    </>
  );
}
