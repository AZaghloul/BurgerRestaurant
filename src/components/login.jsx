import React, { Component } from "react";
import Joi from "joi-browser";

import Input from "./input";

class Login extends Component {
  state = {
    email: "",
    password: "",
    error: {}
  };

  schema = {
    email: Joi.string()
      .required()
      .label("Email"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  //   mail = React.createRef();

  componentDidMount() {
    // this.mail.current.focus();
  }

  validate = () => {
    const error = {};

    // //Validate Mail
    // if (this.state.email.trim() === "") error.email = "Email is Required.";
    // //Validate Password
    // if (this.state.password.trim() === "")
    //   error.password = "Password is Required.";

    //USING JOI
    const data = { ...this.state };
    delete data.error;
    const res = Joi.validate(data, this.schema, { abortEarly: false });

    if (res.error) {
      //Set State
      for (const detail of res.error.details) {
        error[detail.path[0]] = detail.message;
      }
      this.setState({ error });
      return false;
    }

    this.setState({ error });
    return true;
  };

  validateProperty = (property, propertyName) => {
    //Data
    const data = property;
    //Schema
    const schema = { [propertyName]: this.schema[propertyName] };

    const res = Joi.validate(data, schema);

    if (res.error === null) {
      delete this.state.error[propertyName];
    } else {
      //Clone
      const newError = { ...this.state.error };
      //Edit
      newError[propertyName] = res.error.details[0].message;
      //Set State
      this.setState({ error: newError });
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    // const userMail = document.querySelector("#email").value; // DONT USE
    // const userMail = this.mail.current.value; //Shouldnt USE
    if (this.validate()) {
      //===> Backend
      console.log("submited!!");
    } else {
      //Errors
      return;
    }
  };

  hadleChange = e => {
    //Validate
    this.validateProperty({ [e.target.name]: e.target.value }, e.target.name);

    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            label="Email Address"
            name="email"
            value={this.state.email}
            error={this.state.error.email}
            onChange={this.hadleChange}
          />
          <Input
            label="Password"
            name="password"
            value={this.state.password}
            error={this.state.error.password}
            onChange={this.hadleChange}
          />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default Login;
