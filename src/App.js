import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";



function App() {
  const globalState = useSelector(state => state);
  const dispatch = useDispatch();
  const getUserData = () => {
    // Get the Data for the User
    dispatch({ type: "USER_FETCH_REQUESTED"})
  }
  return (
    <div className="App">
      <header className="App-header">
       {/* Action will be triggred on clicked */}
      <button onClick={getUserData}>Get User data</button> 
      &nbsp;&nbsp;&nbsp;
    <h1>Co Learn - TryOut - Web</h1> 
    <pre style={{fontSize: 10}}>
        {JSON.stringify(globalState.userReducer, null, 2)}
    </pre>
      </header>
    </div>
  );
}

export default App;
