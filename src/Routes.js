import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";

import LandingPage from "./components/LandingPage";
import App from "./App";
import { SolarSystemView } from "./components/SolarSystemView";
import InfoPage from "./components/InfoPage"
import TestingGround from "./components/testingGround";

// import NotFoundPage from "./NotFoundPage";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/home" element={<SolarSystemView />} />
        <Route path="/learnMore"  element={<InfoPage />}  />
        <Route path="testing" element={<TestingGround/>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
