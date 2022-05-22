import React from "react";
import "./footer.css";
import unityLogo from "../../assets/logo.svg";

export default function Footer() {
  return (
    <div className="unity__footer section__padding">
      <div className="unity__footer__heading">
        <h1 className="gradient__text">
          Minim mollit magna eu consequat duis eu commodo proident mollit elit
          do do.
        </h1>
      </div>

      <div className="unity__footer__btn">
        <p>Dolor est ipsum laboris aute.</p>
      </div>

      <div className="unity__footer__links">
        <div className="unity__footer__links__logo">
          <img src={unityLogo} alt="logo" />
          <p>
            Dolore amet aute dolore dolor ea laborum velit eiusmod esse est.
          </p>
        </div>
        <div className="unity__footer__links__div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="unity__footer__links__div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Careers</p>
        </div>
        <div className="unity__footer__links__div">
          <h4>Get In Touch</h4>
          <p>Occaecat nisi sunt G23 567 VK Officia proident.</p>
          <p>014-236580</p>
          <p>mail@email.ai</p>
        </div>
      </div>

      <div className="unity__footer__copyright">
        <p>
          @ {new Date().getFullYear()} <b>Unity</b>. All rights reserved.
        </p>
      </div>
    </div>
  );
}
