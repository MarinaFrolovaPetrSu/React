import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import "./App.css";
import { authenticate } from "./actions";
import { Link } from "react-router-dom";
import logoWhite from "./img/logoWhite.png";
import { Redirect } from "react-router-dom";

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
          <Redirect to="/map" />
        ) : (
             <div
              style={{
                width: "100%",
                display: "flex",
                flexWrap: "wrap",
                boxSizing: "border-box",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div id="animatedExample" className="animated bounceInLeft">
                <img src={logoWhite} alt={"logoWhite"} />
              </div>
              <div
                style={{
                  backgroundColor: "white",
                  padding: "25px 45px",
                  minWidth: "500px",
                  marginTop: "100px",
                  borderRadius: "4px",
                  marginLeft: "15%",
                }}
              >
                <h1
                  style={{
                    fontSize: "2.125rem",
                    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                    fontWeight: "400",
                    lineHeight: "1.17",
                    letterSpacing: "0.00735em",
                    marginBottom: "30px",
                  }}
                >
                  Войти
                </h1>
                <p
                  style={{
                    fontSize: "18px",
                    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                    fontWeight: "400",
                    lineHeight: "1.5",
                    letterSpacing: "0.00938em",
                  }}
                >
                  Новый пользователь?{" "}
                  <Link
                    to="/Register"
                    style={{
                      color: "#1473e6",
                      cursor: "pointer",
                      fontSize: "inherit",
                    }}
                  >
                    Зарегистрируйтесь
                  </Link>
                </p>
                <form
                  onSubmit={this.authenticate}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    flexWrap: "wrap",
                  }}
                >
                  <input
                    className="inputLogin"
                    id="email"
                    type="email"
                    name="email"
                    size="28"
                    placeholder="Имя пользователя"
                  />
                  <input
                    className="inputLogin"
                    id="password"
                    type="password"
                    name="password"
                    size="28"
                    placeholder="Пароль"
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

/*const toHide = () => {
  var elem = document.getElementById("mainHeader");
  elem.style.visibility = "hidden";
};*/

logInPage.propTypes = {
  isLoggedIn: PropTypes.bool,
  logIn: PropTypes.func,
  navigate: PropTypes.func,
};

export const LogInWithAuth = connect(
  (state) => ({ isLoggedIn: state.auth.isLoggedIn }),
  { authenticate }
)(logInPage);
