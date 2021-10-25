import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router';
import { useParams } from 'react-router-dom';

// Import CSS for this page
import styles from './game.module.css';

// Import Adaptors
import { CentrifugeSetup, getGameData, unwatchGame, watchGame } from '../../adapters/game';
import { getLoggedInUserData } from '../../adapters/auth';

// Import Components
import Header from '../../components/Header';
import ChessBoard from '../../components/ChessBoard';
import SpectatorSideBar from '../../components/SpectatorSideBar';

// Exit & Forfeit Modals (lekandev)
import Forfeit from '../../components/Modals/ForfeitModal/Forfeit';
import Exit from '../../components/Modals/ExitModal/Exit';

// Styled Exit/Forfeit
import { ExitBtn } from '../../components/SpectatorSideBar/SpectatorSidebarStyle';

function Game() {
  const [gameData, setGameData] = useState(null);
  const gameDataRef = useRef(null);
  const [canCallCentrifuge, setcanCallCentrifuge] = useState(false);
  const [canCallWatchGame, setcanCallWatchGame] = useState(false);
  const { game_id } = useParams();
  const history = useHistory();

  // State for Modals (lekandev)
  const [isModalOpen, setmodalIsOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Handlers for Modals (lekandev)
  const handleForfeitModal = () => {
    setmodalIsOpen(true);
  };

  const handleExitModal = () => {
    setIsOpen(true);
  };

  // Why this? checkout - https://stackoverflow.com/questions/63224151/how-can-i-access-state-in-an-useeffect-without-re-firing-the-useeffect
  useEffect(() => {
    gameDataRef.current = gameData;
  });

  useEffect(() => {
    // Get game data
    getGameData(game_id).then((response) => {
      if (!response.data.success) {
        // TODO: Handle error with Toasts
        history.push('/');
        console.log('Unable to Get Game: ', response.data.message);
      } else {
        setGameData(response.data.data);
      }
    });

    setcanCallCentrifuge(true);
    setcanCallWatchGame(true);

    // If user is about to leave this game, unwatch - ComponentWillUnmount (Not the best right now, cause this is called for every user, instead of spectators only)
    return () => {
      if (
        gameDataRef.current.owner.user_id !== getLoggedInUserData().user_id &&
        gameDataRef.current.opponent?.user_id !== getLoggedInUserData().user_id
      ) {
        unwatchGame(game_id).then((response) => {
          if (!response.data.success) {
            // TODO: Handle error with Toasts
            console.log('Unable to unWatch Game: ', response.data.message);
          }
        });
      }
    };
  }, []);

  if (canCallCentrifuge && gameData) {
    CentrifugeSetup(game_id, (ctx) => {
      const websocket = ctx;
      switch (ctx.data.event) {
        case 'join_game':
          // completed - DO NOT EDIT!!
          setGameData({ ...gameData, opponent: websocket.data.player });
          break;

        case 'piece_moved':
          // completed - DO NOT EDIT!!
          gameData.moves.push(websocket.data.move);
          setGameData({ ...gameData, moves: gameData.moves });
          break;

        case 'spectator_joined_game':
          // completed - DO NOT EDIT!!
          gameData.spectators.push(websocket.data.spectator);
          setGameData({ ...gameData, spectators: gameData.spectators });
          break;

        case 'spectator_left_game': {
          // completed - DO NOT EDIT!!
          for (let i = gameData.spectators.length - 1; i >= 0; i--) {
            // Loop through spectators list and remove the spectator
            if (gameData.spectators[i].user_id === websocket.data.spectator[0].user_id) {
              gameData.spectators.splice(i, 1);
            }
          }
          setGameData({ ...gameData, spectators: gameData.spectators });
          break;
        }

        // NOT IN USE AGAIN !!!! _ GO and Beat @odizee / @emeka if you question it
        // case "end_game":
        //   break;

        case 'comments':
          // completed - DO NOT EDIT!!
          gameData.messages.push(websocket.data.comment);
          setGameData({ ...gameData, messages: gameData.messages });
          break;

        default:
          console.log('centrifuge: event listener not listened for', ctx?.data);
          break;
      }
    });
    setcanCallCentrifuge(false);
  }

  if (canCallWatchGame && gameData) {
    if (
      gameData.owner.user_id !== getLoggedInUserData().user_id &&
      gameData.opponent?.user_id !== getLoggedInUserData().user_id
    ) {
      // Call the Watch Game Adapter
      watchGame(game_id).then((response) => {
        if (!response.data.success) {
          // TODO: Handle error with Toasts
          console.log('Unable to Watch Game: ', response.data.message);
        }
      });
    }
    setcanCallWatchGame(false);
  }

  let BoardToRender = null;
  let SideBarToRender = null;

  // (lekandev)
  let ModalToRender = null;
  let ButtonToRender = null;

  // If GameData State has been set
  if (gameData !== null) {
    // If LoggedIn User is the owner of the Game
    if (gameData.owner?.user_id == getLoggedInUserData().user_id) {
      // Render the Chessboard with owner defaults
      BoardToRender = <ChessBoard type="owner" gameData={gameData} />;
      SideBarToRender = <SpectatorSideBar type="owner" gameData={gameData} />;

      // (lekandev)
      ButtonToRender = <ExitBtn onClick={handleExitModal}>Exit Game</ExitBtn>;
      ModalToRender = <Exit isOpen={isOpen} setIsOpen={setIsOpen} gameData={gameData} />;
      // If LoggedIn User is the opponent in the Game
    } else if (gameData.opponent?.user_id == getLoggedInUserData().user_id) {
      // Render the Chessboard with opponent defaults
      BoardToRender = <ChessBoard type="opponent" gameData={gameData} />;
      SideBarToRender = <SpectatorSideBar type="opponent" gameData={gameData} />;

      // (lekandev)
      ButtonToRender = <ExitBtn onClick={handleForfeitModal}>ForFeit Game</ExitBtn>;
      ModalToRender = (
        <Forfeit isModalOpen={isModalOpen} setmodalIsOpen={setmodalIsOpen} gameData={gameData} />
      );
    } else {
      // Render the ChessBoard with spectator type
      BoardToRender = <ChessBoard type="spectator" gameData={gameData} />;
      SideBarToRender = <SpectatorSideBar type="spectator" gameData={gameData} />;

      // (lekandev)
      // ButtonToRender = (
      //   <ExitBtn onClick={handleExitModal}>Forfeit Game</ExitBtn>
      // );
    }
  }

  return (
    <section className={styles['main-game']}>
      <div className={styles['main-chess']}>
        <Header gameData={gameData} />
        {BoardToRender}
        {/* Exit/Forfeit container (lekandev) */}
        <div className={styles['exit-button']}>
          {/* <Exit isOpen={isOpen} setIsOpen={setIsOpen} gameData={gameData} />
          <Forfeit
            isModalOpen={isModalOpen}
            setmodalIsOpen={setmodalIsOpen}
            gameData={gameData}
          /> */}

          {/* {type !== "spectator" && gameData.status === 0 && (
            <ExitBtn onClick={handleExitModal}>Exit Game</ExitBtn>
          )}

          {type !== "spectator" && gameData.status === 1 && (
            <ExitBtn onClick={handleForfeitModal}>Forfeit Game</ExitBtn>
          )} */}
          {ModalToRender}
          {ButtonToRender}
        </div>
      </div>
      {SideBarToRender}
    </section>
  );
}

export default Game;
