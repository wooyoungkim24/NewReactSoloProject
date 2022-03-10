import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, useHistory, useParams } from 'react-router-dom';
import * as sessionActions from "../../store/session";
import Navigation from '../Navigation';
import { createSpot, editPrivacy, editFloorPlan, editSpotStuff, getSpot, putPhoto, editSpotType, editSpotSub, editAmenity } from "../../store/spot"
import { csrfFetch } from '../../store/csrf'
import Cookies from 'js-cookie';
import NewSpotDetailForm from '../NewSpotDetailForm';



function NewSpotForm() {
    const dispatch = useDispatch();

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [costPerNight, setCostPerNight] = useState(0)
    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
    const [firstDone, setFirstDone] = useState(true)
    const [newSpot, setNewSpot] = useState();

    const updateTitle = (e) => {
        setTitle(e.target.value)
    }
    const updateDescription = (e) => {
        setDescription(e.target.value)
    }
    const updateCost = (e) => {
        setCostPerNight(e.target.value)
    }
    const updateCity = (e) => {
        setCity(e.target.value)
    }
    const updateAddress = (e) => {
        setAddress(e.target.value)
    }

    const user = useSelector(state => {
        return state.session.user
    })

    const handleFirstSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            userId: user.id,
            title,
            description,
            costPerNight,
            address,
            city
        }

        setNewSpot(await dispatch(createSpot(payload)))
        console.log('where is ym spot', newSpot)
        setFirstDone(true)
    }


    return (

        <div className='new-spot-form-container'>
            {!firstDone &&
            <div className='top-form'>
                <form className='really-big-form' onSubmit={handleFirstSubmit}>
                    <label htmlFor="new-title-input">Title: </label>
                    <input
                        htmlFor="new-title-input"
                        type="text"
                        value={title}
                        onChange={updateTitle}
                    >
                    </input>

                    <label htmlFor="new-desc-input">Description: </label>
                    <textarea
                        htmlFor="new-desc-input"

                        value={description}
                        onChange={updateDescription}
                    >
                    </textarea>

                    <label htmlFor="new-cost-input">Cost: </label>
                    <input
                        htmlFor="new-cost-input"
                        type="number"
                        value={costPerNight}
                        onChange={updateCost}
                    >
                    </input>

                    <label htmlFor="new-address-input">Address: </label>
                    <input
                        htmlFor="new-address-input"
                        type="text"
                        value={address}
                        onChange={updateAddress}
                    >
                    </input>

                    <label htmlFor="new-city-input">City: </label>
                    <input
                        htmlFor="new-city-input"
                        type="text"
                        value={city}
                        onChange={updateCity}
                    >
                    </input>

                    <button type="submit">Create</button>
                </form>
            </div>}

            {firstDone &&
            <div className='bottom-form'>
                {/* <NewSpotDetailForm newSpot = {newSpot}/> */}
                <NewSpotDetailForm newSpot = {{id:44}}/>
            </div>
            }

        </div>
    )
}

export default NewSpotForm
