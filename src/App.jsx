import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./scss/style.scss";
import Wrapper from "./components/share/wrapper";
import Home from "./components/pages/homePage";
import People from "./components/pages/peoplePage";
import Planets from "./components/pages/planetsPage";
import Starships from "./components/pages/starshipsPage";
import NotFound from "./components/pages/notFoundPage";

function App() {
  return (
    <Router>
      <Wrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/people" element={<People />} />
          <Route path="/planets" element={<Planets />} />
          <Route path="/starships" element={<Starships />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Wrapper>
    </Router>
  );
}

export default App;
