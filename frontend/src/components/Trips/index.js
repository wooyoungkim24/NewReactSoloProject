

import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, useHistory, useParams } from 'react-router-dom';
import * as sessionActions from "../../store/session";
import Navigation from '../Navigation';
import { getSpots, getSpot } from "../../store/spot"
import { getBookingsId, createBooking, getBookingsUser, deleteBooking } from '../../store/booking';
import moment from 'moment'
import "./index.css"

function Trips() {

    const dispatch = useDispatch();
    const history = useHistory();
    const [isLoaded, setIsLoaded] = useState(false)
    const { userId } = useParams();

    const bookings = useSelector(state => {
        return state.bookings.bookings
    })
    const photoObj = useSelector(state => {
        return state.bookings.photoObj
    })
    useEffect(async () => {
        const payload = {
            userId
        }
        await dispatch(getBookingsUser(payload))
            .then(() => setIsLoaded(true))
    }, [dispatch])
    function splitAtCapital(string) {
        const result = string.split(/(?=[A-Z])/);
        if (result.length === 1) {
            return result[0]
        } else {
            return result.join(" ")
        }
    }

    function handleDeleteTrip(spotId) {
        const payload = {
            spotId,
            userId
        }
        dispatch(deleteBooking(payload))
        .then(() =>window.location.reload(true))
    }
    return (
        <div className='trips-container'>
            <h1>Your Trips</h1>
            {isLoaded &&
                <>
                    {bookings.map(ele => {
                        console.log(ele.id)
                        const imageLink = `https://citybrbphotos.s3.amazonaws.com/` + `Spot${ele.spotId}/` + photoObj[ele.spotId][0]
                        return (
                            <div>
                                <div key={ele.id} className='trips-component' onClick={() => history.push(`/spot/${ele.Spot.id}_placeholder_placeholder`)}>
                                    <div className='trip-image'>
                                        <img id='trip-image' src={imageLink}></img>
                                    </div>
                                    <div className='trip-info'>
                                        <div className='trip-location'>
                                            <p>{splitAtCapital(ele.Spot.city)}</p>
                                        </div>

                                        <div className='trip-host'>
                                            <p>Hosted by: {ele.User.username}</p>
                                        </div>

                                        <div className='trip-when'>
                                            <div className='trip-start'>
                                                Check in: {moment(ele.checkIn).format("MMMM D YYYY")}
                                            </div>
                                            <div className='trip-end'>
                                                Check out: {moment(ele.checkOut).format("MMMM D YYYY")}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='delete-trip-div'>
                                    <button type='button' onClick={() =>handleDeleteTrip(ele.spotId)} > Delete </button>
                                </div>
                            </div>

                        )
                    })}

                </>
            }
        </div>
    )

}


export default Trips
