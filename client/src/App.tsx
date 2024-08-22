import { HashRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import TestRoute from "./components/TestRoute";
import LeafletTest from "./components/Leaflet/LeafletTest";
import SearchPage from "./components/searchPage/SearchPage";
import LandingPage from "./components/LandingPage/LandingPage";
import About from "./components/About/About";
import "./index.css"
import Howto from "./components/Howto/Howto";

//figure out map stuff, preferrably a png or actualy maps depending on if they free
//need sidebar component
//need footer component


//get coordinates for each room
//figure out routes

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigate to ="/courseSearch/" />} />
        <Route path="/courseSearch/search" element={<SearchPage />} />
        <Route path="/courseSearch/test" element={<TestRoute />} />
        <Route path="/courseSearch/map" element={<LeafletTest />} />
        <Route path="/courseSearch/about" element={<About />} />
        <Route path="*" element={<Navigate to ="/courseSearch/" />} />
        <Route path="/courseSearch/howTo" element={<Howto />} />
        <Route path="/courseSearch/" element={<LandingPage />} />
      </Routes>
      </Router>
  );
  
}
