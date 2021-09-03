import "./App.css";
import Comment from "./components/Comment/Chat";

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
