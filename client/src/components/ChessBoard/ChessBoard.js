import "./App.css";
import React, { useState, useEffect, useRef } from "react"
import Chessboard from "chessboardjsx"
import Chess from "chess.js"



const ChessBoard  = () => {
    const [fen, setFen] = useState("start")

    let game = useRef(null);
  
    useEffect(() => {
      game.current = new Chess();
    }, [])
  
    const onDrop = ({sourceSquare, targetSquare}) => {
      let move = game.current.move({
        from: sourceSquare,
        to: targetSquare
      })
  
      if(move === null) return;
  
      setFen(game.current.fen())
    }
  
  
    return ( 
        <div className="board">
           
          <Chessboard width = { 400 } id="positionObject" position={ fen } onDrop = {onDrop} />
          </div>
     );
}
 
export default ChessBoard ;