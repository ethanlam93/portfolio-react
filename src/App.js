import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";
import noMatch from "./components/pages/noMatch"
import "./bulma.css";
import "./style.css";
import Header from "./components/component/Header"
import Footer from "./components/component/Footer"
import HeroBody from "./components/component/HeroBody"



function App() {


  return (<>
    <Router basename="/portfolio-react">
      <Header />
      <HeroBody>
        <Switch>
          <Route exact path={["/"]} component={Home} />
          <Route exact path={["/portfolio/"]} component={Portfolio} />
          <Route exact path={["/contact"]} component={Contact} />
          <Route component={noMatch} />
        </Switch>
      </HeroBody>
      <Footer />
    </Router>
  </>
  )
}

export default App;
