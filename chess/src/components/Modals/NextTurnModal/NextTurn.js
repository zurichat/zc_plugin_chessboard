import React from "react";

import styles from "./nextturn.module.css";

const NextTurn = (props, { gameData }) => {
  return (
    <div className={styles.nextTurn}>
      <h2 className={styles.nextTurnText}>Your Turn To Play</h2>
      <h3 className={styles.nextTurnTexting}> {props.name}</h3>
    </div>
  );
};

export default NextTurn;
