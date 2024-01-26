import React from "react";
import Topbar from "./components/Topbar/topbar";
import Home from "./pages/Home/home";
import Sports from "./pages/Sports/sport";
import Politics from "./pages/Politics/politics";
import Techinfo from "./pages/TechInfo/techinfo";
import Business from "./pages/Business/business";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Topbar />
        <Routes>
          <Route path="/" element ={<Home/>}>Home</Route>
          <Route path="/sports" element ={<Sports/>}>Sport</Route>
          <Route path="/politics" element ={<Politics/>}>Politics</Route>
          <Route path="/techinfo" element ={<Techinfo/>}>Techinfo</Route>
          <Route path="/business" element ={<Business/>}>Business</Route>
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
