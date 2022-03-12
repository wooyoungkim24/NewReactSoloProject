import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, useHistory, useParams } from 'react-router-dom';
import * as sessionActions from "../../store/session";
import Navigation from '../Navigation';
import { getSpots, getSpot } from "../../store/spot"
import { getBookingsId, createBooking } from '../../store/booking';
import "./index.css"

import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import moment from 'moment'

function SpotIndividual() {
    const dispatch = useDispatch();
    const { idDates } = useParams();
    console.log('this is my search', idDates)

    const id = idDates.split("_")[0]
    const start = idDates.split("_")[1];
    const end = idDates.split("_")[2];

    let checkedStart;
    let checkedEnd;
    if(start === "placeholder"){

        checkedStart = new Date();
    }else{
        checkedStart= new Date(start);
    }

    if(end === "placeholder"){
        checkedEnd = new Date();
    }else{
        checkedEnd= new Date(start);
    }

    const handleCheckInClick = () => {
        document.getElementsByClassName("booking-checkIn-dropdown")[0].focus();
    }
    const handleCheckOutClick = () => {
        document.getElementsByClassName("booking-checkOut-dropdown")[0].focus();
    }
    const updateBookingCheckIn = (e) => {
        setBookingCheckIn(e)
    }
    const updateBookingCheckOut = (e) => {
        setBookingCheckOut(e)
    }

    const updateBookingGuests = (e) => {
        setBookingGuests(e.target.value)
    }

    const [loggedIn, setLoggedIn] = useState(false)
    const inputRefStart = useRef();
    const inputRefEnd = useRef();
    const [seeStart, setSeeStart] = useState(false)
    const [seeEnd, setSeeEnd] = useState(false)
    const [bookingCheckIn, setBookingCheckIn] = useState(checkedStart)
    const [bookingCheckOut, setBookingCheckOut] = useState(checkedEnd )
    const [placeholder, setPlaceholder] = useState(false)

    const [bookingGuests, setBookingGuests] = useState(1)

    const history = useHistory();
    const [dateStateStart, setDateStateStart] = useState(checkedStart)
    const [dateStateEnd, setDateStateEnd] = useState(checkedEnd)
    const [isLoaded, setIsLoaded] = useState(false);
    const [privacyText, setPrivacyText] = useState("")
    const [spotType, setSpotType] = useState("")
    const [spotTypeSub, setSpotTypeSub] = useState("")
    const [showMore, setShowMore] = useState(false);
    const [newBookings, setNewBookings] = useState([])



    const [bookedEnd, setBookedEnd] = useState(new Date())
    const individualSpot = useSelector(state => {
        return state.spots.individualSpot
    })
    const photos = useSelector(state => {
        return state.spots.individualSpot.photoObj
    })
    const bookings = useSelector(state => {
        return state.bookings.bookings
    })
    const user = useSelector(state => {
        return state.session.user
    })
    const changeDateStart = (e) => {
        setDateStateStart(e)
    }
    const changeDateEnd = (e) => {
        setDateStateEnd(e)
    }

    const getDisabledArray = function (start, end) {
        let arr = [];
        let dt = new Date(start)
        while (dt <= end) {
            arr.push(new Date(dt))
            dt.setDate(dt.getDate() + 1)
        }
        return arr;
    }





    function FilterTrue(obj) {
        let keys = Object.keys(obj);
        let returned = keys.filter(ele => obj[ele] === true)
        return returned;
    }
    function camelToWord(string) {
        let upperLetter = "";
        let upperLetter2 = "";
        for (let i = 0; i < string.length; i++) {
            let curr = string.charAt(i);
            if (curr === curr.toUpperCase()) {
                if (upperLetter === "") {
                    upperLetter = curr
                } else {
                    upperLetter2 = curr
                }
            }
        }
        let split = string.split(/[A-Z]/)
        let replacedLetter1 = upperLetter + split[1]
        split[1] = replacedLetter1
        let replacedLetter2 = upperLetter2 + split[2]
        split[2] = replacedLetter2
        if (split[2] === 'undefined') {
            split.pop();
        }
        if (split[1] === 'undefined') {
            split.pop();
        }

        let first = split[0];
        let splitFirst = first.split("");
        splitFirst[0] = splitFirst[0].toUpperCase();
        let newSplitFirst = splitFirst.join("")
        split[0] = newSplitFirst;
        return split.join(" ")
    }


    function splitAtCapital(string) {
        const result = string.split(/(?=[A-Z])/);
        if (result.length === 1) {
            return result[0]
        } else {
            return result.join(" ")
        }
    }
    useEffect(() => {
        dispatch(sessionActions.restoreUser())
        dispatch(getBookingsId({ spotId: id }))
        dispatch(getSpot(id)).then(() => setIsLoaded(true))
    }, [dispatch])

    const didMountRef = useRef(0);
    let disabledArray = [];
    useEffect(() => {
        if (didMountRef.current === 1) {
            let spotTypeTemp = FilterTrue(individualSpot.spot.SpotType)

            let spotTypeSubTemp = FilterTrue(individualSpot.subType)

            setSpotType(camelToWord(spotTypeTemp[0]))
            setSpotTypeSub(camelToWord(spotTypeSubTemp[0]))


            let privacyType = FilterTrue(individualSpot.spot.PrivacyType)

            if (privacyType[0] === "privateRoom" || privacyType === "sharedRoom") {
                setPrivacyText(camelToWord(privacyType[0]) + " in");
                console.log(privacyText)

            }
            else {
                setPrivacyText(camelToWord(privacyType[0]))
            }
            setNewBookings(bookings)
            console.log('where is my user', user)
            if (user) {
                setLoggedIn(true)
                for(let i = 0; i < bookings.length; i ++){
                    let curr = bookings[i];
                    if(curr.userId === user.id){
                        setLoggedIn(false)
                    }
                }
                if(user.id === individualSpot.spot.userId){
                    setLoggedIn(false)
                }
            }



            // console.log('timing',disabledArray)



        }
        didMountRef.current += 1;
    }, [isLoaded])
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

    const handleBookingSubmit = async () => {
        const payload = {
            checkIn: bookingCheckIn,
            checkOut: bookingCheckOut,
            spotId: id,
            userId: user.id
        }
        await dispatch(createBooking(payload))
        .then(() => history.push(`/profile/trips/${user.id}`))

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

    let amenitiesShow;
    let ourPhotos;
    let newOurPhotos = [];
    if (isLoaded) {
        ourPhotos = photos[id]

        ourPhotos.map(ele => {
            let newString = `https://citybrbphotos.s3.amazonaws.com/` + `Spot${id}/` + ele;
            // console.log(newString)
            return newString
        })
        for (let i = 0; i < ourPhotos.length; i++) {
            newOurPhotos.push(`https://citybrbphotos.s3.amazonaws.com/` + `Spot${id}/` + ourPhotos[i])
        }
        console.log('new', newOurPhotos)




        let pool = individualSpot.spot.Amenity.pool;
        let patio = individualSpot.spot.Amenity.patio;
        let firePit = individualSpot.spot.Amenity.firePit;
        let firePlace = individualSpot.spot.Amenity.firePlace;
        let exerciseEquipment = individualSpot.spot.Amenity.exerciseEquipment;
        let wifi = individualSpot.spot.Amenity.wifi;
        let tv = individualSpot.spot.Amenity.tv;
        let kitchen = individualSpot.spot.Amenity.kitchen;
        let washer = individualSpot.spot.Amenity.washer;
        let airConditioning = individualSpot.spot.Amenity.airConditioning;
        let smokeAlarm = individualSpot.spot.Amenity.smokeAlarm;
        let firstAidKit = individualSpot.spot.Amenity.firstAidKit;
        let fireExtinguisher = individualSpot.spot.Amenity.fireExtinguisher;


        amenitiesShow = (
            <div className="amenitiesContainer">
                <div id="leftAmenities">
                    {pool &&
                        <div id="orderAmenities">
                            <div id="amenityIconUp">
                                <i className="fas fa-thumbs-up fa-2x"></i>
                            </div>
                            <div id="amenity">
                                Has a pool
                            </div>
                        </div>
                    }
                    {!pool &&
                        <div id="orderAmenities">
                            <div id="amenityIconDown">
                                <i className="fas fa-thumbs-down fa-2x"></i>
                            </div>
                            <div id="amenity">
                                Does not have a pool
                            </div>
                        </div>
                    }
                </div>
                <div id="rightAmenities">
                    {patio &&
                        <div id="orderAmenities">
                            <div id="amenityIconUp">
                                <i className="fas fa-thumbs-up fa-2x"></i>
                            </div>

                            <div id="amenity">
                                Has a patio
                            </div>
                        </div>
                    }
                    {!patio &&
                        <div id="orderAmenities">
                            <div id="amenityIconDown">
                                <i className="fas fa-thumbs-down fa-2x"></i>
                            </div>
                            <div id="amenity">
                                Does not have a patio
                            </div>
                        </div>
                    }
                </div>
            </div>
        )

        if (showMore) {
            amenitiesShow = (
                <div className="amenitiesContainer">
                    <div id="leftAmenities">
                        {pool &&
                            <div id="orderAmenities">
                                <div id="amenityIconUp">
                                    <i className="fas fa-thumbs-up fa-2x"></i>
                                </div>
                                <div id="amenity">
                                    Has a pool
                                </div>
                            </div>
                        }
                        {!pool &&
                            <div id="orderAmenities">
                                <div id="amenityIconDown">
                                    <i className="fas fa-thumbs-down fa-2x"></i>
                                </div>
                                <div id="amenity">
                                    Does not have a pool
                                </div>
                            </div>
                        }
                        {patio &&
                            <div id="orderAmenities">
                                <div id="amenityIconUp">
                                    <i className="fas fa-thumbs-up fa-2x"></i>
                                </div>
                                <div id="amenity">
                                    Does have a patio
                                </div>
                            </div>
                        }
                        {!patio &&
                            <div id="orderAmenities">
                                <div id="amenityIconDown">
                                    <i className="fas fa-thumbs-down fa-2x"></i>
                                </div>
                                <div id="amenity">
                                    Does not have a patio
                                </div>
                            </div>
                        }
                        {firePit &&
                            <div id="orderAmenities">
                                <div id="amenityIconUp">
                                    <i className="fas fa-thumbs-up fa-2x"></i>
                                </div>
                                <div id="amenity">
                                    Has a fire pit
                                </div>
                            </div>
                        }
                        {!firePit &&
                            <div id="orderAmenities">
                                <div id="amenityIconDown">
                                    <i className="fas fa-thumbs-down fa-2x"></i>
                                </div>
                                <div id="amenity">
                                    Does not have a fire pit
                                </div>
                            </div>
                        }
                        {firePlace &&
                            <div id="orderAmenities">
                                <div id="amenityIconUp">
                                    <i className="fas fa-thumbs-up fa-2x"></i>
                                </div>
                                <div id="amenity">
                                    Has a fireplace
                                </div>
                            </div>
                        }
                        {!firePlace &&
                            <div id="orderAmenities">
                                <div id="amenityIconDown">
                                    <i className="fas fa-thumbs-down fa-2x"></i>
                                </div>
                                <div id="amenity">
                                    Does not have a fireplace
                                </div>
                            </div>
                        }
                        {exerciseEquipment &&
                            <div id="orderAmenities">
                                <div id="amenityIconUp">
                                    <i className="fas fa-thumbs-up fa-2x"></i>
                                </div>

                                <div id="amenity">
                                    Has exercise equipment
                                </div>
                            </div>
                        }
                        {!exerciseEquipment &&
                            <div id="orderAmenities">
                                <div id="amenityIconDown">
                                    <i className="fas fa-thumbs-down fa-2x"></i>
                                </div>
                                <div id="amenity">
                                    Does not have exercise equipment
                                </div>
                            </div>
                        }
                        {wifi &&
                            <div id="orderAmenities">
                                <div id="amenityIconUp">
                                    <i className="fas fa-thumbs-up fa-2x"></i>
                                </div>

                                <div id="amenity">
                                    Has wifi
                                </div>
                            </div>
                        }
                        {!wifi &&
                            <div id="orderAmenities">
                                <div id="amenityIconDown">
                                    <i className="fas fa-thumbs-down fa-2x"></i>
                                </div>
                                <div id="amenity">
                                    Does not have wifi
                                </div>
                            </div>
                        }
                        {tv &&
                            <div id="orderAmenities">
                                <div id="amenityIconUp">
                                    <i className="fas fa-thumbs-up fa-2x"></i>
                                </div>

                                <div id="amenity">
                                    Has tv
                                </div>
                            </div>
                        }
                        {!tv &&
                            <div id="orderAmenities">
                                <div id="amenityIconDown">
                                    <i className="fas fa-thumbs-down fa-2x"></i>
                                </div>
                                <div id="amenity">
                                    Does not have tv
                                </div>
                            </div>
                        }
                    </div>
                    <div id="rightAmenities">

                        {kitchen &&
                            <div id="orderAmenities">
                                <div id="amenityIconUp">
                                    <i className="fas fa-thumbs-up fa-2x"></i>
                                </div>

                                <div id="amenity">
                                    Has a kitchen
                                </div>
                            </div>
                        }
                        {!kitchen &&
                            <div id="orderAmenities">
                                <div id="amenityIconDown">
                                    <i className="fas fa-thumbs-down fa-2x"></i>
                                </div>
                                <div id="amenity">
                                    Does not have a kitchen
                                </div>
                            </div>
                        }
                        {washer &&
                            <div id="orderAmenities">
                                <div id="amenityIconUp">
                                    <i className="fas fa-thumbs-up fa-2x"></i>
                                </div>

                                <div id="amenity">
                                    Has a washer
                                </div>
                            </div>
                        }
                        {!washer &&
                            <div id="orderAmenities">
                                <div id="amenityIconDown">
                                    <i className="fas fa-thumbs-down fa-2x"></i>
                                </div>
                                <div id="amenity">
                                    Does not have a washer
                                </div>
                            </div>
                        }
                        {airConditioning &&
                            <div id="orderAmenities">
                                <div id="amenityIconUp">
                                    <i className="fas fa-thumbs-up fa-2x"></i>
                                </div>

                                <div id="amenity">
                                    Has air conditioning
                                </div>
                            </div>
                        }
                        {!airConditioning &&
                            <div id="orderAmenities">
                                <div id="amenityIconDown">
                                    <i className="fas fa-thumbs-down fa-2x"></i>
                                </div>
                                <div id="amenity">
                                    Does not have air conditioning
                                </div>
                            </div>
                        }
                        {smokeAlarm &&
                            <div id="orderAmenities">
                                <div id="amenityIconUp">
                                    <i className="fas fa-thumbs-up fa-2x"></i>
                                </div>

                                <div id="amenity">
                                    Has smoke alarms
                                </div>
                            </div>
                        }
                        {!smokeAlarm &&
                            <div id="orderAmenities">
                                <div id="amenityIconDown">
                                    <i className="fas fa-thumbs-down fa-2x"></i>
                                </div>
                                <div id="amenity">
                                    Does not have smoke alarms
                                </div>
                            </div>
                        }
                        {firstAidKit &&
                            <div id="orderAmenities">
                                <div id="amenityIconUp">
                                    <i className="fas fa-thumbs-up fa-2x"></i>
                                </div>

                                <div id="amenity">
                                    Has a first aid kit
                                </div>
                            </div>
                        }
                        {!firstAidKit &&
                            <div id="orderAmenities">
                                <div id="amenityIconDown">
                                    <i className="fas fa-thumbs-down fa-2x"></i>
                                </div>
                                <div id="amenity">
                                    Does not have a first aid kit
                                </div>
                            </div>
                        }
                        {fireExtinguisher &&
                            <div id="orderAmenities">
                                <div id="amenityIconUp">
                                    <i className="fas fa-thumbs-up fa-2x"></i>
                                </div>

                                <div id="amenity">
                                    Has a fire extinguisher
                                </div>
                            </div>
                        }
                        {!fireExtinguisher &&
                            <div id="orderAmenities">
                                <div id="amenityIconDown">
                                    <i className="fas fa-thumbs-down fa-2x"></i>
                                </div>
                                <div id="amenity">
                                    Does not have a fire extinguisher
                                </div>
                            </div>
                        }

                    </div>
                </div>
            )
        }
    }
    for (let i = 0; i < newBookings.length; i++) {
        let curr = newBookings[i]
        // console.log('checkingIn', getDisabledArray(new Date(curr.checkIn), new Date(curr.checkOut)))
        disabledArray = [...disabledArray, ...getDisabledArray(new Date(curr.checkIn), new Date(curr.checkOut))]
    }


    return (
        <div className='individual-spot-page'>
            {isLoaded &&
                <div className='individual-spot-container'>
                    <div className='individual-title'>
                        <p>{individualSpot.spot.title}</p>
                    </div>

                    <div className='individual-location'>
                        <p>Location: {splitAtCapital(individualSpot.spot.city)}</p>
                    </div>

                    <div className='individual-image-container'>
                        <div id='individual-image-big-container'>
                            <img id="individual-image-big" src={newOurPhotos[0]} />
                        </div>

                        <div id='individual-image-small-container'>
                            <div id='individual-image-small-top'>
                                <img id="individual-image-small" src={newOurPhotos[1]} />
                                <img id="individual-image-small" src={newOurPhotos[2]} />
                            </div>
                            <div id='individual-image-small-bottom'>
                                <img id="individual-image-small" src={newOurPhotos[3]} />
                                <img id="individual-image-small" src={newOurPhotos[4]} />
                            </div>
                        </div>
                    </div>

                    <div className='individual-bottom-container'>
                        <div className='bottom-left'>
                            <div className='intro-info'>
                                <div className='intro-left-container'>
                                    <div id='intro-title'>
                                        {privacyText}&nbsp;{spotTypeSub}&nbsp;{spotType} hosted by {individualSpot.spot.User.username}
                                    </div>
                                    <div id='intro-floor-plan'>
                                        {individualSpot.spot.FloorPlan.guests} Guest - {individualSpot.spot.FloorPlan.beds} Bed - {individualSpot.spot.FloorPlan.bedrooms} Bedroom - {individualSpot.spot.FloorPlan.bathrooms} Bath
                                    </div>
                                </div>
                                <div className='intro-profile-photo'>
                                    <img id="spot-user-photo" src={individualSpot.spot.User.photo}></img>
                                </div>


                            </div>

                            <div className='description'>
                                <p>{individualSpot.spot.description}</p>
                            </div>

                            <div className='amenities'>
                                {amenitiesShow}
                                {!showMore && <button id="showMoreButton" type="button" onClick={() => setShowMore(true)}>Show More</button>}
                                {showMore && <button id="showLessButton" type="button" onClick={() => setShowMore(false)}>Show Less</button>}
                            </div>

                            <div className='calendar'>
                                <div className='calendar-start'>
                                    {/* {console.log('where is my disabled array', disabledArray)} */}
                                    <Calendar
                                        minDate={new Date()}
                                        value={dateStateStart}
                                        onChange={changeDateStart}
                                        tileDisabled={({ date, view }) =>
                                            (view === 'month') && // Block day tiles only
                                            disabledArray.some(disabledDate =>
                                                date.getFullYear() === disabledDate.getFullYear() &&
                                                date.getMonth() === disabledDate.getMonth() &&
                                                date.getDate() === disabledDate.getDate()
                                            )}

                                    />
                                </div>
                                <div className='calendar-end'>
                                    <Calendar
                                        minDate={dateStateStart}
                                        value={dateStateEnd}
                                        onChange={changeDateEnd}
                                        tileDisabled={({ date, view }) =>
                                            (view === 'month') && // Block day tiles only
                                            disabledArray.some(disabledDate =>
                                                date.getFullYear() === disabledDate.getFullYear() &&
                                                date.getMonth() === disabledDate.getMonth() &&
                                                date.getDate() === disabledDate.getDate()
                                            )}

                                    />
                                </div>
                            </div>
                        </div>

                        {loggedIn && <div className='bottom-right'>
                            <div className='create-booking-div'>
                                <div className='cost-per-night-booking'>
                                    <div className='booking-cost-per-night-number'>
                                        <p>${individualSpot.spot.costPerNight}</p>
                                    </div>
                                    <div className='booking-cost-per-night-text'>
                                        <p>/ Night</p>
                                    </div>

                                </div>
                                <div className='booking-information'>
                                    <form id='submit-booking-form' onSubmit={handleBookingSubmit}>
                                        <div className='booking-information-top'>
                                            <div className='booking-checkIn-container'>
                                                <div onClick={handleCheckInClick} className='checkIn-text'>
                                                    <div className="start-text-label">
                                                        Check In:
                                                    </div>
                                                    {moment(bookingCheckIn).format("MMMM D YYYY")}
                                                </div>
                                                <div
                                                    className='booking-checkIn-dropdown'
                                                    tabIndex="0"
                                                    ref={inputRefStart}
                                                    onFocus={() => setSeeStart(true)}
                                                >
                                                    {seeStart &&
                                                        <Calendar
                                                            minDate={new Date()}
                                                            value={bookingCheckIn}
                                                            onChange={updateBookingCheckIn}
                                                            tileDisabled={({ date, view }) =>
                                                                (view === 'month') && // Block day tiles only
                                                                disabledArray.some(disabledDate =>
                                                                    date.getFullYear() === disabledDate.getFullYear() &&
                                                                    date.getMonth() === disabledDate.getMonth() &&
                                                                    date.getDate() === disabledDate.getDate()
                                                                )}

                                                        />
                                                    }

                                                </div>
                                            </div>

                                            <div className='booking-checkOut-container'>
                                                <div onClick={handleCheckOutClick} className='checkOut-text'>
                                                    <div className="end-text-label">
                                                        Check Out:
                                                    </div>
                                                    {moment(bookingCheckOut).format("MMMM D YYYY")}
                                                </div>
                                                <div
                                                    className='booking-checkOut-dropdown'
                                                    tabIndex="0"
                                                    ref={inputRefEnd}
                                                    onFocus={() => setSeeEnd(true)}
                                                >
                                                    {seeEnd &&
                                                        <Calendar
                                                            minDate={bookingCheckIn}
                                                            value={bookingCheckOut}
                                                            onChange={updateBookingCheckOut}
                                                            tileDisabled={({ date, view }) =>
                                                                (view === 'month') && // Block day tiles only
                                                                disabledArray.some(disabledDate =>
                                                                    date.getFullYear() === disabledDate.getFullYear() &&
                                                                    date.getMonth() === disabledDate.getMonth() &&
                                                                    date.getDate() === disabledDate.getDate()
                                                                )}

                                                        />
                                                    }

                                                </div>
                                            </div>
                                        </div>
                                        <div className='booking-information-bottom'>
                                            <label id='booking-guests-input-label' htmlFor='booking-guests-input'>Guests: </label>
                                            <input
                                                type="number"
                                                required
                                                value={bookingGuests}
                                                onChange={updateBookingGuests}
                                                id="booking-guests-input"
                                                min={1}
                                                max={individualSpot.spot.FloorPlan.guests}
                                            />

                                        </div>
                                    </form>

                                </div>
                                <div className='submit-booking-button'>
                                    <button type="submit" disabled ={(bookingCheckIn>=bookingCheckOut) || (bookingGuests>individualSpot.spot.FloorPlan.gueests)}form="submit-booking-form">Reserve</button>
                                </div>
                                <div className='total-cost-booking'>
                                    Total Cost: ${Math.ceil(Math.abs(bookingCheckOut - bookingCheckIn) / (1000 * 60 * 60 * 24)) * individualSpot.spot.costPerNight}
                                </div>
                            </div>
                        </div>}


                    </div>

                </div>
            }
        </div>
    )

}


export default SpotIndividual
