import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components.js/Navbar";
import Header from "./Header";
import About from "./components.js/About";
import Event from "./Event.js";
import Contact from "./components.js/Contact";
import Blog from "./Blog.js";
import Achievements from "./Achievements.js"


import "./App.css";
function App() {
  return (

    <Router> 
      <div className="app-container"> {/* ✅ Wrap everything inside Router */}
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Header />} />  {/* Home Page */}
         <Route path="/event" element={<Event/>} />  {/* About Page */}
          <Route path="/Achievements" element={<Achievements/>} />  {/* About Page */}
           <Route path="/Blog" element={<Blog/>} />  {/* About Page */}
        <Route path="/about" element={<About />} />  {/* About Page */}
        </Routes>
        <Contact/>
        </div>
    </Router>
  );
}

export default App;
