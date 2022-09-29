import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  People,
  Planets,
  Starships,
  NotFound,
  PersonalPage,
} from "../pages";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/people" element={<People />} />
      <Route path="/people/:id" element={<PersonalPage namePage="people" />} />
      <Route path="/planets" element={<Planets />} />
      <Route
        path="/planets/:id"
        element={<PersonalPage namePage="planets" />}
      />
      <Route path="/starships" element={<Starships />} />
      <Route
        path="/starships/:id"
        element={<PersonalPage namePage="starships" />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
