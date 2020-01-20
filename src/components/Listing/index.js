import React, { Component } from "react";
import "./styles.scss";
import Axios from "axios";

class Listing extends Component {
  state = {
    businesses: []
  };
  getBusinesses() {
    Axios.get("http://localhost:3001/business?_page=1").then(res => {
      this.setState({
        businesses: res.data
      });
    });
  }
  componentDidMount() {
    this.getBusinesses();
  }
  render() {
    return (
      <section className="listing">
        <div className="listContainer">
          {this.state.businesses.map(item => {
            return (
              <div className="listItem" key={item.business_id}>
                <div
                  className="listItem__top"
                  style={{
                    backgroundImage: `url(${item.thumbnail}`
                  }}
                >
                  <div className="listItemTop__details">
                    <div className="listItem__name">{item.name}</div>
                    <div className="listItem__ratings">{item.stars}</div>
                  </div>
                </div>
                <div className="listItem__bottom">
                  <button className="listItem__button" type="button">
                    View Details
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Listing;
