import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./components/router/AppRoutes";
import Wrapper from "./components/shared/wrapper";

import "./scss/style.scss";

function App() {
  return (
    <Router>
      <Wrapper>
        <AppRoutes />
      </Wrapper>
    </Router>
  );
}

export default App;
