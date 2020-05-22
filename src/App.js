import React from 'react';
import './App.css';

import SearchBar from "./components/SearchBar";
import SearchReults from "./components/SearchReults";

function App() {
  return (
    
      <div className="App-header">
        <h1>Search for Books by ISBN</h1>
        <div class="container">
          <SearchBar />
          <SearchReults />
        </div>
      </div>
    
  );
}

export default App;
