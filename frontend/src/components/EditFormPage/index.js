import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, useHistory, useParams } from 'react-router-dom';
import * as sessionActions from "../../store/session";
import Navigation from '../Navigation';
import { editSpotStuff, getSpot, putPhoto, editSpotType, editSpotSub, editAmenity } from "../../store/spot"
import { csrfFetch } from '../../store/csrf'
import Cookies from 'js-cookie';


function EditFormPage() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { type } = useParams();
    const splitType = type.split("_");
    const id = parseInt(splitType[1])

    const [isLoaded, setIsLoaded] = useState(false)
    const [formType, setFormType] = useState(splitType[0])
    const [photoNumber, setPhotoNumber] = useState(1)

    const [newTitle, setNewTitle] = useState("")
    const [newDesc, setNewDesc] = useState("")
    const [newCost, setNewCost] = useState("")
    const [newAddress, setNewAddress] = useState("")
    const [newCity, setNewCity] = useState("")
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

    console.log('what is the value',newPool)
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











    useEffect(() => {
        dispatch(getSpot(id)).then(() => setIsLoaded(true))

    }, [dispatch])
    function FilterTrue(obj) {
        let keys = Object.keys(obj);
        let returned = keys.filter(ele => obj[ele] === true)
        return returned;
    }

    const didMountRef = useRef(false);
    useEffect(() => {
        if (didMountRef.current) {
            setNewTitle(spotInfo.title)
            setNewDesc(spotInfo.description)
            setNewCost(spotInfo.costPerNight)
            setNewAddress(spotInfo.address)
            setNewCity(spotInfo.city)
            setNewSpotType(FilterTrue(spotInfo.SpotType)[0])




            setNewPool(spotInfo.Amenity.pool)
            setNewFirePit(spotInfo.Amenity.firePit)
            setNewFirePlace(spotInfo.Amenity.firePlace)
            setNewExerciseEquipment(spotInfo.Amenity.exerciseEquipment)
            setNewWifi(spotInfo.Amenity.wifi)
            setNewTv(spotInfo.Amenity.tv)
            setNewKitchen(spotInfo.Amenity.kitchen)
            setNewWasher(spotInfo.Amenity.washer)
            setNewAirConditioning(spotInfo.Amenity.airConditioning)
            setNewSmokeAlarm(spotInfo.Amenity.smokeAlarm)
            setNewFirstAidKit(spotInfo.Amenity.firstAidKit)
            setNewFireExtinguisher(spotInfo.Amenity.fireExtinguisher)
            setNewPatio(spotInfo.Amenity.patio)

            // console.log(review)
        }
        didMountRef.current = true;

    }, [isLoaded])

    const spotInfo = useSelector(state => {
        return state.spots.individualSpot.spot
    })
    const spotInfoSub = useSelector(state =>{
        return state.spots.individualSpot.subType
    })
    const photos = useSelector(state => {
        return state.spots.individualSpot.photoObj
    })
    const updatePhotoNumber = (e) => {
        setPhotoNumber(e.target.value)
    }
    const updateTitle = (e) => {
        setNewTitle(e.target.value)
    }
    const updateDesc = (e) => {
        setNewDesc(e.target.value)
    }
    const updateCost = (e) => {
        setNewCost(e.target.value)
    }
    const updateAddress = (e) => {
        setNewAddress(e.target.value)
    }
    const updateCity = (e) => {
        setNewCity(e.target.value)
    }
    const updateSpotType = (e) => {
        setNewSpotType(e.target.value)
    }
    const updateSpotSub = (e) => {
        setNewSpotSub(e.target.value)
    }
    const handlePhotoSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        const selectedFile = document.getElementById('edit-photo-input').files[0];
        console.log(selectedFile)
        const photoArray = photos[id]
        const photoToDelete = photoArray[photoNumber - 1]
        const key = `Spot${id}_${selectedFile.name}_${photoToDelete}`
        formData.append('File', selectedFile);
        console.log('form', formData)
        // dispatch(putPhoto(payload))
        await fetch(`/api/spots/photoPost/${key}`, {
            method: "POST",
            headers: { "XSRF-TOKEN": Cookies.get('XSRF-TOKEN') },
            body: formData
        })
    }

    const handleTitleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            spotId: id,
            title: newTitle,
            type: 'title'
        }
        let editedTitle = await dispatch(editSpotStuff(payload))
        history.goBack();
    }
    const handleDescriptionSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            spotId: id,
            description: newDesc,
            type: 'description'
        }
        let editedDesc = await dispatch(editSpotStuff(payload))
        history.goBack();
    }
    const handleCostSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            spotId: id,
            costPerNight: newCost,
            type: 'cost'
        }
        let editedCost = await dispatch(editSpotStuff(payload))
        history.goBack();
    }
    const handleAddressSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            spotId: id,
            address: newAddress,
            city: newCity,
            type: 'address'
        }
        let editedAddress = await dispatch(editSpotStuff(payload))
        history.goBack();
    }
    const handleAmenitySubmit = async (e) => {
        e.preventDefault();
        const payload = {
            spotId: id,
            pool:newPool,
            patio:newPatio,
            firePit:newFirePit,
            firePlace:newFirePlace,
            exerciseEquipment:newExerciseEquipment,
            wifi:newWifi,
            tv:newTv,
            kitchen:newKitchen,
            washer:newWasher,
            airConditioning:newAirConditioning,
            smokeAlarm:newSmokeAlarm,
            firstAidKit:newFirstAidKit,
            fireExtinguisher:newFireExtinguisher
        }
        let editedAmenity = await dispatch(editAmenity(payload))
        history.goBack();
    }
    const handleSpotTypeSubmit = async (e) => {
        e.preventDefault();
        console.log("are u working")
        const oldSpotType= FilterTrue(spotInfo.SpotType)[0]
        const oldSpotSub= FilterTrue(spotInfoSub)[0]
        const payload1 = {
            id,
        }
        const payload2 = {
            spotId:id,
            oldSpotType,
            newSpotType,
        }
        payload1[oldSpotType]=false;
        payload1[newSpotType]=true;
        payload2[oldSpotSub] = false;
        payload2[newSpotSub] =true;
        let editedSpotType = await dispatch(editSpotType(payload1))
        let editedSpotSub = await dispatch(editSpotSub(payload2))
        history.goBack();
    }

    // const houseSubArray = ["residential", "cabin", "villa", "townhouse"]
    // const apartmentSubArray = ["rental", "condo", "loft", "vacationHome"]
    // const BnBSubArray = ["guestHouse", "guestSuite", "farmStay", "vacationHome"]
    // const secondaryUnitSubArray = ["bnb", "natureLodge", "farmStay"]

    return (
        <>
            {isLoaded &&
                <div>
                    {console.log(formType)}
                    {formType === "photo" &&
                        <div>
                            <form onSubmit={handlePhotoSubmit}>
                                <label htmlFor="edit-photo-input">Select new Photo</label>
                                <input
                                    id="edit-photo-input"
                                    type="file"
                                    accept="image/*"

                                >
                                </input>


                                <label htmlFor="which-photo-input">Which Photo to Replace</label>
                                <input
                                    id="which-photo-input"
                                    type="number"
                                    min="1"
                                    value={photoNumber}
                                    onChange={updatePhotoNumber}>

                                </input>
                                <button type='submit'>Add</button>

                            </form>
                        </div>
                    }
                    {formType === "title" &&
                        <div>
                            <form onSubmit={handleTitleSubmit}>
                                <label htmlFor="edit-title-input">Edit Title</label>
                                <input
                                    id="edit-title-input"
                                    type="text"

                                    value={newTitle}
                                    onChange={updateTitle}>

                                </input>
                                <button type='submit'>Change</button>

                            </form>
                        </div>
                    }
                    {formType === "description" &&
                        <div>
                            <form onSubmit={handleDescriptionSubmit}>
                                <label htmlFor="edit-description-input">Edit Description</label>
                                <textarea
                                    id="edit-description-input"


                                    value={newDesc}
                                    onChange={updateDesc}>

                                </textarea>
                                <button type='submit'>Change</button>

                            </form>
                        </div>
                    }

                    {formType === "cost" &&
                        <div>
                            <form onSubmit={handleCostSubmit}>
                                <label htmlFor="edit-cost-input">Change Cost per Night</label>
                                <input
                                    id="edit-cost-input"
                                    type='number'
                                    min="0"

                                    value={newCost}
                                    onChange={updateCost}>

                                </input>
                                <button type='submit'>Change</button>

                            </form>
                        </div>
                    }

                    {formType === "where" &&
                        <div>
                            <form onSubmit={handleAddressSubmit}>
                                <label htmlFor="edit-address-input">Change Address</label>
                                <input
                                    id="edit-address-input"


                                    value={newAddress}
                                    onChange={updateAddress}>
                                </input>
                                <label htmlFor="edit-city-input">Change City</label>
                                <input
                                    id="edit-city-input"

                                    value={newCity}
                                    onChange={updateCity}>
                                </input>
                                <button type='submit'>Change</button>

                            </form>
                        </div>
                    }
                    {formType === "spotType" &&
                        <div>
                            <form onSubmit={handleSpotTypeSubmit}>
                                <label htmlFor="edit-spotType-input">Change Address</label>
                                <select
                                    id="edit-spotType-input"
                                    value={newSpotType}
                                    onChange={updateSpotType}>
                                    <option value="apartment">1--Apartment</option>
                                    <option value="house">2--House</option>
                                    <option value="secondaryUnit">3--Secondary Unit</option>
                                    <option value="bnb">4--BnB</option>

                                </select>
                                <label htmlFor="edit-subtType-input">Change City</label>
                                <select
                                    id="edit-subType-input"
                                    value={newSpotSub}
                                    onChange={updateSpotSub}>
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
                                <button type='submit'>Change</button>

                            </form>
                        </div>
                    }
                    {formType === "amenity" &&
                        <div>
                            <form onSubmit={handleAmenitySubmit}>
                                <label htmlFor="edit-amenity-input">Pool</label>
                                <input
                                    id="edit-amenity-input"
                                    type="checkbox"

                                    checked = {newPool}

                                    onChange={updatePool}>
                                </input>
                                <label htmlFor="edit-amenity-input">Patio</label>
                                <input
                                    id="edit-amenity-input"
                                    type="checkbox"
                                    checked = {newPatio}

                                    onChange={updatePatio}>
                                </input>
                                <label htmlFor="edit-amenity-input">Fire Pit</label>
                                <input
                                    id="edit-amenity-input"
                                    type="checkbox"
                                    checked = {newFirePit}

                                    onChange={updateFirePit}>
                                </input>
                                <label htmlFor="edit-amenity-input">Fire Place</label>
                                <input
                                    id="edit-amenity-input"
                                    type="checkbox"
                                    checked = {newFirePlace}

                                    onChange={updateFirePlace}>
                                </input>
                                <label htmlFor="edit-amenity-input">Exercise Equipment</label>
                                <input
                                    id="edit-amenity-input"
                                    type="checkbox"
                                    checked = {newExerciseEquipment}

                                    onChange={updateExerciseEquipment}>
                                </input>
                                <label htmlFor="edit-amenity-input">Wifi</label>
                                <input
                                    id="edit-amenity-input"
                                    type="checkbox"
                                    checked = {newWifi}

                                    onChange={updateWifi}>
                                </input>
                                <label htmlFor="edit-amenity-input">TV</label>
                                <input
                                    id="edit-amenity-input"
                                    type="checkbox"
                                    checked = {newTv}

                                    onChange={updateTv}>
                                </input>
                                <label htmlFor="edit-amenity-input">Kitchen</label>
                                <input
                                    id="edit-amenity-input"
                                    type="checkbox"
                                    checked = {newKitchen}

                                    onChange={updateKitchen}>
                                </input>
                                <label htmlFor="edit-amenity-input">Washer</label>
                                <input
                                    id="edit-amenity-input"
                                    type="checkbox"
                                    checked = {newWasher}

                                    onChange={updateWasher}>
                                </input>
                                <label htmlFor="edit-amenity-input">Air Conditioning</label>
                                <input
                                    id="edit-amenity-input"
                                    type="checkbox"
                                    checked = {newAirConditioning}

                                    onChange={updateAirConditioning}>
                                </input>
                                <label htmlFor="edit-amenity-input">Smoke Alarm</label>
                                <input
                                    id="edit-amenity-input"
                                    type="checkbox"
                                    checked = {newSmokeAlarm}

                                    onChange={updateSmokeAlarm}>
                                </input>
                                <label htmlFor="edit-amenity-input">First Aid Kit</label>
                                <input
                                    id="edit-amenity-input"
                                    type="checkbox"
                                    checked = {newFirstAidKit}

                                    onChange={updateFirstAidKit}>
                                </input>
                                <label htmlFor="edit-amenity-input">Fire Extinguisher</label>
                                <input
                                    id="edit-amenity-input"
                                    type="checkbox"
                                    checked = {newFireExtinguisher}

                                    onChange={updateFireExtinguisher}>
                                </input>
                                <button type='submit'>Change</button>

                            </form>
                        </div>
                    }

                </div>}

        </>


    )

}



export default EditFormPage;
