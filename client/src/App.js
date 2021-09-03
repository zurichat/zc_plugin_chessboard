import "./App.css";
import MiniBoard from "./components/MiniBoard/MiniBoard";

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

        <button>Start Game</button>

      </section>
      <MiniBoard id="234" playerOne="Annietah" playerTwo="codeJonin" />
      <MiniBoard id="234" playerOne="" playerTwo="codeJonin" />
    </div>
  );
}

export default App;
