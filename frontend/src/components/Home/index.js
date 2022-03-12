import Search from "../Search";
import React, { useState, useEffect, useRef } from "react";
import { Redirect, useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../store/session";
import Navigation from "../../components/Navigation";
import "./index.css"

function Home() {
    const location = useLocation();
    const dispatch = useDispatch();
    const history = useHistory();




    const handleDemo = (e) => {
        return dispatch(sessionActions.login({ credential: 'horton@hears.who', password: 'password6' }))
            .then(() => history.push("/"))
    }

    const user = useSelector(state => {
        return state.session.user
    })


    return (
        <div className="home-image">
            <div className="home-welcome">
                <h1>Welcome to CityBrb</h1>
            </div>
            <div className="search-direction">
                Search to Get Started
            </div>

            {!user &&
            <div className="demo-user-button">
                <button type="button" onClick={handleDemo}>Demo User Horton</button>
            </div>
            }

        </div>
    )
}


export default Home;
