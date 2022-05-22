import React, { useState } from "react";
import { RiMenu3Fill, RiCloseLine } from "react-icons/ri";
import unityLogo from "../../assets/logo.svg";
import "./navbar.css";

function Menu() {
  return (
    <>
      <p>
        <a href="#home">Home</a>
      </p>
      <p>
        <a href="#unity">What Is Unity</a>
      </p>
      <p>
        <a href="#explore">Explore</a>
      </p>
      <p>
        <a href="#possibility">Possibilities</a>
      </p>
      <p>
        <a href="#blog">Blog</a>
      </p>
    </>
  );
}

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="unity__navbar">
      <div className="unity__navbar__links">
        <div className="unity__navbar__links__logo">
          <img src={unityLogo} alt="logo" />
        </div>
        <div className="unity__navbar__links__container">
          <Menu />
        </div>
      </div>

      <div className="unity__navbar__sign">
        <button type="button">Sign In</button>
      </div>

      <div className="unity__navbar__menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Fill
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}

        {toggleMenu && (
          <div className="unity__navbar__menu__container scale__up__center">
            <div className="unity__navbar__menu__links__container">
              <Menu />

              <div className="unity__navbar__menu__links__container__sign">
                <button type="button">Sign In</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
