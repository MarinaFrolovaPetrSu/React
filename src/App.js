import React from "react";
import {Map} from './Map'
import {Profile} from './Profile'
import {LogIn} from './LogIn'
import {Register} from './Register'
import "./App.css";

const pages = {
  map: <Map />,
  profile: <Profile />,
  logIn: <LogIn />,
  register: <Register />,
};

class App extends React.Component {
  state = { currentPage: "map" };

  navigateTo = (page) => {
    this.setState({ currentPage: page });
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
          <section>{pages[this.state.currentPage]}</section>
        </main>
      </>
    );
  }
}

export default App;
