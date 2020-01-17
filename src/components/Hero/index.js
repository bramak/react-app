import React, { Component } from "react";
import "./styles.scss";

class Hero extends Component {
  render() {
    return (
      <section className="hero">
        <h1>Looking to dine out?</h1>
        <article>
          <p>
            Explore restaurants and book a table with just one click.
          </p>
          <button type="button">Browse Restaurants</button>
        </article>
      </section>
    );
  }
}

export default Hero;
