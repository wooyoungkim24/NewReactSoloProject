import Search from "../Search";
import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../store/session";
import Navigation from "../../components/Navigation";
import "./index.css"

function Home() {



    return(
        <div className="home-image">
            <div className="home-welcome">
                <h1>Welcome to CityBrb</h1>
            </div>
            <div className="search-direction">
                Search to Get Started
            </div>
        </div>
    )
}


export default Home;
