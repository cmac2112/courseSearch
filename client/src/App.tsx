import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";
import ApiExample from "./components/ApiExample";
import TestRoute from "./components/TestRoute";

import LeafletTest from "./components/Leaflet/LeafletTest";

//figure out map stuff, preferrably a png or actualy maps depending on if they free
//need sidebar component
//need footer component


//get coordinates for each room
//figure out routes

export default function App() {
  return (
    <BrowserRouter>
    <HashRouter>
      <Routes>
        <Route path="/courseSearch/" element={<ApiExample />} />
        <Route path="/courseSearch/test" element={<TestRoute />} />
        <Route path="/courseSearch/map" element={<LeafletTest />} />
      </Routes>
      </HashRouter>
    </BrowserRouter>
  );
  
}
