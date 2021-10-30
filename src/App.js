//necessary imports from React
import { React, useState } from "react";
//Map component
import Map from "./components/Map.js";
//core import from leaflet
import L from "leaflet";
//default icon shadow
import iconShadow from "leaflet/dist/images/marker-shadow.png";
//import east facing swim icon
import swimE from "./img/swimmingE.png";
//import west facing swim icon
import swimW from "./img/swimmingW.png";
//import styles object
import { styles } from "./styles/styles.js";

function App() {
  //initial marker location
  const [marker, setMarker] = useState({
    lat: 44.53588109384346,
    lon: -72.52449991970748,
  });
  //initial marker icon
  const [icon, setIcon] = useState(swimE);

  //creating the Leaflet marker icon object
  const markerIcon = new L.Icon({
    //iconUrl is our icon state
    iconUrl: icon,
    iconShadow: iconShadow,
  });

  //click event for moving the icon marker
  const moveMarker = (event) => {};
  //destructuring marker for our use

  //creating intermediary variable that holds the id of the button

  //if Go East button is clicked

  //set the lat to the initial lat

  //set the lon to the initial lon plus amount

  //set the icon to the east facing icon

  //if Go West button is clicked

  //set the lat to the initial lat

  //set the lon to the initial lon minus amount

  //set the icon to the west facing icon

  return (
    <>
      <div style={styles.App}>
        <h1 style={styles.Theme.font}>1-800-R-U-SWIMMIN'?</h1>
        <Map marker={marker} icon={markerIcon} setIcon={setIcon} />
      </div>
      <div style={styles.App.buttonBox}>
        <button style={styles.App.button} id="east" onClick={moveMarker}>
          Go East
        </button>
        <button style={styles.App.button} id="west" onClick={moveMarker}>
          Go West
        </button>
      </div>
    </>
  );
}

export default App;
