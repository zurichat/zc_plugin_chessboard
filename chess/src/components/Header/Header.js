import React, {useState} from "react";
import "./Header.css";

import profileImg from "../../assets/Rectangle 936.png";
import profileOne from "../../assets/Rectangle 892.png";
import profileTwo from "../../assets/Rectangle 894.png";
import profileThree from "../../assets/Rectangle 896.png";
import pawnLogo from "../../assets/Union.png";
import chatBox from "../../assets/commentIcon.png";

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

const Header = ({ setDisplay}) => {
// const [display, setDisplay] = useState('');
// console.log('Header', display);

  return (
    <div>
      <header className="main-header">
        <div className="nav chesshome-nav">
          <div id="chesshome-flex">
            <h1>
              <img src={pawnLogo} id="pawnLogo" /> Chess
            </h1>
              <button id="arrow-button">
                <i className="arrow down"></i>
              </button>
          </div>
          <div className="chesshome-headerRight">
            <a className="commentIcon" onClick={() => setDisplay(true)}>
             <img src={chatBox} alt ="reply" />
            </a>

          <div className="chesshome-profileImg">
            <Profile
              className="chesshome-profile profileOne"
              src={profileOne}
              />
            <Profile
              className="chesshome-profile profileTwo"
              src={profileTwo}
              />
            <Profile
              className="chesshome-profile profileThree"
              src={profileThree}
              />
            <p className="text-300">300</p>
          </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
