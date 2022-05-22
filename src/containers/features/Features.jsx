import React from "react";
import "./features.css";
import { Feature } from "../../components/modules";

const featuresData = [
  {
    title: "Whispering Destiny",
    text: "Excepteur et nostrud quis quis non dolor exercitation laboris ipsum magna pariatur. Id magna id consectetur ex adipisicing non non qui. Incididunt aute do consequat esse sint fugiat.",
  },
  {
    title: "Night of Dragon",
    text: "Reprehenderit velit proident laboris quis veniam qui non sunt laborum exercitation cillum do voluptate nulla. Eiusmod reprehenderit quis duis nostrud quis. Elit nisi qui quis eu ea qui.",
  },
  {
    title: "Frozen Roses",
    text: "Labore est ex laboris dolore laborum Lorem consequat consequat est deserunt esse commodo minim est. Excepteur exercitation id nulla nostrud adipisicing. Pariatur labore ad dolore.",
  },
];

export default function Features() {
  return (
    <div className="unity__features section__padding" id="explore">
      <div className="unity__features__heading">
        <h1 className="gradient__text">
          Irure proident nisi enim ipsum culpa laborum exercitation eu occaecat
          nulla. Quis non consequat nisi ex adipisicing Lorem aliqua mollit
          incididunt deserunt ex.
        </h1>
        <p>Amet veniam qui fugiat ad Lorem.</p>
      </div>
      <div className="unity__features__container">
        {featuresData.map((item, index) => (
          <Feature
            title={item.title}
            text={item.text}
            key={item.title + index}
          />
        ))}
      </div>
    </div>
  );
}
