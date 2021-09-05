import React from "react";
import "./game.css";

import Chessboard from "../../assets/Chessboard.png";
import Ellipse134 from "../../assets/Ellipse134.png";
import Ellipse133 from "../../assets/Ellipse133.png";
import Ellipse135 from "../../assets/Ellipse135.png";
import Ellipse136 from "../../assets/Ellipse136.png";

function Games() {
  return (

    
    <div className="gamesection">
      <figure className="position-relative">
        
        <div className="profile-left">
        <img src={Ellipse134} className="pic1" alt="ellipse" />
        <div className="text1"> @dejavu</div>
        </div>

        <div className="figcaption">
          <img src={Chessboard} alt="chessboard" className="img-fluid1" />
          <div className="btn-div">

          <button className="btn-1"> Watch game</button>
          </div>
        </div>

        <div className="profile-right">
        <img src={Ellipse133} className="pic2" alt="ellipse" />
        <div className="text2"> Techlead</div>
        </div>

      </figure>
      <figure className="position-relative">

        <div className="profile-left">
        <img src={Ellipse135} className="pic3" alt="ellipse" />
        <div className="text3"> @kemi</div>
        </div>

        <div className="figcaption">
          <img src={Chessboard} alt="chessboard" className="img-fluid2" />
          <div className="btn-div">


          <button className="btn-2">Watch game</button>
          </div>
        </div>

        <div className="profile-right">
        <img src={Ellipse136} className="pic4" alt="ellipse" />
        <div className="text4"> Ademola</div>

        </div>
      </figure>
    </div>
  );
}

export default Games;
