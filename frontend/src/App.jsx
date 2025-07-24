import React from "react";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import About from "./Components/About";
import Industries from "./components/Industries";
import Blogs from "./components/Blogs";

function App() {
  return (
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route path="/" element= {<Home/>} ></Route>
      <Route path="/about" element= {<About/>} ></Route>
      <Route path="/industries" element= {<Industries/>} ></Route>
      <Route path="/blog" element= {<Blogs/>} ></Route>
        
      </Routes>
      <Footer/>
      
      </BrowserRouter>
    
  );
}

export default App;
