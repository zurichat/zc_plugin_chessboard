import "./App.css";

function App() {
  return (
    <div className="App">
      <header class="main-header">
        <nav>
          <h1>Chess Board Room Plugin</h1>
        </nav>
      </header>
     <div className = "app__container">
        <div className="color one"><div className="box">box</div></div>
        <div className="color two"><div className="box"></div></div>
        <div className="color three"><div className="box"></div></div>
        <div className="color four"><div className="box"></div></div>
        <div className="color five"><div className="box"></div></div>
        <div className="color six"><div className="box"></div></div>
     </div>
    </div>
  );
}

export default App;
