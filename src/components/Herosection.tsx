import React from "react";
import HeroImage from "../images/hero.jpg";
import TypewriterComponent from "typewriter-effect";

const Herosection = () => {
  const headingPrimary: string = "For a better life, we design and create ";
  const heroDescription: string =
    "We spend our days in a little store in the centre of Lagos obsessively perfecting our chairs. The end result is a great balance of beauty and comfort that will benefit your health in the long run.";

  return (
    <section className="hero-section">
      <div className="hero-section--hero">
        <div className="hero-section--hero-text-box">
          <h1 className="heading-primary">
            {headingPrimary}{" "}
            <span className="heading-primary-span">
              <TypewriterComponent
                options={{
                  loop: true,
                  autoStart: true,
                }}
                onInit={(typewriter) =>
                  typewriter
                    .typeString("better seats.")
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString("comfort for you.")
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString("quality assurance.")
                    .start()
                }
              />
            </span>
          </h1>
          <p className="hero-section--hero-description">{heroDescription}</p>
          <a href="/" className="hero-section--hero-link">
            Learn More &darr;
          </a>
        </div>
        <div className="hero-section--hero-img-box">
          <img src={HeroImage} alt={heroDescription} />
        </div>
      </div>
    </section>
  );
};

export default Herosection;
