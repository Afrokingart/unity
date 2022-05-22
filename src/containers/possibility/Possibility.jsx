import React from "react";
import "./possibility.css";
import possibilityImg from "../../assets/possibility.png";

export default function Possibility() {
  return (
    <div className="unity__possibility section__padding" id="possibility">
      <div className="unity__possibility__image">
        <img src={possibilityImg} alt="possibility" />
      </div>
      <div className="unity__possibility__content">
        <h4>Consectetur sint cupidatat anim deserunt.</h4>
        <h1 className="gradient__text">
          Est incididunt id amet ullamco exercitation qui.
        </h1>
        <p>
          Adipisicing laborum laboris consequat ullamco ea id sunt tempor in
          reprehenderit do do Lorem. Amet do exercitation cillum sit fugiat
          exercitation. Cillum sit minim adipisicing elit labore tempor quis
          sint do tempor. Tempor proident Lorem magna qui. Fugiat id pariatur
          nisi aliqua eiusmod sit esse adipisicing. Exercitation minim aute
          cupidatat pariatur dolore in. Incididunt amet ad duis nulla
          reprehenderit aliquip commodo aute est dolor Lorem duis cupidatat.
        </p>
        <h4>Exercitation non in eiusmod nulla eiusmod veniam.</h4>
      </div>
    </div>
  );
}
