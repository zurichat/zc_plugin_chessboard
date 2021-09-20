import { useParams } from "react-router-dom";

function Game() {

  let { game_id } = useParams();

  return (
    <h1>Game: {game_id}</h1>
  );
}

export default Game;
