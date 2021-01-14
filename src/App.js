import React from "react";
import { Map } from "./Map";
import { ProfileWithAuth } from "./Profile";
import { LogInWithAuth } from "./logInPage";
import { Register } from "./Register";
import PropTypes from "prop-types";
import "./App.css";
import { connect } from "react-redux";
import { Switch, Route, Link } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";

class App extends React.Component {
  render() {
    return (
      <>
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/Map">Карта</Link>
              </li>
              <li>
                <Link to="/Profile">Профиль</Link>
              </li>
              <li>
                <Link to="/">Логин</Link>
              </li>
              <li>
                <Link to="/Register">Регистрация</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <section>
            <Switch>
              <PrivateRoute path="/map" component={Map} />
              <PrivateRoute path="/profile" component={ProfileWithAuth} />
              <Route exact path="/" component={LogInWithAuth} />
              <Route exact path="/register" component={Register} />
            </Switch>
          </section>
        </main>
      </>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default connect((state) => ({ isLoggedIn: state.auth.isLoggedIn }))(App);
