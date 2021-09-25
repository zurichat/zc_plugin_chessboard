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

function Header() {
  return (
    <div>
      <header className="main-header">
        <div className="nav chesshome-nav">
          <div id="chesshome-flex">
            <h1 id="chesshome-name">
              <img src={ChessImage} id="pawnLogo" /> 
              Chess
            </h1>
            <button id="arrow-button">
              <i className="arrow down"></i>
            </button>
          </div>
          <div className="chesshome-headerRight">
            {/* <a className="commentIcon" onClick={() => setDisplay(true)}> */}
            <a className="commentIcon">
              <img src={CommentIcon} alt="reply" />
            </a>

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
              <p className="text-300">300</p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
