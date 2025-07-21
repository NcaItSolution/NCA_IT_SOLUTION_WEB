import React from "react";
import Header from "./Components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import About from "./Components/About";

function App() {
  return (
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route path="/" element= {<Home/>} ></Route>
      <Route path="/about" element= {<About/>} ></Route>
        
      </Routes>
      <Footer/>
      
      </BrowserRouter>
    
  );
}

export default App;
