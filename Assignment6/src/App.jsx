import React from 'react';
import Counter from './Counter';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <h1>Assignment 6: React Counter App using useState</h1>
        <p className="subtitle">
          Counter application with buttons to increment, decrement, and reset the value
        </p>
      </header>

      <main>
        <Counter />
      </main>
    </div>
  );
}

export default App;
