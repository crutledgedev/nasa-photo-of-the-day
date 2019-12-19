import React from "react";
import "./App.css";
import PhotoList from "./components/PhotoList";
import JumboTron from "./components/JumboTron"
import Footer from "./components/Footer";


function App() {
  return (
    
    <div className="App">
      
      <JumboTron/>
      
      <PhotoList/>
      
      <Footer/>
    </div>
  );
}

export default App;
