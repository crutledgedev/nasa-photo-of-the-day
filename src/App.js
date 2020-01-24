import React from "react";
import "./App.css";
import PhotoList from "./components/PhotoList";
import JumboTron from "./components/JumboTron"
import Footer from "./components/Footer";
import ApodDayPicker from './components/ApodDayPicker';
import NavBar from "./components/NavBar";



function App() {
  return (
    
    <div className="App">
      
      <NavBar/>
      <JumboTron/>
      
      
      <PhotoList/>
      <ApodDayPicker/>
      
      <Footer/>
    </div>
  );
}

export default App;
