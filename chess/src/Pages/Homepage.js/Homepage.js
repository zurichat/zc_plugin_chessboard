import { useEffect, useState } from "react";
import MiniBoard from "../../components/MiniBoard/MiniBoard";
import "./Homepage.css";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import axios from "axios";

function Homepage() {
  // gamesData state
  const [gamesData, setGamesData] = useState([]);
  const [user, setUser] = useState({});

  // fetch games data and set the state to the response
  async function getGamesData() {
    const games = await axios.get("https://chess.zuri.chat/api/v1/game/all");
    setGamesData(games.data.data);
  }

  const loginUser = async () => {
    const response = await axios.post("https://api.zuri.chat/auth/login", {
      email: "pid@oxy.com",
      password: "pidoxy.com",
    });
    console.log(response.data.data.user);
    setUser(response.data.data.user);
  };

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
            user={user}
            id={game._id}
            playerOne={game.owner?.user_name}
            playerTwo={game.opponent?.user_name}
          />
        </div>
      );
    } else {
      boards.push(
        <div className="mini-one">
          <MiniBoard key={i} user={user} />
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
      <div className="app__container">{user.id && boards}</div>
    </div>
  );
}

export default Homepage;
