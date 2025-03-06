import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MapPage from "./page/mapPage";
import HomePage from "./page/homePage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/map" element={<MapPage />}/>
        <Route path="/wait-times" element={<Page title="Estimated Wait Times" />} />
        <Route path="/updates" element={<Page title="Live Updates" />} />
        <Route path="/ordering" element={<Page title="Mobile Ordering & Pickup" />} />
        <Route path="/cameras" element={<Page title="Live Camera Feeds" />} />
      </Routes>
    </Router>
  );
};

const Page = ({ title }) => {
  return (
    <div className="page">
      <h2>{title}</h2>
      <p>Content for {title} will go here.</p >
    </div>
  );
};

export default App;