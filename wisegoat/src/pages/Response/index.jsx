import React, { useEffect, useState } from "react";
import styles from "./Response.module.scss";
import bode from "../../assets/images/bode.jpg";
import api from "../../services/api.js";
import LoadingGoat from "../../components/loading";
import { Link } from "react-router-dom";
import { HiRefresh } from "react-icons/hi";

export default function Response() {
  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      api
        .get("/advice")
        .then((response) => setQuote(response.data))
        .catch((err) => {
          console.error("ops! ocorreu um erro" + err);
        });
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading && <LoadingGoat />}
      {!loading && (
        <>
          <div className={styles.logo}>
            <Link to="/">
              <h2>wise</h2>
              <h1>Goat</h1>
            </Link>
          </div>
          <div className={styles.container}>
            <div className={styles.main}>
              <div className={styles.main__quote}>
                <p>{quote.slip?.advice}</p>
                <h3>- Goat</h3>
                <div className={styles.main__quote__refresh}>
                  <a href="/response">
                    <HiRefresh />
                    <span>Outro conselho</span>
                  </a>
                </div>
              </div>
              <img src={bode} alt="Bodezinho" />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
