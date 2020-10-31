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
  const [state, setState] = useState({
    home: "",
    portfolio: "",
    contact: ""
  })

  useEffect(() => {
    const path = window.location.pathname;
    console.log(path)
    if (path === "/contact") {
      setState({
        ...state,
        contact: "page"
      })
    }
    else if (path === "/portfolio") {
      setState({
        ...state,
        portfolio: "page",

      })
    }
    else if (path === "/" || path === "/home") {
      setState({
        ...state,
        home: "page",

      })
    }
  });

  return (<>
    <Router basename="/portfolio-react">
      <Header currentPage={state} />
      <HeroBody>
        <Switch>
          <Route exact path={["/portfolio-react/"]} component={Home} />
          <Route exact path={["/portfolio-react/portfolio/"]} component={Portfolio} />
          <Route exact path={["/portfolio-react/contact"]} component={Contact} />
          <Route component={noMatch} />
        </Switch>
      </HeroBody>
      <Footer />
    </Router>
  </>
  )
}

export default App;
