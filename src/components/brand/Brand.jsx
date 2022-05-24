import React from "react";
import "./brand.css";
import { geico, allstate, prudential, hsbc, aig } from ".";

export default function Brand() {
  return (
    <div className="unity__brand section__padding">
      <div>
        <img src={geico} alt="geico" />
      </div>
      <div>
        <img src={allstate} alt="allstate" />
      </div>
      <div>
        <img src={prudential} alt="prudential" />
      </div>
      <div>
        <img src={hsbc} alt="hsbc" />
      </div>
      <div>
        <img src={aig} alt="aig" />
      </div>
    </div>
  );
}
