import React from "react";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header/>}/>
      </Routes>
      
      </BrowserRouter>
    
  );
}

export default App;
