import React from "react";
import Today from "../featuresfolder/todaylogo-removebg-preview.png";
import Target from "../featuresfolder/targetlogo-removebg-preview.png";
import Delish from "../featuresfolder/delishlogo-removebg-preview.png";
import Shape from "../featuresfolder/shapelogo-removebg-preview.png";
import GoodHousekeeping from "../featuresfolder/goodhousekeepinglogo-removebg-preview.png";
import HuffingtonPost from "../featuresfolder/huffingtonpostlogo-removebg-preview.png";
import Dominos from "../featuresfolder/dominoslogo-removebg-preview.png";
import Cosmopolitan from "../featuresfolder/cosmopolitanlogo-removebg-preview.png";
import CountryLiving from "../featuresfolder/countrylivinglogo-removebg-preview.png";
import GoodMorningAmerica from "../featuresfolder/goodmorningamericalogo-removebg-preview.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import useMultipleAnimations from "../hooks/useMultipleAnimations";

const Featured = () => {
  let { ref, inView } = useInView();
  const animation = useAnimation();
  useMultipleAnimations(inView, animation);

  return (
    <motion.div ref={ref} animate={animation} className="featured-section">
      <div className="container">
        <h3 className="featured-heading">As Featured In</h3>
        <div className="featured-logo">
          <img src={Today} alt="TodayLogo" />
          <img src={Target} alt="Target Logo" />
          <img src={Delish} alt="Delish Logo" />
          <img src={Shape} alt="Shape Logo" />

          <img src={GoodHousekeeping} alt="Good Housekeeping Logo" />
          <img src={HuffingtonPost} alt="Huffington Post Logo" />
          <img src={Dominos} alt="Dominos Logo" />
          <img src={Cosmopolitan} alt="Cosmopolitan Logo" />
          <img src={CountryLiving} alt="Country Living Logo" />
          <img src={GoodMorningAmerica} alt="Good Morning America Logo" />
        </div>
      </div>
    </motion.div>
  );
};

export default Featured;
