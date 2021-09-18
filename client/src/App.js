import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/Homepage.js/Homepage";
import GameScreenWithComments from "./Pages/GameScreen2/GameScreen2";
import MainGame from "./Pages/GameScreen/MainGame.js";
import Modal from "./components/Modals/ModalPage/Modal";
import InviteModal from "./components/Modals/InviteModal/InviteModal";
import TestModal from "./components/Modals/AcceptDeclineModal/Test";
import Acceptchalengemodal from "./components/Modals/Accept_chalengeModal/accept_chalenge_modal";
import Games from "./components/Games/Games";
import GameScreenWithoutComments from "./Pages/GameScreen1/GameScreen1";
import ChessBoard from "./components/ChessBoard/ChessBoard";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" render={HomePage} />
          <Route exact path="/game" render={MainGame} />
          <Route exact path="/game/games" render={Games} />
          <Route
            exact
            path="/game_nocomments"
            render={() => <GameScreenWithoutComments />}
          />
          <Route
            exact
            path="/game_comments"
            render={() => <GameScreenWithComments />}
          />
          <Route
            exact
            path="/piecemove1"
            render={() => (
              <ChessBoard
                loggedIn={{
                  user_id: "1234567",
                  user_name: "codeJonin",
                }}
              />
            )}
          />
          <Route
            exact
            path="/piecemove2"
            render={() => (
              <ChessBoard
                loggedIn={{
                  user_id: "player-2-id",
                  user_name: "John Doe",
                }}
              />
            )}
          />
          <Route exact path="/modalpage" render={Modal} />
          <Route exact path="/test-accept-modal" component={TestModal} />
          <Route exact path="/inviteplayer">
            <InviteModal />
          </Route>
          <Route
            exact
            path="/Accept_chalengeModal"
            render={Acceptchalengemodal}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
