import Search from "../Search";
import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../store/session";
import Navigation from "../../components/Navigation";

function Home() {

   

    return(
        <div>
            Home
            <Search />
        </div>
    )
}


export default Home;
