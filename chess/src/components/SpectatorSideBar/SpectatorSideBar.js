import "./SpectatorSideBar.css";
import { Switch, Route, NavLink } from "react-router-dom";
// import Games from "../Games/Games";
import Chat from "../Chat/Chat.js";

const SpectatorSideBar = ({display, setDisplay}) => {
  return ( 
    <>
    {display && 
    <aside className="side-bar">
      <nav className="side-bar-nav">
        <div className="navLink" to="/game">
          <h1>Comments</h1>
        </div>
        <a className="close" onClick={() =>
        setDisplay(false)}>
          <svg
            className="closeIcon"
            width="22"
            height="20"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.5 4.5L4.5 13.5"
              stroke="white"
              strokeWidth="2.56648"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.5 4.5L13.5 13.5"
              stroke="white"
              strokeWidth="2.56648"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>

      </nav>
      <Chat />
    </aside>
    }
    </>
  );
};

export default SpectatorSideBar;
