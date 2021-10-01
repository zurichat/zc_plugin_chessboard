// Import CSS for this page
// import "./playername.css";

// Import Adapters for this component
import { startGameWithBot } from "../../adapters/game";

//import style-components
import { PlayerDetails, WaitingPlayer2Container } from "./PlayerNameStyle";

const PlayerName = ({ game_id, name, image_url, style }) => {
  const SetBotAsPlayer2 = () => {
    startGameWithBot(game_id).then((response) => {
      if (!response.data.success) {
        // TODO: Handle error with Toasts
        console.log("Unable to Join Game As Bot: ", response.data.message);
      }
    });
  };

  if (!name) {
    return (
      <>
        <WaitingPlayer2Container className="waiting_player_2_container">
          <button className="waiting_player_2"> Waiting for player</button>
        </WaitingPlayer2Container>

        <button
          style={{
            padding: "1rem 5rem",
            border: "none",
            color: "white",
            background: "#25364b",
          }}
          onClick={() => SetBotAsPlayer2()}
        >
          Play Bot
        </button>
      </>
    );
  }

  return (
    <PlayerDetails className="player__details" style={style}>
      <img src={image_url} alt="" />
      <p>{name}</p>
    </PlayerDetails>
  );
};

export default PlayerName;
