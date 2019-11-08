import React from "react";
import "./App.css";
import PhotoList from "./components/PhotoList";
import PhotoCard from "./components/PhotoCard";

function App() {
  return (
    <div className="App">
      <h1>Nasa Photo Of the Day</h1>
      <PhotoList/>
      
      
    </div>
  );
}

export default App;
