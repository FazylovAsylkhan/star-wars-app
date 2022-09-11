import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./scss/style.scss";
import Wrapper from "./components/share/wrapper";
import Home from "./components/pages/homePage";
import People from "./components/pages/peoplePage";
import Planets from "./components/pages/planetsPage";
import Starships from "./components/pages/starshipsPage";
import NotFound from "./components/pages/notFoundPage";
import PersonalPage from "./components/pages/personalPage";

function App() {
  return (
    <Router>
      <Wrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/people" element={<People />} />
          <Route
            path="/people/:id"
            element={<PersonalPage urlPage="people" />}
          />
          <Route path="/planets" element={<Planets />} />
          <Route
            path="/planets/:id"
            element={<PersonalPage urlPage="planets" />}
          />
          <Route path="/starships" element={<Starships />} />
          <Route
            path="/starships/:id"
            element={<PersonalPage urlPage="starships" />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Wrapper>
    </Router>
  );
}

export default App;
