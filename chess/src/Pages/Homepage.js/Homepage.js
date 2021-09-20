import { useEffect, useState } from "react";
import MiniBoard from "../../components/MiniBoard/MiniBoard";
import "./Homepage.css";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import axios from "axios";
import { useUser } from "../../contexts/UserContext";

function Homepage() {
  // gamesData state
  const [gamesData, setGamesData] = useState([]);
  const { userData, loginUser } = useUser();

  // fetch games data and set the state to the response
  async function getGamesData() {
    const games = await axios.get("https://chess.zuri.chat/api/v1/game/all");
    setGamesData(games.data.data);
  }

  // call get gamesData function
  useEffect(() => {
    getGamesData();
    loginUser();
  }, []);

  const boards = [];

  for (let i = 0; i < 6; i++) {
    const game = gamesData[i];
    if (game && game.status !== 2) {
      boards.push(
        <div className="mini-one">
          <MiniBoard
            key={game._id}
            userPerson={userData}
            id={game._id}
            playerOne={game.owner?.user_name}
            playerTwo={game.opponent?.user_name}
          />
        </div>
      );
    } else {
      boards.push(
        <div className="mini-one">
          <MiniBoard key={i} userPerson={userData} />
        </div>
      );
    }
  }

  return (
    <div className="chesshome-container">
      <Header />
      <div className="chesshome-rules-holder">
        <Link to="/rules">
          <button className="chesshome-rules">Game Rules</button>
        </Link>
      </div>
      <div className="app__container">{userData.id && boards}</div>
    </div>
  );
}

export default Homepage;
