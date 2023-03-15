import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Herosection";

function App() {
  const links: string[] = [
    "Featured",
    "About",
    "Testimonials",
    "Bestsellers",
    "Hit Us Up!",
  ];
  return (
    <div className="App">
      <Navbar links={links} />
      <HeroSection />
    </div>
  );
}

export default App;
