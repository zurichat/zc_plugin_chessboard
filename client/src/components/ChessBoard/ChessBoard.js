import './ChessBoard.css';
import Chessboard from "chessboardjsx";

const ChessBoard = () => {
    return ( 
        <div className="chessboard">
            <Chessboard width = { 400 } id = "startPos" position="start"/>
        </div>
     );
}
 
export default ChessBoard;