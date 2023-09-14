import React from "react";
import styles from "../styles/emptyState.module.css";
const EmptyState = ({ message }) => {
  return <div className={styles.empty__state__container}>{message}</div>;
};

export default EmptyState;
