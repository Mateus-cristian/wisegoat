import React from "react";
import styles from "./Response.module.scss";

export default function Response() {
  return (
    <>
      <div className={styles.logo}>
        <h2>wise</h2>
        <h1>Goat</h1>
      </div>
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.main__quote}>
            <p>"Its always seems impossible,until it's done"</p>
            <h3>- Goat</h3>
          </div>
          <div className={styles.main__images}></div>
          <img src="http://placegoat.com/200/200" alt="Bodezinho" />
        </div>
      </div>
    </>
  );
}
