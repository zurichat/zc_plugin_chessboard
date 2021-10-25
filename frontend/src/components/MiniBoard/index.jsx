/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

// Import CSS for this page
import styles from './miniboard.module.css';

// Import Assets
import MiniBoardImage from '../../assets/miniboard/mini-board.svg';

import { createGame, joinGame } from '../../adapters/miniboard';
import { getLoggedInUserData } from '../../adapters/auth';

function MiniBoard({ playerOne, playerTwo, game_id }) {
  const history = useHistory();

  const HandleCreateGame = () => {
    createGame().then((response) => {
      if (response.data.success) {
        const game_id = response.data.data.object_id;
        history.push(`/game/${game_id}`);
      } else {
        // TODO: Handle error with Toasts
        console.log('Unable to Create Game: ', response.data.message);
      }
    });
  };

  const HandleJoinGame = (game_id) => {
    joinGame(game_id).then((response) => {
      if (response.data.success) {
        const { game_id } = response.data.data;
        history.push(`/game/${game_id}`);
      } else {
        // TODO: Handle error with Toasts
        console.log('Unable to Join Game: ', response.data.message);
      }
    });
  };

  return (
    <div className={styles['mini-board']}>
      <div className={`${styles['mini-asideBar']} ${styles['mini-topBar']}`}>
        {playerOne ? (
          <div className={styles['mini-playerProfile']}>
            <div
              className={styles['mini-profile-image']}
              style={{
                background: `url(${playerOne.image_url})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
              }}
            />
            <div className={styles['mini-profile-image-bg']} />
            <p className={styles['mini-profile-name']}>Player 1: @{playerOne.user_name}</p>
          </div>
        ) : (
          <button type="button" className={styles['join-button']} onClick={HandleCreateGame}>
            Join as Player 1
          </button>
        )}
      </div>

      {game_id && playerOne ? (
        <Link to={`/game/${game_id}`}>
          <img src={MiniBoardImage} alt={`game-board-${game_id}`} />
        </Link>
      ) : (
        <img src={MiniBoardImage} alt="game-board" />
      )}

      <div className={`${styles['mini-asideBar']} ${styles['mini-bottomBar']}`}>
        {playerTwo && (
          <div className={styles['mini-playerProfile']}>
            <div
              className={styles['mini-profile-image']}
              style={{
                background: `url(${playerTwo.image_url})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
              }}
            />
            <div className={styles['mini-profile-image-bg']} />
            <p className={styles['mini-profile-name']}>Player 2: @{playerTwo.user_name}</p>
          </div>
        )}

        {playerOne && !playerTwo && getLoggedInUserData().user_id !== playerOne.user_id && (
          <button
            type="button"
            className={`${styles['join-button']} ${styles['bottom-button']}`}
            onClick={() => HandleJoinGame(game_id)}
          >
            Join as Player 2
          </button>
        )}

        {playerOne && !playerTwo && getLoggedInUserData().user_id === playerOne.user_id && (
          <button type="button" className={`${styles['join-button']} ${styles['bottom-button']}`}>
            Waiting for Player 2
          </button>
        )}
      </div>
    </div>
  );
}

export default MiniBoard;
