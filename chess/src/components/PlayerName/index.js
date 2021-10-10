// Import CSS for this page
// import "./playername.css";
import { useState } from "react";

//import style-components
import { PlayerDetails, WaitingPlayer2Container } from "./PlayerNameStyle";
import InviteUser from "./../Modals/InviteUserModal/InviteUser";

const PlayerName = ({ name, image_url, style, gameData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInviteModal = () => {
    setIsModalOpen(true);
  };
  if (!name) {
    return (
      <>
        <WaitingPlayer2Container
          className="waiting_player_2_container"
          onClick={handleInviteModal}
        >
          <button className="waiting_player_2"> Waiting for player</button>
        </WaitingPlayer2Container>

        <InviteUser
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          gameData={gameData}
        />
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
