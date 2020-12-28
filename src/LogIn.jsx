import React, { Component } from "react";
import {PropTypes} from "prop-types";
import { withAuth } from "./AuthContext";

export class logIn extends Component {
  goToProfile = (event) => {
  event.preventDefault();
  this.props.navigate("profile");
};

  authenticate = (event) => {
    event.preventDefault();
    const { email, password } = event.target;
    this.props.logIn(email.value, password.value);
  };

  render() {
    return (
      <>
        {this.props.isLoggedIn ? (
          <p>
            Вход выполнен{" "} 
            <button onClick={this.goToProfile}>Перейти в профиль</button>
          </p>
        ) : (
          <form onSubmit={this.authenticate}>
            <label htmlFor="email">E-mail:</label>
            <input id="email" type="email" name="email" size="28" />
            <label htmlFor="password">Password:</label>
            <input id="password" type="password" name="password" size="28" />
            <button type="submit">Войти</button>
          </form>
        )}
      </>
    );
  }
}

logIn.propTypes = {
  isLoggedIn: PropTypes.bool,
  logIn: PropTypes.func,
  navigate: PropTypes.func
};

export const LogInWithAuth = withAuth(logIn);
