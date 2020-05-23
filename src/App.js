import React from 'react';
import './App.css';

import SearchBar from "./components/SearchBar";
import SearchReults from "./components/SearchReults";
import Header from './components/Header';

function App() {
  return (
    
      <div className="App-header">
        <Header />
        <div class="container">
          <SearchBar />
          <SearchReults />
        </div>
      </div>
    
  );
}

export default App;
