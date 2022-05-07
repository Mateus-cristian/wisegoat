import React from "react";
import styles from "./Button.module.scss";
import { useNavigate } from "react-router-dom";

export default function Button() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/response");
  }

  return (
    <button onClick={handleClick} className={styles.button}>
      Pedir conselho
    </button>
  );
}
