import React from 'react';
import ControlledForm from './ControlledForm';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <h1>Assignment 5: Controlled React Form</h1>
        <p className="subtitle">
          Accepts user inputs and displays the entered data in real-time below the form
        </p>
      </header>

      <ControlledForm />
    </div>
  );
}

export default App;
