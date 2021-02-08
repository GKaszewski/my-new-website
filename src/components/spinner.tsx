import React from "react";
import styles from "./Spinner.module.css";

interface Props {
  open: boolean;
}

export default function Spinner(props: Props) {
  return (
    <div
      className={`${styles.loader} ${props.open ? styles.loader : "hidden"}`}
    >
      Loading...
    </div>
  );
}
