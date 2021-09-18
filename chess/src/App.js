import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
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
import Rules from "./Pages/Rules/Rules";

function App() {
  return (
    <div className="App">
      <Router basename="/chess">
        <Switch>
          <Route exact path="/" render={() => <HomePage />} />
          <Route path="/game/:id" render={() => <MainGame />} />
          <Route exact path="/game/games" render={() => <Games />} />
          <Route
            exact
            path="/game_nocomments"
            render={() => <GameScreenWithoutComments />}
          />
          <Route
            path="/game_nocomments/:id"
            render={() => <GameScreenWithoutComments />}
          />
          <Route
            path="/game_nocomments/:id"
            render={() => <GameScreenWithoutComments />}
          />
          <Route
            exact
            path="/game_comments"
            render={() => <GameScreenWithComments />}
          />
          <Route exact path="/modalpage" render={() => <Modal />} />
          <Route exact path="/test-accept-modal" component={TestModal} />
          <Route exact path="/inviteplayer">
            <InviteModal />
          </Route>
          <Route
            exact
            path="/Accept_chalengeModal"
            render={() => <Acceptchalengemodal />}
          />
          <Route exact path="/rules">
            <Rules />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
