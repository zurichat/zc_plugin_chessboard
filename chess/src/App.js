import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/Homepage.js/Homepage";
import GameScreenWithComments from "./Pages/GameScreen2/GameScreen2";
import MainGame from "./Pages/GameScreen/MainGame.js";
import InviteModal from "./components/Modals/InviteModal/InviteModal";
import GameScreenWithoutComments from "./Pages/GameScreen1/GameScreen1";
import Rules from "./Pages/Rules/Rules";

function App() {
  return (
    <div className="App">
      <Router basename="/chess">
        <Switch>
          {/* View All Games */}
          <Route
            exact
            path="/"
            render={() => <HomePage />}
          />
          
          {/* Landing Home Page */}
          <Route
            exact
            path="/home"
            render={() => <h1>Landing Home Page</h1>}
          />

          {/* Specatator Game View */}
          <Route
          exact
            path="/game/:id"
            render={() => <MainGame />}
          />

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

          <Route
            exact
            path="/inviteplayer"
            render={() => <InviteModal />}
          />

          {/* Rules Page */}
          <Route
            exact
            path="/rules"
            render={() => <Rules />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
