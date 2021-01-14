import React, { Component } from "react";
import {PropTypes} from "prop-types";
import { connect } from "react-redux";
import { authenticate } from "./actions";
import { Link } from "react-router-dom";

export class logInPage extends Component {

  authenticate = (event) => {
    event.preventDefault();
    const { email, password } = event.target;
    this.props.authenticate(email.value, password.value);
  };

  render() {
    return (
      <>
        {this.props.isLoggedIn ? (
          <p>
            Вход выполнен{" "} 
            <Link to="/Profile"> Перейти в профиль </Link>
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

logInPage.propTypes = {
  isLoggedIn: PropTypes.bool,
  logIn: PropTypes.func,
  navigate: PropTypes.func
};

export const LogInWithAuth = connect(
  (state) => ({isLoggedIn:state.auth.isLoggedIn}),
  { authenticate }
)(logInPage);
