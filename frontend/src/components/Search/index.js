import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as sessionActions from "../../store/session";
import Navigation from "../../components/Navigation";
import { NavLink } from 'react-router-dom';
import { Route, Switch, useHistory } from "react-router-dom";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import moment from 'moment'
import "./index.css"
import { loadSearch } from "../../store/spot";
import 'react-calendar/dist/Calendar.css';
function Search() {

    const [location, setLocation] = useState("")
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const [guests, setGuests] = useState(1)
    const [seeStart, setSeeStart] = useState(false)
    const [seeEnd, setSeeEnd] = useState(false);
    const [seeCity, setSeeCity] = useState(false);
    const inputRefStart = useRef();
    const inputRefEnd = useRef();
    const inputRefCity = useRef();

    const dispatch = useDispatch();
    const history = useHistory();

    const updateLocation = (e) => setLocation(e.target.value);
    const changeDateStart = (e) => {
        setStartDate(e)
    }
    const changeDateEnd = (e) => {
        setEndDate(e)
    }
    const updateGuests = (e) => setGuests(e.target.value)

    const handleStartClick = () => {
        // console.log("test")
        // console.log(document.getElementsByClassName("dropdown-start"))
        document.getElementsByClassName("dropdown-start")[0].focus();
    }
    const handleEndClick = () => {
        document.getElementsByClassName("dropdown-end")[0].focus();
    }
    const handleCityClick = () => {
        document.getElementsByClassName("cityname-search")[0].focus();
    }
    useEffect(() => {
        if (seeStart) {
            document.addEventListener('click', handleOutsideStartClick);

        }
        if (seeEnd) {
            document.addEventListener('click', handleOutsideEndClick);

        }
        if (seeCity) {
            document.addEventListener('click', handleOutsideCityClick);
        }
        return (() => {
            console.log("Cleaning up event listener from Autocomplete!");
            document.removeEventListener('click', handleOutsideStartClick);
            document.removeEventListener('click', handleOutsideEndClick);
            document.removeEventListener('click', handleOutsideCityClick);


        })
    }, [seeStart, seeEnd, seeCity])



    const handleOutsideStartClick = () => {
        // Leave dropdown visible as long as input is focused

        if (document.activeElement === inputRefStart.current) return;
        else {
            setSeeStart(false)

        }
    }
    const handleOutsideCityClick = () => {
        // Leave dropdown visible as long as input is focused

        if (document.activeElement === inputRefCity.current) return;
        else {
            setSeeCity(false)

        }
    }
    const handleOutsideEndClick = () => {
        // Leave dropdown visible as long as input is focused

        if (document.activeElement === inputRefEnd.current) return;
        else {

            setSeeEnd(false)
        }
    }

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        const searchPayload = guests + "_" + location + "_" + moment(startDate).format("MMMM D YYYY") + "_" + moment(endDate).format("MMMM D YYYY")

        history.push(`/spots/${searchPayload}`)
    }

    return (


        <div className="home-search-bar">
            <form className="search-bar" onSubmit={handleSearchSubmit}>
                <div className="search-bar-city" onClick={handleCityClick}>
                    <div
                        className="search-bar-city-input"
                        tabIndex="0"

                    >
                        <input
                            className='cityname-search'
                            type='search'
                            placeholder='City Name'
                            required
                            ref={inputRefCity}
                            onFocus={() => setSeeCity(true)}
                            value={location}
                            onChange={updateLocation}
                        />
                    </div>
                    {seeCity &&
                        <div className="search-bar-city-dropdown">
                            <div className="city-dropdown-title">
                                Suggested Searches:
                            </div>


                            <ol>
                                <li onClick={() => setLocation("New York")}>
                                    <div>New York</div>

                                </li >
                                <li onClick={() => setLocation("Orlando")}>
                                    <div>Orlando</div>

                                </li>
                                <li onClick={() => setLocation("Chicago")}>
                                    <div>Chicago</div>

                                </li>
                                <li onClick={() => setLocation("Los Angeles")}>
                                    <div>Los Angeles</div>

                                </li>
                                <li onClick={() => setLocation("San Francisco")}>
                                    <div>San Francisco</div>

                                </li>
                            </ol>


                        </div>}

                </div>

                <div className="search-bar-start" onClick={handleStartClick}>
                    <div id="start-text">
                        <div className="start-text-label">
                            Check In:
                        </div>

                        {startDate === new Date()
                            ? <>Add dates</>
                            : moment(startDate).format("MMMM D YYYY")}
                    </div>
                    <div
                        tabIndex="0"
                        className="dropdown-start"
                        ref={inputRefStart}
                        onFocus={() => setSeeStart(true)}
                    >
                        {seeStart &&
                            <Calendar id="calendar-search-start"  value={startDate} onChange={changeDateStart} minDate={new Date()} />
                        }
                    </div>


                </div>
                <div className="search-bar-end" onClick={handleEndClick}>
                    <div id="end-text">
                        <div className="end-text-label">
                            Check Out:
                        </div>
                        {endDate === new Date()
                            ? <>Add dates</>
                            : moment(endDate).format("MMMM D YYYY")}
                    </div>

                    <div
                        tabIndex="0"
                        className="dropdown-end"
                        ref={inputRefEnd}
                        onFocus={() => setSeeEnd(true)}
                    >
                        {seeEnd &&


                            <Calendar id="calendar-search-end" value={endDate} onChange={changeDateEnd} minDate={startDate} />
                        }
                    </div>


                </div>

                <div className="search-bar-guests">
                    <input
                        type="number"
                        required
                        value={guests}
                        onChange={updateGuests}
                        id="search-bar-guests-input"
                        min={1}
                    />
                </div>
                <button type="submit" disabled={startDate >= endDate} className="button-search-submit">
                    Search
                </button>
            </form>
        </div>


    )
}


export default Search;
