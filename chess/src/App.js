import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Import the CSS
import "./App.css";

<<<<<<< HEAD
// Zuri Cross Import
// import { GetUserInfo } from "@zuri/zuri-control";

function App() {
  return (
    <div className="App">
      <Router basename="/chess">
        <Switch>
          {/* View All Games */}
          <Route exact path="/" render={() => <HomePage />} />

          {/* ZC Main Comm Test Page */}
          {/* <Route
            exact
            path="/zc_main_test"
            render={() => console.log(GetUserInfo())}
          /> */}

          {/* Specatator Game View */}
          <Route exact path="/game/:id" render={() => <MainGame />} />

          {/* Actual Game Page for Player 1 and Player 2 */}
          <Route
            exact
            path="/game_nocomments/:id"
            render={() => <GameScreenWithoutComments />}
          />

          <Route
            exact
            path="/game_comments"
            render={() => <GameScreenWithComments />}
          />

          <Route exact path="/inviteplayer" render={() => <InviteModal />} />

          {/* Rules Page */}
          <Route exact path="/rules" render={() => <Rules />} />
        </Switch>
      </Router>
    </div>
=======
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
>>>>>>> 604891b638904d0e761f9bc08d7f0db570999813
  );
}

export default App;
