// Import CSS for this page
// import "./playername.css";

// Import Assets
import Avatar from "../../assets/playername/user.png";

//import style-components
import { PlayerDetails, WaitingPlayer2Container, } from "./PlayerNameStyle";

const PlayerName = (props) => {
  if (!props.name) {
    return (
      <WaitingPlayer2Container className="waiting_player_2_container">
        <button className="waiting_player_2"> Waiting for player</button>
      </WaitingPlayer2Container>
    );
  }

  return (
    <PlayerDetails className="player__details" style={props.style}>
      <img src={props.image_url} alt="" />
      <p>{props.name}</p>
    </PlayerDetails>
  );
};

export default PlayerName;
