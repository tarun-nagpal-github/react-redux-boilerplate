import React from "react";
import { useSelector } from "react-redux";

function SearchResults() {
    // Get your Global State here 
    const globalState = useSelector(state => state);

    return(
        // Show the Data from Redux here 
      <pre style={{fontSize: 20, color : "white", border: "2px solid", marginTop: "10%"}}>
          {JSON.stringify(globalState.userReducer, null, 2)}
      </pre>
    );
  }

export default SearchResults;
