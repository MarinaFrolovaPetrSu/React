import React, {Component} from "react";
import mapboxgl from "mapbox-gl";

export class Map extends Component {
  map = null;
  mapContainer = React.createRef();

componentDidMount(){
  mapboxgl.accessToken = "pk.eyJ1IjoibWZyb2xvdmEiLCJhIjoiY2tqN3F5dzk0NHMwNjJzbjRzZDIwYTMwdCJ9.SxxUvqy-ZXsmfybu0ZFeEQ"

  this.map = new mapboxgl.Map({
    container: this.mapContainer.current,
    style: "mapbox://styles/mapbox/streets-v11",
    center: [34.3527615, 61.7837833],
    zoom: 9,
  })
}

componentWillUnmount(){
  this.map.remove();
}
  render() {
    return (
    <div className = "map-wrapper">
      <div data-testid="map" className="map" ref={this.mapContainer} />
    </div>
    );
  }
}