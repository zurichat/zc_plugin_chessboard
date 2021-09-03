import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import Games from './';

import "./App.css";
<<<<<<< HEAD
import Comment from "./components/Comment/Chat";
=======
import HomePage from "./Pages/Homepage.js/Homepage"
<<<<<<< HEAD
import MainGame from "./Pages/GameScreen/MainGame"
<<<<<<< HEAD
>>>>>>> 72424141400e065c4e1ae309d832ee58e1606cf6
=======
=======
import GameScreen2 from './Pages/GameScreen2';
import MainGame from "./Pages/GameScreen/MainGame";
>>>>>>> 93f504569e5999e51ae30df37c85a58e93fa4f26
import Input from './components/Chat/Input/Input';
>>>>>>> 2215783675a9a6898e1074caa80c882452c997f4

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      {/* <header class="main-header">
        <nav>
          <h1 id="logo">Chess Board Room Plugin</h1>
        </nav>
      </header>
      <section class="hero">
        <h2>Welcome to the Chess Board Update</h2>

        <button>Start Game</button>
      </section> */}
      <div>
        <Comment />
      </div>
=======
      <Router>
        <Switch>
          <Route exact path='/' render={HomePage} />
          <Route exact path='/game' render={MainGame} />
          <Route exact path='/game_comments' render={GameScreen2} />
        </Switch>
      </Router>
<<<<<<< HEAD
     {/* <HomePage /> */}
<<<<<<< HEAD
>>>>>>> 72424141400e065c4e1ae309d832ee58e1606cf6
=======
=======
>>>>>>> 93f504569e5999e51ae30df37c85a58e93fa4f26
     
>>>>>>> 2215783675a9a6898e1074caa80c882452c997f4
    </div>
  );
}

export default App;