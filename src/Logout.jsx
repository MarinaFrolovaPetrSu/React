import React, { Component } from "react";
import { connect } from "react-redux";
import { logOut } from "./actions";

export class LogoutFromProfile extends Component {
  unauthenticate = (event) => {
    event.preventDefault();
    this.props.logOut();
  };

  render() {
    return (
          <button onClick={this.unauthenticate}>Выход</button>
        );
  }
}

export const Logout = connect(null, { logOut })(LogoutFromProfile);