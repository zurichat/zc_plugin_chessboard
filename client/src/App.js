import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import Games from './';

import "./App.css";
import HomePage from "./Pages/Homepage.js/Homepage"
import MainGame from './Pages/GameScreen/MainGame.jsx'
import GameScreen2 from './Pages/GameScreen2';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' render={HomePage} />
          <Route exact path='/game' render={MainGame} />
          <Route exact path='/game_comments' render={GameScreen2} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;