import Home from "./home";
import Contact from "./contact";
import Dog from "./dog";
import Notfound from "./notfound";
import Adopt from "./adopt";
import Volunteer from "./volunteer";
import Information from "./information";
import Donation from "./donation";
import Resources from "./resources";
import React from "react";
import "../CSS/body.css";
import { Route, Switch } from "react-router-dom";

const Body = () => {
  return (
    <div>
      <div className="mainTop">
        <div className="logo1" />
        <div />
      </div>

      <div className="content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/dog" component={Dog} />
          <Route path="/contact" component={Contact} />
          <Route path="/adopt" component={Adopt} />
          <Route path="/volunteer" component={Volunteer} />
          <Route path="/information" component={Information} />
          <Route path="/donation" component={Donation} />
          <Route path="/resources" component={Resources} />
          <Route component={Notfound} />
        </Switch>
      </div>
    </div>
  );
};
export default Body;
