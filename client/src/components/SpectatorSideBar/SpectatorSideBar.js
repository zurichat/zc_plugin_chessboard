import "./SpectatorSideBar.css";
import { Switch, Route, NavLink } from "react-router-dom";
import Games from "../Games/Games";
import Chat from "../Chat/Chat.js";

const SpectatorSideBar = () => {
  return (
    <aside className="side-bar">
      <nav className="side-bar-nav">
        <NavLink exact activeClassName="active" className="nav-link" to="/game">
          Chat
        </NavLink>
        <NavLink activeClassName="active" className="nav-link" to="/games">
          Games
        </NavLink>
      </nav>
      <Switch>
        <Route exact path="/game" component={Chat} />
        <Route exact path="/games" component={Games} />
      </Switch>
    </aside>
  );
};

export default SpectatorSideBar;
