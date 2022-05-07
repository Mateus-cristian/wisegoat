import React from "react";
import Skeleton from "react-loading-skeleton";
import bodeGif from "../../assets/images/bodeGif.gif";

export default function index() {
  return (
    <div>
      <Skeleton height={20} width={`100%`} />
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <img src={bodeGif} alt="kjdshfud" />
      </div>
    </div>
  );
}
