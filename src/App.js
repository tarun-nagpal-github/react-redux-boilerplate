import React from 'react';
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
      <button onClick={getUserData} style={{fontSize: '20px'}}>Click here to Get Data</button> 
      &nbsp;&nbsp;&nbsp;
    <h1>Hello Redux</h1> 
    <pre style={{fontSize: 20}}>
        {JSON.stringify(globalState.userReducer, null, 2)}
    </pre>
      </header>
    </div>
  );
}

export default App;
