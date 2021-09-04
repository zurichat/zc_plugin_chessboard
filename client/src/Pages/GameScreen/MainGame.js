import ChessBoard from '../../components/ChessBoard/ChessBoard';
import SpectatorSideBar from '../../components/SpectatorSideBar/SpectatorSideBar.js'
import'./MainGame.css';
import { BrowserRouter } from "react-router-dom";


const MainGame = () => {
    return (<section className="main-game">

        <ChessBoard />
        <SpectatorSideBar/>        
    </section> );
}
 
export default MainGame;