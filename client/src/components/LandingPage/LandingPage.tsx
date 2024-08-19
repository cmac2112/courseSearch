import React, { useEffect, useState } from 'react'
import Layout from '../layout/Layout'
import './landingPage.css'
import 'leaflet/dist/leaflet.css';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import { MapContainer, useMap, TileLayer, Marker, Popup } from 'react-leaflet'
import L, { LatLngTuple } from 'leaflet'; // Add this line to import the 'L' object from the 'leaflet' library
import Header from '../Header';
import courseData from './courses.json'

interface Course {
  course: string;
  areaofstudy: string;
  rooms: Room;
}

interface Room {
  section: string;
  hours: string;
  schedule: string;
  days: string;
  building: string;
  room: string;
  instructor: string;
  coordinates: LatLngTuple;
}
const CourseList: React.FC = () => {
    const customIcon = L.icon({
        iconUrl: markerIcon,
        iconRetinaUrl: markerIcon2x,
        shadowUrl: markerShadow,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      });

//lol this is a mess, i ran out of time to setup a true backend so congratz if you made it this far
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


  const [userInput, setUserInput] = useState("");
  const [foundCourse, setFoundCourse] = useState<Course | null>(null);
  const getCourseData = (courseString: string) => {
    const formattedString: string = courseString.replace(/ /g, '')
      const foundCourse = courseData.find(course => course.course.toLowerCase().includes(formattedString.toLowerCase()))
      if (foundCourse){

      setFoundCourse({
        ...foundCourse,
        rooms: {
          ...foundCourse.rooms,
          coordinates: [
            Number(foundCourse?.rooms?.coordinates[0]),
            Number(foundCourse?.rooms?.coordinates[1])
          ] as LatLngTuple
        }
      });
      const coords: LatLngTuple = [Number(foundCourse?.rooms?.coordinates[0]), Number(foundCourse?.rooms?.coordinates[1])]
      console.log(coords)
      }else{
        console.error('Course not found')
      }
      return foundCourse
    }
  


  return (
    <div>
        <Header>Course Search</Header>
      <Layout>
        <div className="first-area">
      <h2 className="subtitle">BETA TEST</h2>
      <h3 className="subtitle">Search your course code to find its location on campus try: BIO110</h3>
      <p>by using this software you understand that this site is under construction and may not work at times, or change drastically between uses</p>
      
        <div className="input-area">
          <input className="input-area-type" type="text" 
          value = {userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Search for courses" />
          <button onClick={() => getCourseData(userInput)}>Search</button>
        </div>
        <div className="course-info">
        <h2>{foundCourse?.course}</h2>
        <p>Area of Study: {foundCourse?.areaofstudy}</p>
        <p>Section: {foundCourse?.rooms?.section}</p>
        <p>Hours: {foundCourse?.rooms?.hours}</p>
        <p>Schedule: {foundCourse?.rooms?.schedule}</p>
        <p>Days: {foundCourse?.rooms?.days}</p>
        <p>Building: {foundCourse?.rooms?.building}</p>
        <p>Room: {foundCourse?.rooms?.room}</p>
        <p>Instructor: {foundCourse?.rooms?.instructor}</p>
      </div>
        <MapContainer className="map-container" center={[38.074672, -97.342624]} zoom={18} style={{ height: "50vh", width: "70vh" }} layers={[lyr_sattelite, lyr_streets, lg_markers]}>
      <TileLayer
        url={mapbox_url}
        id='mapbox/streets-v11'
        maxZoom={18}
        tileSize={1028}
        zoomOffset={-1}
        attribution={mapbox_attribution}
      />
      {foundCourse && (
      <Marker position={foundCourse.rooms.coordinates} icon={customIcon}>
        <Popup>
          Approximate location of {foundCourse.course}
        </Popup>
      </Marker>
      )}
      <LayerControl />
    </MapContainer>
      </div>
      </Layout>
    </div>
  );
};

export default CourseList;