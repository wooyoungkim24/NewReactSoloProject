import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, useHistory, useParams } from 'react-router-dom';
import * as sessionActions from "../../store/session";
import Navigation from '../Navigation';
import { addAmenity, createSpot, addSpotType, addSpotSub, editPrivacy, editFloorPlan, editSpotStuff, getSpot, putPhoto, editSpotType, editSpotSub, editAmenity, addFloorPlan, addPrivacy } from "../../store/spot"
import { csrfFetch } from '../../store/csrf'
import Cookies from 'js-cookie';
import NewSpotDetailForm from '../NewSpotDetailForm';



function NewSpotForm() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [error, setError] =useState(false)
    const [errorMessages, setErrorMessages] = useState([])


    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [costPerNight, setCostPerNight] = useState(0)
    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
    const [firstDone, setFirstDone] = useState(true)

    const [newSpotType, setNewSpotType] = useState("")
    const [newSpotSub, setNewSpotSub] = useState("")



    const [newPool, setNewPool] = useState(false)
    const [newPatio, setNewPatio] = useState(false)
    const [newFirePit, setNewFirePit] = useState(false)
    const [newFirePlace, setNewFirePlace] = useState(false)
    const [newExerciseEquipment, setNewExerciseEquipment] = useState(false)
    const [newWifi, setNewWifi] = useState(false)
    const [newAirConditioning, setNewAirConditioning] = useState(false)
    const [newSmokeAlarm, setNewSmokeAlarm] = useState(false)
    const [newFirstAidKit, setNewFirstAidKit] = useState(false)
    const [newFireExtinguisher, setNewFireExtinguisher] = useState(false)
    const [newTv, setNewTv] = useState(false)
    const [newKitchen, setNewKitchen] = useState(false)
    const [newWasher, setNewWasher] = useState(false)


    const [newGuests, setNewGuests] = useState(1);
    const [newBeds, setNewBeds] = useState(1);
    const [newBedrooms, setNewBedrooms] = useState(1);
    const [newBathrooms, setNewBathrooms] = useState(1);

    const [privacyState, setPrivacyState]= useState("");
    const updatePrivacy = (e) =>{
        setPrivacyState(e.target.value)
    }


    const updateGuests = (e) => {
        setNewGuests(e.target.value)
    }

    const updateBeds = (e) => {
        setNewBeds(e.target.value)
    }
    const updateBedrooms = (e) => {
        setNewBedrooms(e.target.value)
    }
    const updateBathrooms = (e) => {
        setNewBathrooms(e.target.value)
    }

    // const [newSpot, setNewSpot] = useState();

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
    const updateSpotType = (e) => {
        setNewSpotType(e.target.value)
    }
    const updateSpotSub = (e) => {
        setNewSpotSub(e.target.value)
    }


    const updatePool = (e) => {
        // console.log('this is the type before',newPool)
        // console.log('testing',typeof e.target.value)

        setNewPool(!newPool)
        // console.log('this is the type after',newPool)
    }
    const updatePatio = (e) => {

        setNewPatio(!newPatio)
    }
    const updateFirePit = (e) => {
        setNewFirePit(!newFirePit)
    }
    const updateFirePlace = (e) => {
        setNewFirePlace(!newFirePlace)
    }
    const updateExerciseEquipment = (e) => {
        setNewExerciseEquipment(!newExerciseEquipment)
    }
    const updateWifi = (e) => {
        setNewWifi(!newWifi)
    }
    const updateTv = (e) => {
        setNewTv(!newTv)
    }
    const updateKitchen = (e) => {
        setNewKitchen(!newKitchen)
    }
    const updateWasher = (e) => {
        setNewWasher(!newWasher)
    }
    const updateAirConditioning = (e) => {
        setNewAirConditioning(!newAirConditioning)
    }
    const updateSmokeAlarm = (e) => {
        setNewSmokeAlarm(!newSmokeAlarm)
    }
    const updateFirstAidKit = (e) => {
        setNewFirstAidKit(!newFirstAidKit)
    }
    const updateFireExtinguisher = (e) => {
        setNewFireExtinguisher(!newFireExtinguisher)
    }
    const user = useSelector(state => {
        return state.session.user
    })
    let newSpot;
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
        let createdSpot = await dispatch(createSpot(payload))
            .then((res) => newSpot = res)




        const selectedFiles1 = document.getElementById('add-photo-input1').files[0];
        const selectedFiles2 = document.getElementById('add-photo-input2').files[0];
        const selectedFiles3 = document.getElementById('add-photo-input3').files[0];
        const selectedFiles4 = document.getElementById('add-photo-input4').files[0];
        const selectedFiles5 = document.getElementById('add-photo-input5').files[0];


        const key1 = `Spot${newSpot.id}_${selectedFiles1.name}`
        const key2 = `Spot${newSpot.id}_${selectedFiles2.name}`
        const key3 = `Spot${newSpot.id}_${selectedFiles3.name}`
        const key4 = `Spot${newSpot.id}_${selectedFiles4.name}`
        const key5 = `Spot${newSpot.id}_${selectedFiles5.name}`

        const formData1 = new FormData();
        formData1.append("File", selectedFiles1)

        const formData2 = new FormData();
        formData2.append("File", selectedFiles2)

        const formData3 = new FormData();
        formData3.append("File", selectedFiles3)

        const formData4 = new FormData();
        formData4.append("File", selectedFiles4)

        const formData5 = new FormData();
        formData5.append("File", selectedFiles5)

        //Array length error


        const fetch1 = fetch(`/api/spots/photoAdd/${key1}`, {
            method: "POST",
            headers: { "XSRF-TOKEN": Cookies.get('XSRF-TOKEN') },
            body: formData1
        })
        const fetch2 = fetch(`/api/spots/photoAdd/${key2}`, {
            method: "POST",
            headers: { "XSRF-TOKEN": Cookies.get('XSRF-TOKEN') },
            body: formData2
        })
        const fetch3 = fetch(`/api/spots/photoAdd/${key3}`, {
            method: "POST",
            headers: { "XSRF-TOKEN": Cookies.get('XSRF-TOKEN') },
            body: formData3
        })
        const fetch4 = fetch(`/api/spots/photoAdd/${key4}`, {
            method: "POST",
            headers: { "XSRF-TOKEN": Cookies.get('XSRF-TOKEN') },
            body: formData4
        })
        const fetch5 = fetch(`/api/spots/photoAdd/${key5}`, {
            method: "POST",
            headers: { "XSRF-TOKEN": Cookies.get('XSRF-TOKEN') },
            body: formData5
        })
        Promise.all([fetch1, fetch2, fetch3, fetch4, fetch5]);


        const spotTypePayload = {
            spotId: newSpot.id,
        }
        spotTypePayload[newSpotType] = true;
        const subTypePayload = {
            spotId: newSpot.id,
            newSpotType
        }
        subTypePayload[newSpotSub] = true;
        let newSpotTypeObject = await dispatch(addSpotType(spotTypePayload))
        let newSpotSubObject = await dispatch(addSpotSub(subTypePayload))
        // console.log('is this whats wrong', newSpot.id)
        const amenityPayload = {
            spotId: newSpot.id,
            pool: newPool,
            patio: newPatio,
            firePit: newFirePit,
            firePlace: newFirePlace,
            exerciseEquipment: newExerciseEquipment,
            wifi: newWifi,
            tv: newTv,
            kitchen: newKitchen,
            washer: newWasher,
            airConditioning: newAirConditioning,
            smokeAlarm: newSmokeAlarm,
            firstAidKit: newFirstAidKit,
            fireExtinguisher: newFireExtinguisher
        }
        let newAmenity = await dispatch(addAmenity(amenityPayload))

        const floorPlanPayload = {
            spotId: newSpot.id,
            guests: newGuests,
            beds: newBeds,
            bedrooms: newBedrooms,
            bathrooms: newBathrooms
        }
        let newFloorPlan = await dispatch(addFloorPlan(floorPlanPayload))


        const privacyPayload = {
            spotId: newSpot.id,
        }
        privacyPayload[privacyState] = true

        let newPrivacy = await dispatch(addPrivacy(privacyPayload))

        history.goBack();


    }



    return (

        <div className='new-spot-form-container'>

            <div className='top-form'>
                <form className='really-big-form' onSubmit={handleFirstSubmit}>
                    <label htmlFor="new-title-input">Title: </label>
                    <input
                        htmlFor="new-title-input"
                        type="text"
                        value={title}
                        onChange={updateTitle}
                        required
                    >
                    </input>

                    <label htmlFor="new-desc-input">Description: </label>
                    <textarea
                        htmlFor="new-desc-input"
                        required
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
                        required
                    >
                    </input>

                    <label htmlFor="new-address-input">Address: </label>
                    <input
                        htmlFor="new-address-input"
                        type="text"
                        value={address}
                        onChange={updateAddress}
                        required
                    >
                    </input>

                    <label htmlFor="new-city-input">City: </label>
                    <input
                        htmlFor="new-city-input"
                        type="text"
                        value={city}
                        onChange={updateCity}
                        required
                    >
                    </input>
                    {firstDone &&
                        <div className='new-spot-form-container-bottom'>

                            <div className='photo-upload-container'>
                                <div className='photo-upload-input-div1'>
                                    Photos1:
                                    <input
                                        id="add-photo-input1"
                                        type="file"
                                        accept="image/*"
                                        required
                                    >
                                    </input>
                                </div>
                                <div className='photo-upload-input-div2'>
                                    Photos:
                                    <input
                                        id="add-photo-input2"
                                        type="file"
                                        accept="image/*"
                                        required
                                    >
                                    </input>
                                </div>
                                <div className='photo-upload-input-div3'>
                                    Photos:
                                    <input
                                        id="add-photo-input3"
                                        type="file"
                                        accept="image/*"
                                        required
                                    >
                                    </input>
                                </div>
                                <div className='photo-upload-input-div4'>
                                    Photos:
                                    <input
                                        id="add-photo-input4"
                                        type="file"
                                        accept="image/*"
                                        required
                                    >
                                    </input>
                                </div>
                                <div className='photo-upload-input-div5'>
                                    Photos:
                                    <input
                                        id="add-photo-input5"
                                        type="file"
                                        accept="image/*"
                                        required
                                    >
                                    </input>
                                </div>
                            </div>

                            <div className='spot-types-upload-container'>
                                <label htmlFor="add-spotType-input">Change Spot Type</label>
                                <select
                                    required
                                    id="add-spotType-input"
                                    value={newSpotType}
                                    onChange={updateSpotType}>
                                    <option value="">--Pick a new spot type</option>
                                    <option value="apartment">1--Apartment</option>
                                    <option value="house">2--House</option>
                                    <option value="secondaryUnit">3--Secondary Unit</option>
                                    <option value="bnb">4--BnB</option>

                                </select>
                                <label htmlFor="add-subtType-input">Change Spot SubType</label>
                                <select
                                    required
                                    id="add-subType-input"
                                    value={newSpotSub}
                                    onChange={updateSpotSub}>

                                    {newSpotType === "" &&
                                        <>
                                            <option value="">--Pick a new spot subtype</option>
                                        </>
                                    }


                                    {newSpotType === "house" &&
                                        <>
                                            <option value="">--Pick a new spot subtype</option>
                                            <option value="residential">1--Residential</option>
                                            <option value="cabin">2--Cabin</option>
                                            <option value="villa">3--Villa</option>
                                            <option value="townhouse">4--Townhouse</option>
                                        </>
                                    }
                                    {newSpotType === "apartment" &&
                                        <>
                                            <option value="">--Pick a new spot subtype</option>
                                            <option value="rental">1--Rental</option>
                                            <option value="condo">2--Condo</option>
                                            <option value="loft">3--Loft</option>
                                            <option value="vacationHome">4--Vacation Home</option>
                                        </>
                                    }
                                    {newSpotType === "bnb" &&
                                        <>
                                            <option value="">--Pick a new spot subtype</option>
                                            <option value="bnb">1--BnB</option>
                                            <option value="natureLodge">2--Nature Lodge</option>
                                            <option value="farmStay">3--Farm Stay</option>
                                        </>
                                    }
                                    {newSpotType === "secondaryUnit" &&
                                        <>
                                            <option value="">--Pick a new spot subtype</option>
                                            <option value="guestHouse">1--Guest House</option>
                                            <option value="guestSuite">2--Guest Suite</option>
                                            <option value="farmStay">3--Farm Stay</option>
                                            <option value="vacationHome">4--Vacation Home</option>
                                        </>
                                    }

                                </select>
                            </div >
                            <div className='amenity-upload-container'>

                                <label htmlFor="add-amenity-input">Pool</label>
                                <input

                                    id="add-amenity-input"
                                    type="checkbox"

                                    checked={newPool}

                                    onChange={updatePool}>
                                </input>
                                <label htmlFor="add-amenity-input">Patio</label>
                                <input
                                    id="add-amenity-input"
                                    type="checkbox"
                                    checked={newPatio}

                                    onChange={updatePatio}>
                                </input>
                                <label htmlFor="add-amenity-input">Fire Pit</label>
                                <input
                                    id="add-amenity-input"
                                    type="checkbox"
                                    checked={newFirePit}

                                    onChange={updateFirePit}>
                                </input>
                                <label htmlFor="add-amenity-input">Fire Place</label>
                                <input
                                    id="add-amenity-input"
                                    type="checkbox"
                                    checked={newFirePlace}

                                    onChange={updateFirePlace}>
                                </input>
                                <label htmlFor="add-amenity-input">Exercise Equipment</label>
                                <input
                                    id="add-amenity-input"
                                    type="checkbox"
                                    checked={newExerciseEquipment}

                                    onChange={updateExerciseEquipment}>
                                </input>
                                <label htmlFor="add-amenity-input">Wifi</label>
                                <input
                                    id="add-amenity-input"
                                    type="checkbox"
                                    checked={newWifi}

                                    onChange={updateWifi}>
                                </input>
                                <label htmlFor="add-amenity-input">TV</label>
                                <input
                                    id="add-amenity-input"
                                    type="checkbox"
                                    checked={newTv}

                                    onChange={updateTv}>
                                </input>
                                <label htmlFor="add-amenity-input">Kitchen</label>
                                <input
                                    id="add-amenity-input"
                                    type="checkbox"
                                    checked={newKitchen}

                                    onChange={updateKitchen}>
                                </input>
                                <label htmlFor="add-amenity-input">Washer</label>
                                <input
                                    id="add-amenity-input"
                                    type="checkbox"
                                    checked={newWasher}

                                    onChange={updateWasher}>
                                </input>
                                <label htmlFor="add-amenity-input">Air Conditioning</label>
                                <input
                                    id="add-amenity-input"
                                    type="checkbox"
                                    checked={newAirConditioning}

                                    onChange={updateAirConditioning}>
                                </input>
                                <label htmlFor="add-amenity-input">Smoke Alarm</label>
                                <input
                                    id="add-amenity-input"
                                    type="checkbox"
                                    checked={newSmokeAlarm}

                                    onChange={updateSmokeAlarm}>
                                </input>
                                <label htmlFor="add-amenity-input">First Aid Kit</label>
                                <input
                                    id="add-amenity-input"
                                    type="checkbox"
                                    checked={newFirstAidKit}

                                    onChange={updateFirstAidKit}>
                                </input>
                                <label htmlFor="add-amenity-input">Fire Extinguisher</label>
                                <input
                                    id="add-amenity-input"
                                    type="checkbox"
                                    checked={newFireExtinguisher}

                                    onChange={updateFireExtinguisher}>
                                </input>
                            </div>

                            <div className='floorPlan-upload-container'>

                                <label htmlFor="add-floorplan-input">Change Guests</label>
                                <input
                                    required
                                    id="add-floorplan-input"
                                    type="number"
                                    min="1"
                                    value={newGuests}
                                    onChange={updateGuests}>
                                </input>
                                <label htmlFor="add-floorplan-input">Change Beds</label>
                                <input
                                    required
                                    id="add-floorplan-input"
                                    type="number"
                                    min="1"
                                    value={newBeds}
                                    onChange={updateBeds}>
                                </input>
                                <label htmlFor="add-floorplan-input">Change Bedrooms</label>
                                <input
                                    required
                                    id="add-floorplan-input"
                                    type="number"
                                    min="1"
                                    value={newBedrooms}
                                    onChange={updateBedrooms}>
                                </input>
                                <label htmlFor="add-floorplan-input">Change Bathrooms</label>
                                <input
                                    required
                                    id="add-floorplan-input"
                                    type="number"
                                    min="1"
                                    value={newBathrooms}
                                    onChange={updateBathrooms}>
                                </input>



                            </div>

                            <div className='privacy-upload-container'>

                                <label htmlFor="add-privacy-input">Entire: </label>
                                <input
                                    required
                                    id="add-privacy-input"
                                    type="radio"
                                    value="entire"
                                    name="privacyRadio"
                                    checked={privacyState === "entire"}
                                    onChange={updatePrivacy}>
                                </input>
                                <label htmlFor="add-privacy-input">Private Room: </label>
                                <input

                                    id="add-privacy-input"
                                    type="radio"
                                    name="privacyRadio"
                                    checked={privacyState === "privateRoom"}
                                    value="privateRoom"
                                    onChange={updatePrivacy}>
                                </input>
                                <label htmlFor="add-privacy-input">Shared Room: </label>
                                <input

                                    id="add-privacy-input"
                                    type="radio"
                                    name="privacyRadio"
                                    checked={privacyState === "sharedRoom"}
                                    value="sharedRoom"
                                    onChange={updatePrivacy}>
                                </input>

                            </div>

                        </div>
                    }
                    <button type="submit">Create</button>
                </form>
            </div>



        </div>
    )
}

export default NewSpotForm
