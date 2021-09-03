import React from 'react';
import "./App.css";
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <header class="main-header">
        <nav>
          <h1 id="logo">Chess Board Room Plugin</h1>
        </nav>
      </header>
      <section class="hero">
        <h2>Welcome to the Chess Board Room</h2>

        <button>Start Game</button>
      </section>
    <Sidebar />
      
    </div>
  );
}

export default App;
