import React from "react";
import Skeleton from "react-loading-skeleton";
import bodeGif from "../../assets/images/bodeGif.gif";
import styles from "./Loading.module.scss";

export default function index() {
  return (
    <div>
      <div className={styles.loading}>
        <Skeleton height={20} width={`100%`} />
        <img src={bodeGif} alt="kjdshfud" />
      </div>
    </div>
  );
}
