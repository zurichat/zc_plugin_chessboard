import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import Games from './';

import "./App.css";
import HomePage from "./Pages/Homepage.js/Homepage"
import GameScreen2 from './Pages/GameScreen2';
import MainGame from "./Pages/GameScreen/MainGame";
// import Input from './components/Chat/Input/Input';


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
          <Route exact path='/game_comments' render={GameScreen2} />
        </Switch>
      </Router>
     
>>>>>>> b0138eb2bd923e8a16b67354e8f197dfaab39a7e
    </div>
  );
}

export default App;