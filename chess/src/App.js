import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Import the CSS
import "./App.css";

// Import Pages
import Homepage from "./Pages/Home";
import Game from "./Pages/Game";
import Rules from "./Pages/Rules";

function App() {
  return (
    <Router basename="/chess">
      <Switch>
        {/* Home Page/ View Board Games in Organisation */}
        <Route exact path="/" component={Homepage} />

        {/* Game Page/ Play a Game/ Spectator View */}
        <Route exact path="/game/:game_id" component={Game} />

        {/* Rules Page */}
        <Route exact path="/rules" component={Rules} />
      </Switch>
    </Router>
  );
}

export default App;
