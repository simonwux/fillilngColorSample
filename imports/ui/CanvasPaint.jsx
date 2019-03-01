import React, { Component } from "react";
import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";
import PropTypes from "prop-types";

import { Points } from "../api/points.js";

class CanvasPaint extends Component {
  redraw() {
    // Points.insert({
    //   x: Math.random()*400,
    //   y: Math.random()*400,
    //   player: "John"
    // });
    const ctx = this.canvas.getContext("2d");

    ctx.fillStyle = "olive";


    for (const p of this.props.points) {
      ctx.fillRect(p.x, p.y, 5, 5);
    }
  }

  componentDidMount() {
    this.redraw();
  }

  componentDidUpdate() {
    this.redraw();
  }

  render() {
    return (
      <div>
        <div>Playing as {Meteor.user().username}</div>
        <canvas
          width="400"
          height="400"
          style={{ backgroundColor: "#eee" }}
          ref={canvas => (this.canvas = canvas)}
        />
      </div>
    );
  }
}

CanvasPaint.propTypes = {
  points : PropTypes.arrayOf(PropTypes.object).isRequired
};


export default withTracker(() => {
  return {
    points: Points.find({}).fetch()
  };
})(CanvasPaint);







