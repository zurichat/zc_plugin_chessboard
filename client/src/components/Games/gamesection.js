import React from "react";
import "./game.css";

import Chessboard from "../../assets/Chessboard.png";
import Ellipse134 from "../../assets/Ellipse134.png";
import Ellipse133 from "../../assets/Ellipse133.png";
import Ellipse135 from "../../assets/Ellipse135.png";
import Ellipse136 from "../../assets/Ellipse136.png";

function Gamesection() {
  return (
    <div className="container">
      <figure className="position-relative">
        <img src={Ellipse134} className="pic1" alt="ellipse" />
        <div className="text1"> @dejavu</div>

        <div className="figcaption">
          <img src={Chessboard} alt="chessboard" className="img-fluid1" />
          <button className="btn-1"> Watch game</button>
        </div>

        <img src={Ellipse133} className="pic2" alt="ellipse" />
        <div className="text2"> Techlead</div>
      </figure>
      <br></br>
      <figure className="position-relative">
        <img src={Ellipse135} className="pic3" alt="ellipse" />
        <div className="text3"> @kemi</div>
        <div className="figcaption">
          <img src={Chessboard} alt="chessboard" className="img-fluid2" />
          <button className="btn-2">Watch game</button>
        </div>
        <img src={Ellipse136} className="pic4" alt="ellipse" />
        <div className="text4"> Ademola</div>
      </figure>
    </div>
  );
}

export default Gamesection;
