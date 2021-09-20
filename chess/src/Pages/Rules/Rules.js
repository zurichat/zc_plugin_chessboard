import "./Rules.css";
import Pawn from "../../assets/chess-pieces/bP.svg";
import Rook from "../../assets/chess-pieces/bR.svg";
import Bishop from "../../assets/chess-pieces/bB.svg";
import Knight from "../../assets/chess-pieces/bN.svg";
import Queen from "../../assets/chess-pieces/bQ.svg";
import King from "../../assets/chess-pieces/bK.svg";
import PawnW from "../../assets/chess-pieces/wP.svg";
import { Link } from "react-router-dom";

const Rules = () => {
  return (
    <div className="rules">
      <div className="top">
        <div className="content">
          <h4>Game Rule</h4>
          <p>
            This is a two-player board game consisting of 64 (8x8) squares
            arranged in alternating light & dark colors and 32 Chess pieces.
            There are six different type of chess pieces, each of which move can
            move in their own unique way. The objective is to protect your most
            valuable piece, the king, and trap (checkmate) your opponent’s king.
          </p>
        </div>
        <div className="pieces">
          <img src={Pawn} alt="black pawn" />
          <div className="white">
            <img src={PawnW} alt="white pawn" />
          </div>
        </div>
      </div>

      <div className="middle">
        <div className="carrier">
          <div className="grey-space">
            <div className="image">
              <img src={Pawn} alt="pawn" />
            </div>
          </div>
          <div className="white-space">
            <h4>Pawn</h4>
            <p>
              Can only move once after making the first move. First move is
              either once or twice.
            </p>
          </div>
        </div>

        <div className="carrier">
          <div className="grey-space">
            <div className="king">
              <img src={King} alt="King" />
            </div>
          </div>
          <div className="white-space">
            <h4>King</h4>
            <p>Restricted to one move per-turn. Can move in any direction.</p>
          </div>
        </div>

        <div className="carrier">
          <div className="grey-space">
            <div className="image">
              <img src={Rook} alt="Rook" />
            </div>
          </div>
          <div className="white-space">
            <h4>Rook</h4>
            <p>
              Moves straight horizontally or vertically and can move as far as
              its line of sight.
            </p>
          </div>
        </div>

        <div className="carrier">
          <div className="grey-space">
            <div className="image">
              <img src={Bishop} alt="Bishop" />
            </div>
          </div>
          <div className="white-space">
            <h4>Bishop</h4>
            <p>
              Moves diagonally in any direction and can move as far as its line
              of sight.
            </p>
          </div>
        </div>

        <div className="carrier">
          <div className="grey-space">
            <div className="queen">
              <img src={Queen} alt="Queen" />
            </div>
          </div>
          <div className="white-space">
            <h4> Queen</h4>
            <p>Can move and capture on any square in line of sight.</p>
          </div>
        </div>

        <div className="carrier">
          <div className="grey-space">
            <div className="image">
              <img src={Knight} alt="Knight" />
            </div>
          </div>
          <div className="white-space">
            <h4>Knight</h4>
            <p>
              Moves in an L-shape: 2 up 1 left or 1 up 2 left or right and can
              move over a piece.
            </p>
          </div>
        </div>
      </div>

      <div className="bottom">
        <Link to="/">
          <button>Back to Game</button>
        </Link>
      </div>
    </div>
  );
};

export default Rules;
