import React from "react";

// Import CSS for this page
import "./header.css";

// Import Assets
import ChessImage from "../../assets/header/chess_piece.svg";
import CommentIcon from "../../assets/header/CommentIcon.png";
import imageProfileOne from "../../assets/header/imageProfileOne.png";
import imageProfileTwo from "../../assets/header/imageProfileTwo.png";
import imageProfileThree from "../../assets/header/imageProfileThree.png";

const Profile = ({ className, src }) => {
  return (
    <div className={className}>
      <img
        src={src}
        style={{ border: "1px solid #01D892", borderRadius: "4px" }}
      />
    </div>
  );
};

function Header({ gameData }) {
  let number_of_users_in_room = 0;

  if (gameData) {
    if (gameData.owner) {
      number_of_users_in_room++;
    }

    if (gameData.opponent) {
      number_of_users_in_room++;
    }

    if (gameData.spectators.length > 0) {
      number_of_users_in_room += gameData.spectators.length;
    }
  }

  // pad leading zeros
  function padLeadingZeros(num, size) {
    var s = num + "";
    while (s.length < size) s = "0" + s;
    return s;
  }

  return (
    <div>
      <header className="main-header">
        <div className="nav chesshome-nav">
          <div id="chesshome-flex">
            <h1 id="chesshome-name">
              <img src={ChessImage} id="pawnLogo" />
              Chess
            </h1>
            {/* <button id="arrow-button">
              <i className="arrow down"></i>
            </button> */}
          </div>
          <div className="chesshome-headerRight">
            {/* <a className="commentIcon" onClick={() => setDisplay(true)}> */}
            {/* <a className="commentIcon">
              <img src={CommentIcon} alt="reply" />
            </a> */}

            {number_of_users_in_room > 0 ? (
              <div className="chesshome-profileImg">
                <Profile
                  className="chesshome-profile profileOne"
                  src={imageProfileOne}
                />
                <Profile
                  className="chesshome-profile profileTwo"
                  src={imageProfileTwo}
                />
                <Profile
                  className="chesshome-profile profileThree"
                  src={imageProfileThree}
                />
                <p className="text-300">
                  {padLeadingZeros(number_of_users_in_room, 3)}
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </header>
    </div>
  );
}

export default React.memo(Header);
