import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import "./App.css";
<<<<<<< HEAD
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from './constants/routes';
import { Homepage, MainGame, SpectatorsGameScreen } from "./Pages";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={ROUTES.HOME} component={Homepage}/>
        <Route exact path={ROUTES.PLAYERSGAMESCREEN} component={MainGame}/>
        <Route exact path={ROUTES.SPECTATORSGAMESCREEN} component={SpectatorsGameScreen}/>
      </Switch>
    </Router>
=======
import HomePage from "./Pages/Homepage.js/Homepage"
import MainGame from "./Pages/GameScreen/MainGame"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' render={HomePage} />
          <Route exact path='/game' render={MainGame} />
        </Switch>
      </Router>
     {/* <HomePage /> */}
    </div>
>>>>>>> d2eceaca58d15a1f78bc7750032bb75850bb8037
  );
}

export default App;