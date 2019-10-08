import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Main from "./components/Main";
import Games from "./components/Games";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/navigate" component={Main} />
        <Route path="/games" component={Games} />
        <Redirect to="/"></Redirect>
      </Switch>
    </Router>
  );
};

export default App;
