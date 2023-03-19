import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Herosection";
import Featured from "./components/Featured";
import Special from "./components/Special";

function App() {
  const links: string[] = [
    "Featured",
    "About",
    "Testimonials",
    "Bestsellers",
    "Hit Us Up!",
  ];

  //JSX
  return (
    <div className="App">
      <Navbar links={links} />
      <HeroSection />
      <Featured />
      <Special />
    </div>
  );
}

export default App;
