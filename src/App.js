import React from "react";
import Bodyc from "./Components/Body/Bodyc";
import './App.css' 
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Frame10 from "./Components/Body/Frame10";
const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/body" element={<Bodyc />} />
            <Route path="/" element={<Frame10 /> }/>
        </Routes>
    </BrowserRouter>
      
  );
};

export default App;
