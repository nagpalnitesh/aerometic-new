import "./App.css";

import "bootstrap";

import React from "react";
import Home from "./components/Home";
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";
import Contactus from "./components/ContactUs";
import AboutUs from "./components/AboutUs";
import Products from "./components/Products";
import Services from "./components/Services";
import Aerosol from "./components/Aerosol";
import PersonalCare from "./components/PersonalCare";
import Perfumes from "./components/Perfumes";
import Packaging from "./components/Packaging";
import HomeCare from "./components/HomeCare";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contactus" component={Contactus} />
          <Route path="/products" component={Products} />
          <Route path="/services" component={Services} />
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/aerosol" component={Aerosol} />
          <Route path="/perfumes" component={Perfumes} />
          <Route path="/homecare" component={HomeCare} />
          <Route path="/personalcare" component={PersonalCare} />
          <Route path="/packaging" component={Packaging} />
          <Redirect to="/"></Redirect>
        </Switch>
      </Router>
    </>
  );
};

export default App;
