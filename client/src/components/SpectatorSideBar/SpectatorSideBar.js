import "./SpectatorSideBar.css";
import { Switch, Route, NavLink } from "react-router-dom";
// import Games from "../Games/Games";
import Chat from "../Chat/Chat.js";

const SpectatorSideBar = () => {
  return (
    <aside className="side-bar">
      <nav className="side-bar-nav">
        <NavLink exact activeClassName="active" className="nav-link" to="/game">
          Comments
        </NavLink>
        <div activeClassName="close" className="nav-link">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.5 4.5L4.5 13.5" stroke="white" strokeWidth="1.56648" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4.5 4.5L13.5 13.5" stroke="white" strokeWidth="1.56648" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

        </div>
      </nav>
      <Switch>
        <Route exact path="/game" component={Chat} />
        {/* <Route exact path="/games" component={Games} /> */}
      </Switch>
    </aside>
  );
};

export default SpectatorSideBar;
