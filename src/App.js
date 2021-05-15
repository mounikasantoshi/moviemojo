import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Movies from "./components/pages/Movies";
import Music from "./components/pages/Music";

function App() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <Router>
        <Navbar sidebar={sidebar} showSidebar={showSidebar} />
        <Home sidebar={sidebar} />
        <Switch>
          {/* <Route path="/"></Route> */}
          <Route path="/movies" component={Movies} />
          <Route path="/music" component={Music} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
