import "./App.css";
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
  );
}

export default App;
