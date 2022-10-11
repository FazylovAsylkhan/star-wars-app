import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, NotFound, PersonalPage, PreviewPage } from "../pages";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/people" element={<PreviewPage namePage="people" />} />
      <Route path="/people/:id" element={<PersonalPage namePage="people" />} />
      <Route path="/planets" element={<PreviewPage namePage="planets" />} />
      <Route
        path="/planets/:id"
        element={<PersonalPage namePage="planets" />}
      />
      <Route path="/starships" element={<PreviewPage namePage="starships" />} />
      <Route
        path="/starships/:id"
        element={<PersonalPage namePage="starships" />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
