import React from 'react';
import logo from './logo.svg';
import rbmk from './rbmk.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={rbmk} className="App-logo" alt="logo" />
        <p>
          Scramble <code>&lt;your brain&gt;</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          The sun never shines in C Y B E R S P A S E
        </a>
      </header>
    </div>
  );
}

export default App;
