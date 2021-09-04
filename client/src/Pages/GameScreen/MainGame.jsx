import ChessBoard from './../../components/ChessBoard/ChessBoard';
import SpectatorSideBar from './../../components/SpectatorSideBar/SpectatorSideBar';
import'./MainGame.css';
import { BrowserRouter } from "react-router-dom";


const MainGame = () => {
    return (<section className="main-game">

        <ChessBoard />
        <BrowserRouter>
        <SpectatorSideBar/>        
        </BrowserRouter>
    </section> );
}
 
export default MainGame;