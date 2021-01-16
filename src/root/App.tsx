import React from "react";
import "./App.css";
import Home from "modules/home";
import NavigationPanel from "components/navigationPanel/navigationPanel";
import ContactUs from "modules/contactUs/contactUs";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationPanel />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/contactus">
            <ContactUs />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
