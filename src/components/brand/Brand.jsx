import React from "react";
import "./brand.css";
import { google, slack, atlassian, dropbox, shopify } from ".";

export default function Brand() {
  return (
    <div className="unity__brand section__padding">
      <div>
        <img src={google} alt="google" />
      </div>
      <div>
        <img src={slack} alt="slack" />
      </div>
      <div>
        <img src={dropbox} alt="dropbox" />
      </div>
      <div>
        <img src={atlassian} alt="atlassian" />
      </div>
      <div>
        <img src={shopify} alt="shopify" />
      </div>
    </div>
  );
}
