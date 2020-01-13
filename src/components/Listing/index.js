import React, { Component } from "react";
import "./styles.scss";
import Axios from "axios";

export default class Listing extends Component {
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
      <div>
        {this.state.businesses.map(item => {
          return (
            <div className="listItem" key={item.business_id}>
              <div
                className="listItem__thumbnail"
                style={{
                  backgroundImage: `url(https://s3-media0.fl.yelpcdn.com/bphoto/${item.thumbnail}/m.jpg)`
                }}
              ></div>
              <p className="listItem__name">{item.name}</p>
              <div className="listItem__ratings">{item.stars}</div>
            </div>
          );
        })}
      </div>
    );
  }
}
