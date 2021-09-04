import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Games from './'

import "./App.css";
import HomePage from "./Pages/Homepage.js/Homepage"
import MainGame from './Pages/GameScreen/MainGame.jsx'

function App() {
  return (
    <div className="App">
      
      <Router>
        <Switch>
          <Route exact path='/' render={HomePage} />
          <Route exact path='/game' render={MainGame} />
          <Route exact path='/game/games' render={MainGame} />
          <Route exact path='/game/chat' render={MainGame} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;