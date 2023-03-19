import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Herosection";
import Featured from "./components/Featured";
import Special from "./components/Special";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function App() {
  const { ref, inView } = useInView();

  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        transition: {
          type: "easeInOut",
          duration: 1,
        },
      });
    }
    if (!inView) {
      animation.start({
        y: "20vh",
      });
    }
  }, [inView]);

  const animate = useAnimation();
  useEffect(() => {
    console.log("in view", inView);
    if (inView) {
      animate.start({
        x: 0,
        transition: {
          type: "easeInOut",
          duration: 4,
        },
      });
    }
    if (!inView) {
      animate.start({
        x: "-50vh",
      });
    }
  }, [inView]);

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
      <motion.div ref={ref} animate={animation}>
        <Featured />
      </motion.div>
      <motion.div ref={ref} animate={animate}>
        <Special />
      </motion.div>
    </div>
  );
}

export default App;
