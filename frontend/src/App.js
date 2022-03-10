// frontend/src/App.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch, useLocation } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import SpotsLocation from "./components/SpotsLocation"
import SpotIndividual from "./components/SpotIndividual"
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Home from "./components/Home"
import HostedSpots from "./components/HostedSpots";
import HostedSpotIndividual from "./components/HostedSpotIndividual";
import EditFormPage from "./components/EditFormPage";
import NewSpotForm from "./components/NewSpotForm";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />

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
          <Route exact path="/spots/:searchPayload">
            <SpotsLocation key={useLocation().pathname.split("/")[2]}/>
          </Route>
          <Route exact path = "/spot/:idDates">
            <SpotIndividual />
          </Route>

          <Route exact path = "/hosted/spots/:userId">
            <HostedSpots />
          </Route>

          <Route exact path="/profile/spot/:id">
            <HostedSpotIndividual />
          </Route>
          <Route exact path = "/profile/edit/:type">
            <EditFormPage/>
          </Route>

          <Route exact path ="/profile/new/spot">
            <NewSpotForm />
          </Route>
        </Switch>
      )
    </>
  );
}

export default App;
