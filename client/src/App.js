import "./App.css";
import {Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header class="main-header">
        <nav>
          <h1 id="logo">Chess Board Room Plugin</h1>
        </nav>
      </header>
      <section class="hero">
        <h2>Welcome to the Chess Board Update</h2>

        <button><Link to = "/chessboard">Start Game</Link></button>
      </section>
    </div>
  );
}

export default App;
