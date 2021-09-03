import React from 'react'

import './Homepage.css'

const Homepage = () => {
    return (
      <div>
        <header class="main-header">
          <nav>
            <h1 id="logo">Chess Board Room Plugin</h1>
          </nav>
        </header>
        <section class="hero">
          <h2>Welcome to the Chess Board Room</h2>

          <button>Start Game</button>
        </section>
      </div>
    );
}

export default Homepage
