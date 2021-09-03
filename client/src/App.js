import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import "./App.css";
import HomePage from "./Pages/Homepage.js/Homepage"
import MainGame from ''

function App() {
  return (
    <div className="App">
     <MainGame />
      <Router>
        <Switch>
          <Route exact path='/' render={HomePage} />
          <Route exact path='/game' render={MainGame} />

        </Switch>
      </Router>
     {/* <HomePage /> */}
    </div>
  );
}

export default App;