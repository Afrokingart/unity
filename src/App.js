import React from "react";
import {
  Header,
  Features,
  Blog,
  Possibility,
  Unity,
  Footer,
} from "./containers/modules";

import { Navbar, Brand, CTA } from "./components/modules";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Unity />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
