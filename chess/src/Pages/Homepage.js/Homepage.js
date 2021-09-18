import { useEffect, useState } from "react";
import MiniBoard from "../../components/MiniBoard/MiniBoard";
import "./Homepage.css";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import axios from "axios";

function Homepage() {
  // gamesData state
  const [gamesData, setGamesData] = useState([]);

  // fetch games data and set the state to the response
  async function getGamesData() {
    const games = await axios.get("https://chess.zuri.chat/api/v1/game/all");
    setGamesData(games.data.data);
    console.log(games.data.data);
  }
  // call get gamesData function
  useEffect(() => {
    getGamesData();
  }, []);

  return (
    <div className="chesshome-container">
      <Header />
      <div className="chesshome-rules-holder">
        <Link to="/rules">
          <button className="chesshome-rules">Game Rules</button>
        </Link>
      </div>
      <div className="app__container">
        {/*slice gamesDat to get only six games then map through to produce a mini-board for each game */}
        {gamesData.slice(0, 6).map((game) => (
          <div className="mini-one">
            <MiniBoard
              id={game._id}
              playerOne={game.owner.username}
              playerTwo={game.opponent?.username}
            />
          </div>
        ))}

        {/* <div className="mini-one">
          <MiniBoard
            id="234"
            playerOne="Emmie4sure"
            playerTwo="techlead"
          />
        </div>
        <div className="mini-two">
          <MiniBoard
            id="234"
            playerOne="simideletaiwo"
            playerTwo="techyNkem"

          />
        </div>
        <div className="mini-three">
          <MiniBoard
            id="234"
            playerOne="whynotdoris"
            playerTwo="trustieee"

          />
        </div>
        <div className="mini-four">
          <MiniBoard
            id="234"
            playerOne="dejavu"
            playerTwo=""

          />
        </div>
        <div className="mini-five">
          <MiniBoard
            id="234"
            playerOne="pgirl"
            playerTwo=""

          />
        </div>
        <div className="mini-six">
          <MiniBoard
            id="234"
            playerOne=""
            playerTwo=""

          />
        </div> */}
      </div>
    </div>
  );
}

export default Homepage;
