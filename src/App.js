import React from "react";
import "./App.scss";
import Login from "./components/Login";
import Listing from "./components/Listing";
import Details from "./components/Details";
import Header from "./components/Header";

function App() {
  return (
    <div className="appContainer">
      <div className="header">
        <Header />
      </div>
      <div className="listing">
        <Listing />
      </div>
      <div className="details">
        <Details />
      </div>
      {/* <Login /> */}
    </div>
  );
}

export default App;
