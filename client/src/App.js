import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Games from './'

import "./App.css";
<<<<<<< HEAD
=======
import HomePage from "./Pages/Homepage.js/Homepage"
import MainGame from './Pages/GameScreen/MainGame.jsx'
>>>>>>> c5bf923a6576b9f4fe50e15f17066af8430b4126

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
          <Route exact path='/' render={HomePage} />
          <Route exact path='/game' render={MainGame} />

        </Switch>
      </Router>
>>>>>>> c5bf923a6576b9f4fe50e15f17066af8430b4126
    </div>
  );
}

export default App;