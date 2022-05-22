import React from "react";
import "./header.css";
import {
  profile01,
  profile02,
  profile03,
  profile04,
  profile05,
  profile06,
  profile07,
} from ".";
import robot from "../../assets/robot.png";

export default function Header() {
  return (
    <div className="unity__header section__padding" id="home">
      <div className="unity__header__content">
        <h1 className="gradient__text">
          Exercitation ut Excepteur culpa Unity.
        </h1>
        <p>
          Excepteur dolore tempor est sunt ex tempor aute enim qui irure duis
          ullamco. Ea occaecat do velit voluptate amet magna fugiat velit non
          sit ad.
        </p>
        <div className="unity__header__content__input">
          <input type="email" placeholder="Your email address" />
          <button type="button">Get Started</button>
        </div>

        <div className="unity__header__content__people">
          <img src={profile01} alt="profile" />
          <img src={profile02} alt="profile" />
          <img src={profile03} alt="profile" />
          <img src={profile04} alt="profile" />
          <img src={profile05} alt="profile" />
          <img src={profile06} alt="profile" />
          <img src={profile07} alt="profile" />
          <p>2,852 Qui sint culpa labore quis non laboris.</p>
        </div>
      </div>
      <div className="unity__header__image">
        <img src={robot} alt="Unity" />
      </div>
    </div>
  );
}
