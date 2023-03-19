import React from "react";
import { GiFizzingFlask } from "react-icons/gi";
import { BsEmojiSmile } from "react-icons/bs";
import { BsFillSuitHeartFill } from "react-icons/bs";

const Special = () => {
  const firstText: string =
    "Are you tired of the same bland and boring chair designs? Look no further because science meets design with these innovative chairs! From ergonomic shapes to unique materials, these chairs will not only elevate your decor but also improve your posture and comfort. Sit in style with chairs that are sure to make a statement in any room.";

  const secondText: string =
    " Choosing the appropriate seats can really make a difference based on maximum reliability in chair design. We'll assist you in finding a chair that is made to last and improve your daily life, whether it has ergonomic features or utilizes cutting-edge materials. Thus, why compromise on reliable comfort? Buy chairs from us right away!";
  const thirdText: string =
    "Chairs are a common piece of furniture that we use every day. We sit on them while working, eating, relaxing, and socializing. While chairs come in many shapes, sizes, and materials, it is important to consider their ethical and long-term impact before making a purchase.";

  return (
    <section className="special-section">
      <div className="container">
        <h3 className="subheading">What Makes our chairs special</h3>
        <h2 className="heading-secondary">Why are our chairs unique?</h2>

        <div className="special-container">
          <div className="first-span">
            <GiFizzingFlask className="special-icon" />
            <h3 className="heading-tertiary">Science Meets Design</h3>
            <p className="special-description">{firstText}</p>
          </div>
          <div className="second-span">
            <BsEmojiSmile className="special-icon" />
            <h3 className="heading-tertiary">Maximum Reliability</h3>
            <p className="special-description">{secondText}</p>
          </div>
          <div className="third-span">
            <BsFillSuitHeartFill className="special-icon" />
            <h3 className="heading-tertiary">Ethical & Long-Term</h3>
            <p className="special-description">{thirdText}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Special;
