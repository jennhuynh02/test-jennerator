import React from 'react';
import logo from './logo.svg';
import './App.css';
import Generator from "./components/generator/generator";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Test Case Generator
      </header>
      
      <Generator/>
    </div>
  );
}

export default App;
