import React from "react";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Industries from "./components/Industries";
import Blogs from "./components/Blogs";
import CareersPage from "./components/CareersPage";

function App() {
  return (
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route path="/" element= {<Home/>} ></Route>
      <Route path="/about" element= {<About/>} ></Route>
      <Route path="/industries" element= {<Industries/>} ></Route>
      <Route path="/blog" element= {<Blogs/>} ></Route>
      <Route path="/career" element={<CareersPage/>}/>
        
      </Routes>
      <Footer/>
      
      </BrowserRouter>
    
  );
}

export default App;
