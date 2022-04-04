/* eslint-disable */

// Component
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";

// Pages
import Home from "./pages/Home.js";
import San from "./pages/San.js";
import About from "./pages/About.js";

// Scss
import "./styles/reset.scss";
import "./styles/App.scss";

// 라우터
import { Link, Route, Switch, useHistory } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch>
        {/* Home */}
        <Route exact path="/">
          <Home />
        </Route>

        {/* Project1 */}
        <Route exact path="/project/01">
          <San />
        </Route>

        <Route exact path="/about">
          <About />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
