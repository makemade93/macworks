/* eslint-disable */

//ReactHook
import React, { useEffect, useState } from "react";
import { Link, Route, Switch, useHistory } from "react-router-dom";

// Component
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";

// Pages
import Home from "./pages/Home.js";
import San from "./pages/San.js";
import About from "./pages/About.js";
import Article from "./pages/Article.js";

// Scss
import "./styles/reset.scss";
import "./styles/App.scss";

// Props
import projectData from "./projectData.js";
import articleData from "./articleData.js";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch>
        {/* Home */}
        <Route exact path="/">
          <Home projectData={projectData} />
        </Route>

        {/* Project1 */}
        <Route exact path="/projects/1">
          <San />
        </Route>

        <Route exact path="/about">
          <About />
        </Route>

        <Route exact path="/article">
          <Article projectData={articleData} />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
