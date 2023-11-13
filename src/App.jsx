import React from "react";
import { useNavigate, Routes, Route } from "react-router-dom";
import "./App.css";
import Info from "./components/info/Info";
import About from "./components/about/About";
import Project from "./components/project/Project";
import Contact from "./components/contact/Contact";

const App = () => {
  return (
    <>
      <Info />
      <About />
      <Project />
      <Contact />
    </>
  );
};

export default App;
