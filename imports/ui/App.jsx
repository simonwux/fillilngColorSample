import React, { Component } from "react";


import AccountsUIWrapper from "./AccountsUIWrapper.js";

export default class App extends Component {
  render() {
    return (
      <div>
        <div>Collaborative Painting</div>

        <AccountsUIWrapper/>

        <div>Made by John with ♥️</div>
      </div>
    );
  }
}