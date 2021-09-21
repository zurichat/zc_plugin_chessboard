import { useEffect, useState } from "react";
import MiniBoard from "../../components/MiniBoard/MiniBoard";
import "./Homepage.css";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import axios from "axios";
import { BACKEND_DOMAIN } from "../../config";
//import { GetUserInfo } from "@zuri/zuri-control";

function Homepage() {
  // gamesData state
  const [gamesData, setGamesData] = useState([]);

  // fetch games data and set the state to the response
  async function getGamesData() {
    const games = await axios.get(`${BACKEND_DOMAIN}/api/v1/game/all`);
    setGamesData(games.data.data);
    console.log(games.data);
  }

  // call get gamesData function
  useEffect(async () => {
    //console.log(GetUserInfo());
    await getGamesData();
  }, []);

  // console.log(gamesData);
  const boards = [];

  for (let i = 0; i < 6; i++) {
    const game = gamesData[i];
    if (game && game.status !== 2) {
      boards.push(
        <div className="mini-one">
          <MiniBoard
            key={game._id}
            id={game._id}
            playerOne={game.owner?.user_name}
            playerTwo={game.opponent?.user_name}
          />
        </div>
      );
    } else {
      boards.push(
        <div className="mini-one">
          <MiniBoard key={i} />
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
      <div className="app__container">{boards}</div>
    </div>
  );
}

export default Homepage;
