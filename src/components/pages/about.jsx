import React from "react";
import { Route, NavLink } from "react-router-dom";
import Team from "./team";
import Company from "./company";

const About = props => {
  return (
    <React.Fragment>
      <h1>About Us</h1>
      <div className="row">
        <div className="col-3">
          <ul className="list-group">
            <NavLink to="/about/company" className="list-group-item">
              About Company
            </NavLink>
            <NavLink to="/about/team" className="list-group-item">
              About Team
            </NavLink>
          </ul>
        </div>
        <div className="col">
          {/* Content */}
          <Route path="/about/team" component={Team} />
          <Route path="/about/company" component={Company} />
          <Route
            path="/about"
            exact
            render={() => <h1>This page about our team and company.</h1>}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
