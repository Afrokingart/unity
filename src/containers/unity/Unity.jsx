import React from "react";
import "./unity.css";
import { Feature } from "../../components/modules";

export default function Unity() {
  return (
    <div className="unity__unity3 section__margin" id="unity">
      <div className="unity__unity3__feature">
        <Feature
          title="What Is Unity"
          text="Cillum eiusmod fugiat consequat reprehenderit tempor enim duis nostrud consectetur magna et cillum et. Ea ut ad sunt fugiat ex et sint duis aliquip nisi cillum. Minim dolor nulla nostrud magna adipisicing proident irure officia aute eiusmod ut labore."
        />
      </div>
      <div className="unity__unity3__heading">
        <h1 className="gradient__text">
          Incididunt aute commodo officia quis deserunt.
        </h1>
        <p>Elit aliqua consequat duis.</p>
      </div>
      <div className="unity__unity3__container">
        <Feature
          title="Generic X"
          text="Velit velit sit ipsum deserunt quis. Dolore esse minim dolor fugiat et eiusmod cupidatat. Officia ex occaecat qui minim Lorem ad."
        />
        <Feature
          title="Survival"
          text="Ut duis laboris qui elit est commodo. Earou consequat do quis non culpa laboris commodo officia nulla nostrud dolore."
        />
        <Feature
          title="Visionary"
          text="Proident non fugiat eiusmod labore officia consectetur deserunt. Et esse aliqua aute ipsum esse incididunt nisi nisi culpa eiusmod."
        />
      </div>
    </div>
  );
}
