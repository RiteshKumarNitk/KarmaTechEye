import React from "react";
import Navbar from "./components/Navbar";
import LendingPage from "./components/LendingPage";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Eyes from "./components/Eyes";
import Featured from "./components/Featured";
const App = () => {
  return (
    <div className="w-full bg-zinc-900 text-white ">
      <Navbar />     
      <LendingPage/> 
      <Marquee/>
      <About/>
      <Eyes/>
      <Featured/>
    </div>
  );
};

export default App;
