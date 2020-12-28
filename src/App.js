import React from "react";
import { Map } from "./Map";
import { ProfileWithAuth } from "./Profile";
import { LogInWithAuth } from "./logIn";
import { Register } from "./Register";
import { withAuth } from "./AuthContext";
import PropTypes from 'prop-types';
import "./App.css";

const pages = {
  map: (props) => <Map {...props} />,
  profile: (props) => <ProfileWithAuth {...props} />,
  logIn: (props) => <LogInWithAuth {...props} />,
  register:  <Register />,
};

class App extends React.Component {
  state = { currentPage: "logIn" };

  navigateTo = (page) => {
    if (this.props.isLoggedIn){
    this.setState({ currentPage: page });
    }else{
      this.setState({ currentPage: "logIn" });
    }
  };

  render() {
    return (
      <>
        <header>
          <nav>
            <ul>
              <li>
                <button
                  onClick={() => {
                    this.navigateTo("map");
                  }}
                >
                  Карта
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    this.navigateTo("profile");
                  }}
                >
                  Профиль
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    this.navigateTo("logIn");
                  }}
                >
                  Логин
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    this.navigateTo("register");
                  }}
                >
                  Регистрация
                </button>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <section>
            {pages[this.state.currentPage]({navigate:this.navigateTo})}
            </section>
        </main>
      </>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool
};

export default withAuth(App);
