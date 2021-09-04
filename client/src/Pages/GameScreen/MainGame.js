import ChessBoard from "../../components/ChessBoard/ChessBoard";
import SpectatorSideBar from "../../components/SpectatorSideBar/SpectatorSideBar.js";
import "./MainGame.css";

const MainGame = () => {
    return (
        <section className="main-game">
            <ChessBoard />
            <SpectatorSideBar />
        </section>
    );
};

export default MainGame;
