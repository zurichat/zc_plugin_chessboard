import "./App.css";
import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ChessBoard from './components/ChessBoard/ChessBoard';

class App extends Component {
  render(){
    return (
      <Router>
        <div className="App">
        <header class="main-header">
          <nav>
            <h1 id="logo">Chess Board Room Plugin</h1>
          </nav>
        </header>
        <section class="hero">
          <h2>Welcome to the Chess Board Update</h2>
  
          <button><Link>Start Game</Link></button>
  
        </section>
      
      <Switch>
      <Route exact path="/" component={App} />
      <Route path="/chessboard" component={ChessBoard} />
      </Switch>
      </div>
    </Router>

      
    );
  }
    
}

export default App;
