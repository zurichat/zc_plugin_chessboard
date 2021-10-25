import React from "react";

import styles from "./nextturn.module.css";

const NextTurn = ({ color_to_play }) => {
  return (
    <div className={styles.nextTurn}>
      <h2 className={styles.nextTurnText}>
        {" "}
        {"It's"} &nbsp;{" "}
        <span className={styles.nextTurnTexting}>{color_to_play}</span> &nbsp;
        Turn To Play
      </h2>
    </div>
  );
};

export default NextTurn;
