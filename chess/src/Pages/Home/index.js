import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Import CSS for this page
import "./home.css";

// Import Adaptors
import { getAllGames } from "../../adapters/home";

// Import Components
import Header from "../../components/Header";
import MiniBoard from "../../components/MiniBoard";

function Homepage() {
  // Set Games State
  const [games, setGames] = useState([]);

  useEffect(() => {
    getAllGames().then((response) => {
      if (!response.data.success) {
        // TODO: Handle error with Toasts
        console.log("Unable to Get All Games: ", response.data.message);
      } else {
        // Allow us to have empty DB
        if (response.data.data !== null) {
          setGames(response.data.data);
        }
      }
    });
  }, []);

  // Calculate Boards to render
  const boards = [];
  for (let i = 0; i < 6; i++) {
    const game = games[i];
    if (game && game.status !== 2) {
      boards.push(
        <div className="mini-one" key={game._id}>
          <MiniBoard
            key={game._id}
            game_id={game._id}
            playerOne={game.owner}
            playerTwo={game.opponent}
          />
        </div>
      );
    } else {
      boards.push(
        <div className="mini-one" key={i}>
          <MiniBoard key={i} />
        </div>
      );
    }
  }

  return (
    <>
      <div className="chesshome-container">
        <Header />
        <div className="chesshome-rules-holder">
          <div className="chesshome-rules">
            <Link to="/rules">
              <button className="btn-chesshome-rules">Game Rules</button>
            </Link>
          </div>
        </div>
        <div className="app__container">{boards}</div>
      </div>
    </>
  );
}

export default Homepage;
