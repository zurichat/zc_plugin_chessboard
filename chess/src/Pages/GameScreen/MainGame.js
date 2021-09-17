import Chessboard from "../../components/ChessBoard/ChessBoard";
import SpectatorSideBar from "../../components/SpectatorSideBar/SpectatorSideBar.js";
import "./MainGame.css";
import Header from "../../components/Header/Header.js";
import { BrowserRouter } from "react-router-dom";

const MainGame = () => {
  return (
    <section className="main-game">
      <div className="main-chess">
        <Header />
        <Chessboard type="spectator" />
      </div>

      <BrowserRouter>
        <SpectatorSideBar />
      </BrowserRouter>
    </section>
  );
};

export default MainGame;
