<<<<<<< HEAD
import "./App.css";
=======
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import HomePage from "./Pages/Homepage.js/Homepage";
import GameScreen2 from "./Pages/GameScreen2";
import MainGame from "./Pages/GameScreen/MainGame.js";
import Modal from "./components/Modals/ModalPage/Modal";
import InviteModal from "./components/Modals/InviteModal/InviteModal";
>>>>>>> a0fb237a2da881841425e4a29d0112d9984a569c

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <header class="main-header">
        <nav>
          <h1 id="logo">Chess Board Room Plugin</h1>
        </nav>
      </header>
      <section class="hero">
        <h2>Welcome to the Chess Board Update</h2>

        <button>Start Game</button>
      </section>
=======
      <Router>
        <Switch>
          <Route exact path="/" render={HomePage} />
          <Route exact path="/game" render={MainGame} />
          <Route exact path="/game/games" render={MainGame} />
          <Route exact path="/game/chat" render={MainGame} />
          <Route exact path="/game_comments" render={GameScreen2} />
          <Route exact path="/modalpage" render={Modal} />
          <Route exact path="/inviteplayer">
            <InviteModal />
          </Route>
        </Switch>
      </Router>
>>>>>>> a0fb237a2da881841425e4a29d0112d9984a569c
    </div>
  );
}

export default App;
