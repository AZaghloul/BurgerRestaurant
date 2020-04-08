import React, { Component } from "react";
import queryString from "query-string";

class ContactUs extends Component {
  handleClick = e => {
    e.preventDefault();

    //Code

    //Navigate to PAGE
    this.props.history.replace("/"); //push
  };

  render() {
    const qs = queryString.parse(this.props.location.search);
    return (
      <React.Fragment>
        <h1>Contact Us</h1>
        <h2>Customer Service</h2>
        <h3>Customer Agent No. {qs.id}</h3>
        <h3>Name: {qs.name}</h3>
        <br />
        <br />
        <br />
        <br />
        <button onClick={this.handleClick} className="btn btn-secondary">
          To Home Page
        </button>
      </React.Fragment>
    );
  }
}

export default ContactUs;
