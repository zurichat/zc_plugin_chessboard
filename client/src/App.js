<<<<<<< HEAD
=======
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

>>>>>>> a052278d8b06e45cbaf81b0ec19470a8f85ebf37
import "./App.css";
<<<<<<< HEAD
=======
import HomePage from "./Pages/Homepage.js/Homepage";
import GameScreen2 from "./Pages/GameScreen2";
import MainGame from "./Pages/GameScreen/MainGame.js";
import Modal from "./components/Modals/ModalPage/Modal";
import InviteModal from "./components/Modals/InviteModal/InviteModal";
>>>>>>> be71c77ab8ad17a538d513616fe38a58d96929cb

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
>>>>>>> be71c77ab8ad17a538d513616fe38a58d96929cb
    </div>
  );
}

export default App;
