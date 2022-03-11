import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, useHistory, useParams } from 'react-router-dom';
import * as sessionActions from "../../store/session";
import Navigation from '../Navigation';
import { editPrivacy, editFloorPlan, editSpotStuff, getSpot, putPhoto, editSpotType, editSpotSub, editAmenity } from "../../store/spot"
import { csrfFetch } from '../../store/csrf'
import Cookies from 'js-cookie';
import "./index.css"

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
    const [newCost, setNewCost] = useState(0)
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

    const [newGuests, setNewGuests] = useState(1);
    const [newBeds, setNewBeds] = useState(1);
    const [newBedrooms, setNewBedrooms] = useState(1);
    const [newBathrooms, setNewBathrooms] = useState(1);

    const [oldPrivacyState, setOldPrivacyState] = useState("")
    const [privacyState, setPrivacyState] = useState("");
    // const [entire, setEntire] = useState(false)
    // const [privateR, setPrivateR] = useState(false)
    // const [shared, setShared]= useState(false)


    console.log(privacyState)
    const updatePrivacy = (e) => {
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


            setNewGuests(spotInfo.FloorPlan.guests)
            setNewBeds(spotInfo.FloorPlan.beds)
            setNewBedrooms(spotInfo.FloorPlan.bedrooms)
            setNewBathrooms(spotInfo.FloorPlan.bathrooms)


            // setEntire(spotInfo.PrivacyType.entire)
            // setPrivateR(spotInfo.PrivacyType.privateRoom)
            // setShared(spotInfo.PrivacyType.sharedRoom)

            setPrivacyState(FilterTrue(spotInfo.PrivacyType)[0])
            setOldPrivacyState(FilterTrue(spotInfo.PrivacyType)[0])
            // console.log(review)
        }
        didMountRef.current = true;

    }, [isLoaded])

    const spotInfo = useSelector(state => {
        return state.spots.individualSpot.spot
    })
    const spotInfoSub = useSelector(state => {
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

    function returnFileSize(number) {
        if (number < 1024) {
            return number + 'bytes';
        } else if (number >= 1024 && number < 1048576) {
            return (number / 1024).toFixed(1) + 'KB';
        } else if (number >= 1048576) {
            return (number / 1048576).toFixed(1) + 'MB';
        }
    }



    function updateImageDisplay() {
        const photoInput = document.getElementById('edit-photo-input')

        const preview = document.querySelector('.preview');
        while (preview.firstChild) {
            preview.removeChild(preview.firstChild);
        }


        const curFiles = photoInput.files
        if (curFiles.length === 0) {
            const para = document.createElement('p');
            para.textContent = 'No files currently selected for upload';
            preview.appendChild(para);
        } else {
            const list = document.createElement('ol');
            preview.appendChild(list);
            const listItem = document.createElement('li')
            const file = curFiles[0]
            const para = document.createElement('p')
            para.textContent = `File name ${file.name}, file size ${returnFileSize(file.size)}.`;
            const image = document.createElement('img')
            image.src = URL.createObjectURL(file)

            listItem.appendChild(para);
            listItem.appendChild(image);


            list.appendChild(listItem)
        }
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
        let editedAmenity = await dispatch(editAmenity(payload))
        history.goBack();
    }
    const handleSpotTypeSubmit = async (e) => {
        e.preventDefault();
        console.log("are u working")
        const oldSpotType = FilterTrue(spotInfo.SpotType)[0]
        const oldSpotSub = FilterTrue(spotInfoSub)[0]
        const payload1 = {
            id,
        }
        const payload2 = {
            spotId: id,
            oldSpotType,
            newSpotType,
        }
        payload1[oldSpotType] = false;
        payload1[newSpotType] = true;
        payload2[oldSpotSub] = false;
        payload2[newSpotSub] = true;
        let editedSpotType = await dispatch(editSpotType(payload1))
        let editedSpotSub = await dispatch(editSpotSub(payload2))
        history.goBack();
    }


    const handleFloorPlanSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            spotId: id,
            guests: newGuests,
            beds: newBeds,
            bedrooms: newBedrooms,
            bathrooms: newBathrooms
        }
        let editedFloorPlan = await dispatch(editFloorPlan(payload))
        history.goBack();
    }
    const handlePrivacySubmit = async (e) => {
        e.preventDefault();
        const payload = {
            spotId: id
        }
        payload[oldPrivacyState] = false;
        payload[privacyState] = true
        let editedPrivacy = await dispatch(editPrivacy(payload))
        history.goBack();
    }

    // const houseSubArray = ["residential", "cabin", "villa", "townhouse"]
    // const apartmentSubArray = ["rental", "condo", "loft", "vacationHome"]
    // const BnBSubArray = ["guestHouse", "guestSuite", "farmStay", "vacationHome"]
    // const secondaryUnitSubArray = ["bnb", "natureLodge", "farmStay"]

    return (
        <>
            {isLoaded &&
                <div className='edit-form-container'>
                    {console.log(formType)}
                    {formType === "photo" &&
                        <div>
                            <form className='edit-photo-form' onSubmit={handlePhotoSubmit}>
                                <div className='edit-photo-top'>
                                    <div className='photo-file-input'>
                                        <label id='edit-photo-input-label' htmlFor="edit-photo-input">Select new Photo</label>
                                        <input
                                            onChange={updateImageDisplay}
                                            id="edit-photo-input"
                                            type="file"
                                            accept="image/*"
                                            required
                                        >
                                        </input>
                                    </div>


                                    <div class="preview">
                                        <p>No files currently selected for upload</p>
                                    </div>
                                </div>
                                <div className='edit-photo-bottom'>
                                    <label htmlFor="which-photo-input">Which Photo to Replace</label>
                                    <input
                                        id="which-photo-input"
                                        type="number"
                                        min="1"
                                        max="5"
                                        value={photoNumber}
                                        required
                                        onChange={updatePhotoNumber}>
                                    </input>
                                </div>




                            </form>
                            <div className='button-div'>
                                <button id='add-button' form="edit-photo-form" type='submit'>Add</button>
                                <button id='cancel-button' type='button' onClick={() => history.goBack()}>Cancel</button>
                            </div>

                        </div>
                    }
                    {formType === "title" &&
                        <div>
                            <form id='edit-title-form' onSubmit={handleTitleSubmit}>
                                <label htmlFor="edit-title-input">Edit Title: </label>
                                <input
                                    id="edit-title-input"
                                    type="text"
                                    required
                                    value={newTitle}
                                    onChange={updateTitle}>

                                </input>


                            </form>
                            <div className='button-div'>
                                <button id='add-button' form="edit-title-form" type='submit'>Change</button>
                                <button id='cancel-button' type='button' onClick={() => history.goBack()}>Cancel</button>
                            </div>
                        </div>
                    }
                    {formType === "description" &&
                        <div>
                            <form onSubmit={handleDescriptionSubmit}>
                                <label htmlFor="edit-description-input">Edit Description</label>
                                <textarea
                                    id="edit-description-input"

                                    required
                                    value={newDesc}
                                    onChange={updateDesc}>

                                </textarea>
                                <button type='submit'>Change</button>

                            </form>
                            <button id='cancel-button' type='button' onClick={() => history.goBack()}>Cancel</button>
                        </div>
                    }

                    {formType === "cost" &&
                        <div>
                            <form id='cost-form-edit' onSubmit={handleCostSubmit}>
                                <label htmlFor="edit-cost-input">Change Cost per Night</label>
                                <input
                                    id="edit-cost-input"
                                    type='number'
                                    min="0"
                                    required
                                    value={newCost}
                                    onChange={updateCost}>

                                </input>


                            </form>
                            <button form='cost-form-edit' type='submit'>Change</button>
                            <button id='cancel-button' type='button' onClick={() => history.goBack()}>Cancel</button>
                        </div>
                    }

                    {formType === "where" &&
                        <div>
                            <form onSubmit={handleAddressSubmit}>
                                <label htmlFor="edit-address-input">Change Address</label>
                                <input
                                    id="edit-address-input"

                                    required
                                    value={newAddress}
                                    onChange={updateAddress}>
                                </input>
                                <label htmlFor="edit-city-input">Change City</label>
                                <input
                                    id="edit-city-input"
                                    required
                                    value={newCity}
                                    onChange={updateCity}>
                                </input>
                                <button type='submit'>Change</button>

                            </form>
                            <button id='cancel-button' type='button' onClick={() => history.goBack()}>Cancel</button>
                        </div>
                    }
                    {formType === "spotType" &&
                        <div>
                            <form onSubmit={handleSpotTypeSubmit}>
                                <label htmlFor="edit-spotType-input">Change Address</label>
                                <select
                                    required
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
                                    required
                                    id="edit-subType-input"
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
                                <button type='submit'>Change</button>

                            </form>
                            <button id='cancel-button' type='button' onClick={() => history.goBack()}>Cancel</button>
                        </div>
                    }
                    {formType === "amenity" &&
                        <div>
                            <form onSubmit={handleAmenitySubmit}>
                                <label htmlFor="edit-amenity-input">Pool</label>
                                <input
                                    id="edit-amenity-input"
                                    type="checkbox"

                                    checked={newPool}

                                    onChange={updatePool}>
                                </input>
                                <label htmlFor="edit-amenity-input">Patio</label>
                                <input
                                    id="edit-amenity-input"
                                    type="checkbox"
                                    checked={newPatio}

                                    onChange={updatePatio}>
                                </input>
                                <label htmlFor="edit-amenity-input">Fire Pit</label>
                                <input
                                    id="edit-amenity-input"
                                    type="checkbox"
                                    checked={newFirePit}

                                    onChange={updateFirePit}>
                                </input>
                                <label htmlFor="edit-amenity-input">Fire Place</label>
                                <input
                                    id="edit-amenity-input"
                                    type="checkbox"
                                    checked={newFirePlace}

                                    onChange={updateFirePlace}>
                                </input>
                                <label htmlFor="edit-amenity-input">Exercise Equipment</label>
                                <input
                                    id="edit-amenity-input"
                                    type="checkbox"
                                    checked={newExerciseEquipment}

                                    onChange={updateExerciseEquipment}>
                                </input>
                                <label htmlFor="edit-amenity-input">Wifi</label>
                                <input
                                    id="edit-amenity-input"
                                    type="checkbox"
                                    checked={newWifi}

                                    onChange={updateWifi}>
                                </input>
                                <label htmlFor="edit-amenity-input">TV</label>
                                <input
                                    id="edit-amenity-input"
                                    type="checkbox"
                                    checked={newTv}

                                    onChange={updateTv}>
                                </input>
                                <label htmlFor="edit-amenity-input">Kitchen</label>
                                <input
                                    id="edit-amenity-input"
                                    type="checkbox"
                                    checked={newKitchen}

                                    onChange={updateKitchen}>
                                </input>
                                <label htmlFor="edit-amenity-input">Washer</label>
                                <input
                                    id="edit-amenity-input"
                                    type="checkbox"
                                    checked={newWasher}

                                    onChange={updateWasher}>
                                </input>
                                <label htmlFor="edit-amenity-input">Air Conditioning</label>
                                <input
                                    id="edit-amenity-input"
                                    type="checkbox"
                                    checked={newAirConditioning}

                                    onChange={updateAirConditioning}>
                                </input>
                                <label htmlFor="edit-amenity-input">Smoke Alarm</label>
                                <input
                                    id="edit-amenity-input"
                                    type="checkbox"
                                    checked={newSmokeAlarm}

                                    onChange={updateSmokeAlarm}>
                                </input>
                                <label htmlFor="edit-amenity-input">First Aid Kit</label>
                                <input
                                    id="edit-amenity-input"
                                    type="checkbox"
                                    checked={newFirstAidKit}

                                    onChange={updateFirstAidKit}>
                                </input>
                                <label htmlFor="edit-amenity-input">Fire Extinguisher</label>
                                <input
                                    id="edit-amenity-input"
                                    type="checkbox"
                                    checked={newFireExtinguisher}

                                    onChange={updateFireExtinguisher}>
                                </input>
                                <button type='submit'>Change</button>

                            </form>
                            <button id='cancel-button' type='button' onClick={() => history.goBack()}>Cancel</button>
                        </div>
                    }
                    {formType === "floorPlan" &&
                        <div>
                            <form onSubmit={handleFloorPlanSubmit}>
                                <label htmlFor="edit-floorplan-input">Change Guests</label>
                                <input
                                    required

                                    id="edit-floorplan-input"
                                    type="number"
                                    min="1"
                                    value={newGuests}
                                    onChange={updateGuests}>
                                </input>
                                <label htmlFor="edit-floorplan-input">Change Beds</label>
                                <input
                                    required
                                    id="edit-floorplan-input"
                                    type="number"
                                    min="1"
                                    value={newBeds}
                                    onChange={updateBeds}>
                                </input>
                                <label htmlFor="edit-floorplan-input">Change Bedrooms</label>
                                <input
                                    required
                                    id="edit-floorplan-input"
                                    type="number"
                                    min="1"
                                    value={newBedrooms}
                                    onChange={updateBedrooms}>
                                </input>
                                <label htmlFor="edit-floorplan-input">Change Bathrooms</label>
                                <input
                                    required
                                    id="edit-floorplan-input"
                                    type="number"
                                    min="1"
                                    value={newBathrooms}
                                    onChange={updateBathrooms}>
                                </input>
                                <button type='submit'>Change</button>

                            </form>
                            <button id='cancel-button' type='button' onClick={() => history.goBack()}>Cancel</button>
                        </div>
                    }
                    {formType === "privacy" &&
                        <div>
                            <form onSubmit={handlePrivacySubmit}>
                                <label htmlFor="edit-privacy-input">Entire: </label>
                                <input
                                    id="edit-privacy-input"
                                    required
                                    type="radio"
                                    value="entire"
                                    name="privacyRadio"
                                    checked={privacyState === "entire"}
                                    onChange={updatePrivacy}>
                                </input>
                                <label htmlFor="edit-privacy-input">Private Room: </label>
                                <input
                                    id="edit-privacy-input"
                                    type="radio"
                                    checked={privacyState === "privateRoom"}
                                    name="privacyRadio"
                                    value="privateRoom"
                                    onChange={updatePrivacy}>
                                </input>
                                <label htmlFor="edit-privacy-input">Shared Room: </label>
                                <input
                                    id="edit-privacy-input"
                                    type="radio"
                                    name="privacyRadio"
                                    checked={privacyState === "sharedRoom"}
                                    value="sharedRoom"
                                    onChange={updatePrivacy}>
                                </input>
                                <button type='submit'>Change</button>

                            </form>
                            <button id='cancel-button' type='button' onClick={() => history.goBack()}>Cancel</button>
                        </div>
                    }

                </div>}

        </>


    )

}



export default EditFormPage;
