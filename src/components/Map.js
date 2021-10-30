//necessary imports from React
import React, { useEffect } from "react";
//necessary imports from react-leaflet
import { MapContainer, TileLayer, Marker, Polygon } from "react-leaflet";
//necessary imports from leaflet
import L from "leaflet";
import "leaflet/dist/leaflet.css";

//importing our geoJSON
import elmoreData from "../data/elmoreData";
//importing leaflet-pip
import leafletPip from "@mapbox/leaflet-pip";
//importing styles object
import { styles } from "../styles/styles.js";
//importing icon for "not swimmin'"
import notSwim from "../img/notSwimming.png";

//creating space in memory for h2 to be generated logically
let h2;

export default function Map(props) {
  //useEffect hook for leaflet pip to take effect every rerender of the component

  useEffect(() => {
    //turning our file into a L.geoJSON
    let geoJson = L.geoJSON(elmoreData);

    //getting lat from props
    let lat = props.marker.lat;
    //getting lon from props
    let lon = props.marker.lon;

    //getting the result of the layer length by using leaflet-pip
    let layerLength = leafletPip.pointInLayer([lon, lat], geoJson).length;

    //if the layer is greater than 0
    if (layerLength > 0) {
      //render h2 to reflect this
      h2 = <h2 style={styles.Theme.font}>You are swimmin'!</h2>;
      //if the layer is 0
    } else {
      //render h2 to reflect this
      h2 = <h2 style={styles.Theme.font}>You are not swimmin'!</h2>;
      //use our passed state handler to set the icon
      props.setIcon(notSwim);
    }
  });

  //reorder the coordinates in elmoreData for Leaflet
  let elmOutline = elmoreData.geometry.coordinates[0].map((coords) => [
    coords[1],
    coords[0],
  ]);

  return (
    <>
      {h2}
      <div id="mapContainer">
        <MapContainer
          center={[44.53363491438911, -72.52608565063338]}
          zoom={15}
          style={{ height: "60vh", width: "60vh" }}
        >
          <TileLayer
            url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
            attribution='Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
          />

          <Polygon positions={elmOutline} pathOptions={{ color: "blue" }} />
          <Marker position={props.marker} icon={props.icon} />
        </MapContainer>
      </div>
    </>
  );
}
