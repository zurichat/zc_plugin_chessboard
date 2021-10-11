import React, { useState, useEffect } from "react";
import Logo from "../../../assets/modal/profile_img.svg";
import Close from "../../../assets/modal/close.svg";
import styles from "./exit.module.css";
import { useHistory } from "react-router-dom";
import { UpdateGameWinner } from "../../../adapters/chessboard";

const Exit = ({ isOpen, setIsOpen, gameData }) => {
  const history = useHistory();
  const [gameId, setGameId] = useState(gameId);
  const close = () => setIsOpen(false);

  useEffect(() => {
    setGameId(gameData._id);
  }, []);

  const exitGame = async () => {
    UpdateGameWinner(gameId, gameData.owner.user_id).then((response) => {
      if (response.data.success) {
        history.push("/");
      } else {
        // TODO: Handle error with Toasts
        console.log("Unable to exit Game: ", response.data.message);
      }
    });
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.exit__container}>
      <div className={styles.exit__modal}>
        <button className={styles["btn-exit-modal-close"]} onClick={close}>
          <img className="" src={Close} alt="Close" />
        </button>

        <article className={styles.exit__header}>
          <div className={styles.exit__profile}>
            <img src={Logo} alt="profile" />
          </div>
        </article>

        <section className={styles.exit__content}>
          <p className={styles.exit__text}>
            You are probably tired of waiting for player 2, are you sure you
            want to leave the game?
          </p>
        </section>

        <footer className={styles.exit__footer}>
          <button
            className={`${styles.exit__button} ${styles.exit__button__yes}`}
            onClick={exitGame}
          >
            Yes
          </button>
          <button
            className={`${styles.exit__button} ${styles.exit__button__no}`}
            onClick={close}
          >
            No
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Exit;
