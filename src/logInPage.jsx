import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import "./App.css";
import { authenticate } from "./actions";
import { Link } from "react-router-dom";
import logoWhite from "./img/logoWhite.png";

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
          <Link to="/Map">
            <button className="btn" type="submit">Перейти к Карте</button>
          </Link>
        ) : (
          <div
            style={{
              width: "100%",
              display: "flex",
              flexWrap: "wrap",
              boxSizing: "border-box",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "90vh",
            }}
          >
            <div id="animatedExample" className="animated bounceInLeft">
              <img src={logoWhite} alt={"logoWhite"} />
            </div>
            <div
              style={{
                backgroundColor: "white",
                padding: "44px 60px",
                minWidth: "500px",
                marginTop: "48px",
                marginBottom: "48px",
                borderRadius: "4px",
              }}
            >
              <form onSubmit={this.authenticate}>
                <label htmlFor="email">E-mail:</label>
                <input id="email" type="email" name="email" size="28" />
                <label htmlFor="password">Password:</label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  size="28"
                />
                <button className="btn btnLogin" type="submit">
                  Войти
                </button>
              </form>
            </div>
          </div>
        )}
      </>
    );
  }
}

logInPage.propTypes = {
  isLoggedIn: PropTypes.bool,
  logIn: PropTypes.func,
  navigate: PropTypes.func,
};

export const LogInWithAuth = connect(
  (state) => ({ isLoggedIn: state.auth.isLoggedIn }),
  { authenticate }
)(logInPage);
