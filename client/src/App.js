import "./App.css";
import Comments from "./components/Comments/Comments";

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
    </div>
    // <div style={{
    //   display:"flex",
    //   justifyContent: 'center',
    //   alignItems: 'center'
    // }}>
    //   <Comments />
    // </div>
  );
}

export default App;
