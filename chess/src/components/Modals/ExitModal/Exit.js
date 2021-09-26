import React, { useState, useEffect } from "react";
import Logo from "../../../assets/modal/profile_img.svg";
import Close from "../../../assets/modal/close.svg";
import "./Exit.css";
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
        //....
      }
    });
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="exit__container">
      <div className="exit__modal">
        <button className="btn-exit-modal-close" onClick={close}>
          <img className="" src={Close} alt="Close" />
        </button>

        <article className="exit__header">
          <div className="exit__profile">
            <img src={Logo} alt="profile" />
          </div>
        </article>

        <section className="exit__content">
          <p className="exit__text">
            You are probably tired of waiting for player 2, are you sure you
            want to leave the game?
          </p>
        </section>

        <footer className="exit__footer">
          <button className="exit__button exit__button--yes" onClick={exitGame}>
            Yes
          </button>
          <button className=" exit__button exit__button--no" onClick={close}>
            No
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Exit;
