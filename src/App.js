import React from "react";
import "./App.css";
import Navigate from "./components/navigate/Navigate";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Leetcode from "./components/leetcode/Leetcode";
import Contact from "./components/contact/Contact";

const App = () => {
  return (
    <>
      <body>
        <Navigate />
        <Home />
        <About />
        <Skills />
        {/* <Projects /> */}
        <Leetcode />
        {/* <Contact /> */}
      </body>
    </>
  );
};

export default App;
