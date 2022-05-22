import React from "react";
import "./feature.css";

export default function Features({ title, text }) {
  return (
    <div className="unity__features__container__feature">
      <div className="unity__features__container__feature__title">
        <div />
        <h1>{title}</h1>
      </div>
      <div className="unity__features__container__feature__text">
        <p>{text}</p>
      </div>
    </div>
  );
}
