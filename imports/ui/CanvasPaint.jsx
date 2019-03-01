import React, { Component } from "react";
import { Meteor } from "meteor/meteor";

export default class CanvasPaint extends Component {
  render() {
    return (
      <div>
        <div>Playing as {Meteor.user().username}</div>
        <canvas width="400" height="400" style={{ "backgroundColor": "#eee" }} />
      </div>
    );
  }
}