import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components.js/Navbar";
import Header from "./Header";
import About from "./components.js/About";
import Event from "./Event.js";
import Contact from "./components.js/Contact";
import Blog from "./Blog.js";
import Achievements from "./Achievements.js";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container"> 
        <Navbar />
        <Routes>
          <Route path="/" element={<Header />} />  
          <Route path="/event" element={<Event />} />  
          <Route path="/achievements" element={<Achievements />} />  
          <Route path="/blog" element={<Blog />} />  
          <Route path="/about" element={<About />} /> 
        </Routes>
        <Contact />
      </div>
    </Router>
  );
}

export default App;
