import React from "react";
import "./App.scss";
import Listing from "./components/Listing";
import Details from "./components/Details";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="appContainer">
      <Hero />
      {/* <section className="listing">
        <Listing />
      </section>
      <section className="details">
        <Details />
      </section> */}
    </div>
  );
}

export default App;
