import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Wrapper from "./components/shared/wrapper";
import {
  Home,
  People,
  Planets,
  Starships,
  NotFound,
  PersonalPage,
} from "./components/pages";
import "./scss/style.scss";

function App() {
  return (
    <Router>
      <Wrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/people" element={<People />} />
          <Route
            path="/people/:id"
            element={<PersonalPage namePage="people" />}
          />
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
      </Wrapper>
    </Router>
  );
}

export default App;
