// Import CSS for this page
// import "./playername.css";

//import style-components
import { PlayerDetails, WaitingPlayer2Container } from "./PlayerNameStyle";

const PlayerName = ({ game_id, name, image_url, style }) => {
  if (!name) {
    return (
      <WaitingPlayer2Container className="waiting_player_2_container">
        <button className="waiting_player_2"> Waiting for player</button>
      </WaitingPlayer2Container>
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
