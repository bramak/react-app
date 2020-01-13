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
      <div className="listContainer">
        {this.state.businesses.map(item => {
          return (
            <div className="listItem" key={item.business_id}>
              <div
                className="listItem__thumbnail"
                style={{
                  backgroundImage: `url(${item.thumbnail}`
                }}
              ></div>
              <div className="listItem__details">
                <a href="#" className="listItemDetails__name">{item.name}</a>
                <div className="listItemDetails__ratings">{item.stars}</div>
                <button className="listItem__button" type="button">Reserve</button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Listing;
