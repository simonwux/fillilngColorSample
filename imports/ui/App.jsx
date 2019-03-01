import React, { Component } from "react";
import { Meteor } from "meteor/meteor";
import { withTracker } from 'meteor/react-meteor-data';


import CanvasPaint from "./CanvasPaint.jsx";
import AccountsUIWrapper from "./AccountsUIWrapper.js";

class App extends Component {
  render() {
    return (
      <div>
        <div>Collaborative Painting</div>

        <AccountsUIWrapper/>

        { Meteor.user() ?
          <CanvasPaint/> :
          <div>Please login to play!</div>
        }

        <div>Made by John with ♥️</div>
      </div>
    );
  }
}


export default withTracker(() => {
  return ({
    user:Meteor.user()
  });
})(App);



