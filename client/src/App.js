import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import HomePage from "./Pages/Homepage.js/Homepage";
import  GameScreenWithComments from "./Pages/GameScreen2/GameScreen2";
import MainGame from "./Pages/GameScreen/MainGame.js";
import Modal from "./components/Modals/ModalPage/Modal";
import InviteModal from "./components/Modals/InviteModal/InviteModal";
import Forfeit from './components/Modals/ForfeitModal/Forfeit'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" render={HomePage} />
          <Route exact path="/game" render={MainGame} />
          <Route exact path="/game/games" render={MainGame} />
          <Route exact path="/game/chat" render={MainGame} />
          <Route exact path="/game_comments" render={ () =>  <GameScreenWithComments /> } />
          <Route exact path="/modalpage" render={Modal} />
          <Route exact path="/game_comments/forfeit_modal" render={() => <Forfeit isYes={true} />} />
          <Route exact path="/inviteplayer">
            <InviteModal />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
