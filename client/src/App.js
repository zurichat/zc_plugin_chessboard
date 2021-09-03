import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import "./App.css";
<<<<<<< HEAD
import Comment from "./components/Comment/Chat";
=======
import HomePage from "./Pages/Homepage.js/Homepage"
import MainGame from "./Pages/GameScreen/MainGame"
>>>>>>> 72424141400e065c4e1ae309d832ee58e1606cf6

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
        </Switch>
      </Router>
     {/* <HomePage /> */}
>>>>>>> 72424141400e065c4e1ae309d832ee58e1606cf6
    </div>
  );
}

export default App;