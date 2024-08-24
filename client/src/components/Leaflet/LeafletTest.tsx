import {useEffect} from 'react'
import 'leaflet/dist/leaflet.css';
import { MapContainer, useMap, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'; // Add this line to import the 'L' object from the 'leaflet' library

const LeafletTest = () => {
  var mapbox_url = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoiam9ubnltY2N1bGxhZ2giLCJhIjoiY2xsYzdveWh4MGhwcjN0cXV5Z3BwMXA1dCJ9.QoEHzPNq9DtTRrdtXfOdrw';
        var mapbox_attribution = '© Mapbox © OpenStreetMap Contributors';
        var esri_url ='https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';
        var esri_attribution = '© Esri © OpenStreetMap Contributors';
  const lyr_sattelite = L.tileLayer(mapbox_url, { id: 'mapbox/satellite-v9', attribution: mapbox_attribution });
  const lyr_streets = L.tileLayer(esri_url, { attribution: esri_attribution });
  const marker = L.marker([38.074672, -97.342624]);
  const lg_markers = L.layerGroup([marker]);
  
  const baseMaps = {
    "Streets": lyr_streets,
    "Satellite": lyr_sattelite
  }
  const overlayMaps = {
    "Markers": lg_markers
  }

  const LayerControl = () => {
    const map = useMap();
   useEffect(() =>{ 
    L.control.layers(baseMaps, overlayMaps).addTo(map);}, [map]);
    return null;
  }
  return (
      <MapContainer center={[38.074672, -97.342624]} zoom={18} style={{ height: "80vh", width: "50%" }} layers={[lyr_sattelite, lyr_streets, lg_markers]}>
      <TileLayer
        url={mapbox_url}
        id='mapbox/streets-v11'
        maxZoom={18}
        tileSize={1028}
        zoomOffset={-1}
        attribution={mapbox_attribution}
      />
      <Marker position={[38.074672, -97.342624]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <LayerControl />
    </MapContainer>
  );
}

export default LeafletTest;