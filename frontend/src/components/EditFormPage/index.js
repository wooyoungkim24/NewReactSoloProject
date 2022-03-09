import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, useHistory, useParams } from 'react-router-dom';
import * as sessionActions from "../../store/session";
import Navigation from '../Navigation';
import { editSpotStuff, getSpot, putPhoto } from "../../store/spot"
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
    useEffect(() => {
        dispatch(getSpot(id)).then(() => setIsLoaded(true))

    }, [dispatch])


    const didMountRef = useRef(false);
    useEffect(() => {
        if (didMountRef.current) {
            setNewTitle(spotInfo.title)
            setNewDesc(spotInfo.description)
            setNewCost(spotInfo.costPerNight)
            setNewAddress(spotInfo.address)
            setNewCity(spotInfo.city)
            // console.log(review)
        }
        didMountRef.current = true;

    }, [isLoaded])

    const spotInfo = useSelector(state => {
        return state.spots.individualSpot.spot
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
        let editedTitle = await dispatch(editSpotStuff(payload))
        history.goBack();
    }
    const handleCostSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            spotId: id,
            costPerNight: newCost,
            type: 'cost'
        }
        let editedTitle = await dispatch(editSpotStuff(payload))
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
        let editedTitle = await dispatch(editSpotStuff(payload))
        history.goBack();
    }


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


                                <label for="which-photo-input">Which Photo to Replace</label>
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
                                <label for="edit-title-input">Edit Title</label>
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
                                <label for="edit-description-input">Edit Description</label>
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
                                <label for="edit-cost-input">Change Cost per Night</label>
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
                                <label for="edit-address-input">Change Address</label>
                                <input
                                    id="edit-address-input"


                                    value={newAddress}
                                    onChange={updateAddress}>
                                </input>
                                <label for="edit-city-input">Change City</label>
                                <input
                                    id="edit-city-input"

                                    value={newCity}
                                    onChange={updateCity}>
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
