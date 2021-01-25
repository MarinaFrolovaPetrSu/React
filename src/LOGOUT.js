import React, { Component } from "react";
import { connect } from "react-redux";
import { logOut } from "./actions";

export class Profile extends Component {
  unauthenticate = (event) => {
    event.preventDefault();
    this.props.logOut();
  };

  render() {
    return (
        <p>
          Profile.
          <button onClick={this.unauthenticate}>Выход</button>
        </p>
        );
  }
}

export const ProfileWithAuth = connect(null, { logOut })(Profile);