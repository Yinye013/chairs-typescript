import React from "react";
import HeroImage from "../images/hero.jpg";
const Herosection = () => {
  const headingPrimary: string =
    "For a better life, we design and create better seats.";
  const heroDescription: string =
    "We spend our days in a little store in the centre of Lagos obsessively perfecting our chairs. The end result is a great balance of beauty and comfort that will benefit your health in the long run.";

  return (
    <section className="hero-section">
      <div className="hero-section--hero">
        <div className="hero-section--hero-text-box">
          <h1 className="heading-primary">{headingPrimary}</h1>
          <p className="hero-description">{heroDescription}</p>
          <a href="/" className="hero-link"></a>
        </div>
        <div className="hero-section--hero-img-box">
          <img src={HeroImage} alt={heroDescription} />
        </div>
      </div>
    </section>
  );
};

export default Herosection;
