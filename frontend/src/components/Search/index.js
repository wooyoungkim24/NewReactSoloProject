import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as sessionActions from "../../store/session";
import Navigation from "../../components/Navigation";
import { NavLink } from 'react-router-dom';
import { Route, Switch, useHistory} from "react-router-dom";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import moment from 'moment'
import "./index.css"
import { loadSearch } from "../../store/spot";

function Search() {

    const [location, setLocation] = useState("")
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const [guests, setGuests] = useState(0)
    const [seeStart, setSeeStart] = useState(false)
    const [seeEnd, setSeeEnd] = useState(false);
    const inputRefStart = useRef();
    const inputRefEnd = useRef();

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
        console.log("test")
        // console.log(document.getElementsByClassName("dropdown-start"))
        document.getElementsByClassName("dropdown-start")[0].focus();
    }
    const handleEndClick = () => {
        document.getElementsByClassName("dropdown-end")[0].focus();
    }
    useEffect(() => {
        if (seeStart) {
            document.addEventListener('click', handleOutsideStartClick);

        }
        if (seeEnd) {
            document.addEventListener('click', handleOutsideEndClick);

        }
        return (() => {
            console.log("Cleaning up event listener from Autocomplete!");
            document.removeEventListener('click', handleOutsideStartClick);
            document.removeEventListener('click', handleOutsideEndClick);


        })
    }, [seeStart, seeEnd])



    const handleOutsideStartClick = () => {
        // Leave dropdown visible as long as input is focused

        if (document.activeElement === inputRefStart.current) return;
        else {
            setSeeStart(false)

        }
    }
    const handleOutsideEndClick = () => {
        // Leave dropdown visible as long as input is focused

        if (document.activeElement === inputRefEnd.current) return;
        else {

            setSeeEnd(false)
        }
    }

    const handleSearchSubmit = (e) =>{
        e.preventDefault();
        const searchPayload = guests+"_"+location+"_"+moment(startDate).format("MMMM D YYYY")+"_"+moment(endDate).format("MMMM D YYYY")
        history.push(`/spots/${searchPayload}`)
    }

    return (


        <div className="home-search-bar">
            <form className="search-bar" onSubmit={handleSearchSubmit}>
                <input
                    id = 'cityname-search'
                    type='search'
                    placeholder='City Name'
                    required
                    value={location}
                    onChange={updateLocation}
                />
                <div className="search-bar-start" onClick={handleStartClick}>
                    <div id="start-text">
                        Start
                    </div>
                    <div
                        tabIndex="0"
                        className="dropdown-start"
                        ref={inputRefStart}
                        onFocus={() => setSeeStart(true)}
                    >
                        {seeStart &&
                            <Calendar id="calendar-search-start" value={startDate} onChange={changeDateStart} minDate={new Date()} />
                        }
                    </div>


                </div>
                <div className="search-bar-end" onClick={handleEndClick}>
                    <div id="end-text">
                        End
                    </div>

                    <div
                        tabIndex="0"
                        className="dropdown-end"
                        ref={inputRefEnd}
                        onFocus={() => setSeeEnd(true)}
                    >
                        {seeEnd &&


                            <Calendar  id="calendar-search-end" value={endDate} onChange={changeDateEnd} minDate={startDate} />
                        }
                    </div>


                </div>

                <div className="search-bar-guests">
                    <input
                        type="number"
                        required
                        value={guests}
                        onChange={updateGuests}
                        id= "search-bar-guests-input"
                        min={0}
                    />
                </div>
                <button type="submit" className="button-search-submit">
                    Search
                </button>
            </form>
        </div>


    )
}


export default Search;
