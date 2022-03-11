// frontend/src/App.js
import React, { useState, useEffect , useRef} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, useLocation, Redirect } from "react-router-dom";
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



function PrivateRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  )
}



function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const [auth, setAuth] = useState(false)
  const user = useSelector(state=>{
    return state.session.user
})
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);
  // const didMountRef = useRef(0)
  // useEffect(() =>{
  //   if(didMountRef.current ===1){
  //     if(user){
  //       setAuth(true)
  //     }
  //   }
  //   didMountRef.current +=1
  // }, [isLoaded])

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
          {/* <PrivateRoute authed={auth} exact path = "/hosted/spots/:userId" component={HostedSpots} /> */}


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

    </>
  );
}

export default App;
