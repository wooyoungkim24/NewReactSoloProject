// frontend/src/App.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import SpotsLocation from "./components/SpotsLocation"
import SpotIndividual from "./components/SpotIndividual"
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Home from "./components/Home"

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path = "/">
            <Home />
          </Route>
          <Route exact path="/login">
            <LoginFormPage />
          </Route>
          <Route exact path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/spots/:city">
            <SpotsLocation />
          </Route>
          <Route exact path = "/spot/:id">
            <SpotIndividual />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
