import React from "react";
import { useNavigate, Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Info from "./components/info/info";
import Project from "./components/project/project";
import Contact from "./components/contact/contact";

function App() {
  return (
    <>
      <Info></Info>
      <Project></Project>
      <Contact></Contact>
    </>
  );
}

export default App;
