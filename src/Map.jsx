import React, { Component } from "react";
import mapboxgl from "mapbox-gl";
import { Link } from "react-router-dom";
import "./index.css";
import Header from "./Header";

export class Map extends Component {
  map = null;
  mapContainer = React.createRef();

  componentDidMount() {
    mapboxgl.accessToken =
      "pk.eyJ1IjoibWZyb2xvdmEiLCJhIjoiY2tqN3F5dzk0NHMwNjJzbjRzZDIwYTMwdCJ9.SxxUvqy-ZXsmfybu0ZFeEQ";

    this.map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [34.3527615, 61.7837833],
      zoom: 9,
    });
  }

  componentWillUnmount() {
    this.map.remove();
  }
  render() {
    return (
      <div>
        <Header />
        <div className="map-wrapper">
          <div>
            <div data-testid="map" className="map" ref={this.mapContainer} />
            <div
              style={{
                backgroundColor: "#fff",
                borderRadius: "4px",
                boxShadow:
                  "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
                position: "absolute",
                zIndex: "1",
                bottom: "50%",
                left: "2%",
                maxWidth: "30%",
              }}
            >
              <div style={{ margin: "30px" }}>
                <h1
                  style={{
                    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                    fontSize: "2.125rem",
                    fontWeight: "400",
                    letterSpacing: "0.00735em",
                  }}
                >
                  Заполните платежные данные
                </h1>
                <p
                  style={{
                    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                    lineHeight: "1.5",
                    letterSpacing: "0.00938em",
                  }}
                >
                  Укажите информацию о банковской карте, чтобы сделать заказ.
                </p>
                <Link to="/Profile">
                  <button className="btn btnMap" type="submit">
                    Перейти в Профиль
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
