import React from "react";
import { Map } from "./Map";
import  Profile  from "./Profile";
import { LogInWithAuth } from "./logInPage";
import { Register } from "./Register";
import PropTypes from "prop-types";
import "./App.css";
import { connect } from "react-redux";
import { Switch, Route, Link } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import background from "./img/background.png";
import logo from "./img/logo.png";

class App extends React.Component {
  render() {
    return (
      <>
        <div
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
          }}
        >
          <header id="mainHeader"
            style={{
              backgroundColor: "#fff",
              boxShadow:
                "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
              position: "relative",
              zIndex: "1",
            }}
          >
            <div style={{ display: "flex" }}>
              <div style={{ width: "65%" }}>
                <img src={logo} alt={"logo"} />
              </div>
              <nav>
                <ul
                  style={{
                    margin: "18px",
                    display: "inline-flex",
                    textDecoration: "none",
                  }}
                >
                  <li>
                    <Link to="/Map" className="linkFromHeader">
                      <button className="btnHeader">Карта</button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/Profile">
                      <button className="btnHeader">Профиль</button>
                    </Link>
                  </li>
                  <li>
                    
                  </li>
                </ul>
              </nav>
            </div>
          </header>
          <main>
            <section>
              <Switch>
                <PrivateRoute path="/map" component={Map} />
                <PrivateRoute path="/profile" component={Profile}/>
                <Route exact path="/" component={LogInWithAuth} />
                <Route exact path="/register" component={Register} />
              </Switch>
            </section>
          </main>
        </div>
      </>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default connect((state) => ({ isLoggedIn: state.auth.isLoggedIn }))(App);
