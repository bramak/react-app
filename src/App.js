import React from "react";
import "./App.scss";
import Listing from "./components/Listing";
import Details from "./components/Details";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="appContainer">
      {/* <Hero /> */}
      <Listing />
      {/* <section className="details">
        <Details />
      </section> */}
    </div>
  );
}

export default App;
