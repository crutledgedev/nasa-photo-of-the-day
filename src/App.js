import React from "react";
import "./App.css";
import PhotoList from "./components/PhotoList";
import JumboTron from "./components/JumboTron"
import Footer from "./components/Footer";
import ApodDayPicker from './components/ApodDayPicker';


function App() {
  return (
    
    <div className="App">
      
      <JumboTron/>
      
      <PhotoList/>
      <ApodDayPicker/>
      
      <Footer/>
    </div>
  );
}

export default App;
