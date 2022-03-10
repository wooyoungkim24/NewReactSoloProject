import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, useHistory, useParams } from 'react-router-dom';
import * as sessionActions from "../../store/session";
import Navigation from '../Navigation';
import { addSpotType, addSpotSub } from "../../store/spot"
import { csrfFetch } from '../../store/csrf'
import Cookies from 'js-cookie';



function NewSpotDetailForm({ newSpot }) {
    const dispatch = useDispatch();
    const user = useSelector(state => {
        return state.session.user
    })

    const [newSpotType, setNewSpotType] = useState("")
    const [newSpotSub, setNewSpotSub] = useState("")

    const updateSpotType = (e) => {
        setNewSpotType(e.target.value)
    }
    const updateSpotSub = (e) => {
        setNewSpotSub(e.target.value)
    }


    console.log(newSpot)

    const handleSubmit = async (e) => {
        e.preventDefault();
        // const selectedFiles1 = document.getElementById('add-photo-input1').files[0];
        // const selectedFiles2 = document.getElementById('add-photo-input2').files[0];
        // const selectedFiles3 = document.getElementById('add-photo-input3').files[0];
        // const selectedFiles4 = document.getElementById('add-photo-input4').files[0];
        // const selectedFiles5 = document.getElementById('add-photo-input5').files[0];

        // const key1 = `Spot${newSpot.id}_${selectedFiles1.name}`
        // const key2 = `Spot${newSpot.id}_${selectedFiles2.name}`
        // const key3 = `Spot${newSpot.id}_${selectedFiles3.name}`
        // const key4 = `Spot${newSpot.id}_${selectedFiles4.name}`
        // const key5 = `Spot${newSpot.id}_${selectedFiles5.name}`

        // const formData1 = new FormData();
        // formData1.append("File", selectedFiles1)

        // const formData2 = new FormData();
        // formData2.append("File", selectedFiles2)

        // const formData3 = new FormData();
        // formData3.append("File", selectedFiles3)

        // const formData4 = new FormData();
        // formData4.append("File", selectedFiles4)

        // const formData5 = new FormData();
        // formData5.append("File", selectedFiles5)

        // //Array length error


        // const fetch1 = fetch(`/api/spots/photoAdd/${key1}`, {
        //     method: "POST",
        //     headers: { "XSRF-TOKEN": Cookies.get('XSRF-TOKEN') },
        //     body: formData1
        // })
        // const fetch2 = fetch(`/api/spots/photoAdd/${key2}`, {
        //     method: "POST",
        //     headers: { "XSRF-TOKEN": Cookies.get('XSRF-TOKEN') },
        //     body: formData2
        // })
        // const fetch3 = fetch(`/api/spots/photoAdd/${key3}`, {
        //     method: "POST",
        //     headers: { "XSRF-TOKEN": Cookies.get('XSRF-TOKEN') },
        //     body: formData3
        // })
        // const fetch4 = fetch(`/api/spots/photoAdd/${key4}`, {
        //     method: "POST",
        //     headers: { "XSRF-TOKEN": Cookies.get('XSRF-TOKEN') },
        //     body: formData4
        // })
        // const fetch5 = fetch(`/api/spots/photoAdd/${key5}`, {
        //     method: "POST",
        //     headers: { "XSRF-TOKEN": Cookies.get('XSRF-TOKEN') },
        //     body: formData5
        // })
        // Promise.all([fetch1, fetch2, fetch3, fetch4, fetch5]);
        const spotTypePayload = {
            spotId:newSpot.id,
        }
        spotTypePayload[newSpotType]=true;
        const subTypePayload = {
            spotId:newSpot.id,
            newSpotType
        }
        subTypePayload[newSpotSub]=true;
        let newSpotTypeObject = await dispatch(addSpotType(spotTypePayload))
        let newSpotSubObject = await dispatch(addSpotSub(subTypePayload))
    }



    return (

        <div className='new-spot-form-container-bottom'>
            <form className='really-big-form-2' onSubmit={handleSubmit}>
                <div className='photo-upload-container'>
                    <div className='photo-upload-input-div1'>
                        Photos1:
                        <input
                            id="add-photo-input1"
                            type="file"
                            accept="image/*"
                        >
                        </input>
                    </div>
                    <div className='photo-upload-input-div2'>
                        Photos:
                        <input
                            id="add-photo-input2"
                            type="file"
                            accept="image/*"
                        >
                        </input>
                    </div>
                    <div className='photo-upload-input-div3'>
                        Photos:
                        <input
                            id="add-photo-input3"
                            type="file"
                            accept="image/*"
                        >
                        </input>
                    </div>
                    <div className='photo-upload-input-div4'>
                        Photos:
                        <input
                            id="add-photo-input4"
                            type="file"
                            accept="image/*"
                        >
                        </input>
                    </div>
                    <div className='photo-upload-input-div5'>
                        Photos:
                        <input
                            id="add-photo-input5"
                            type="file"
                            accept="image/*"
                        >
                        </input>
                    </div>
                </div>

                <div className='spot-types-upload-container'>
                    <label htmlFor="add-spotType-input">Change Spot Type</label>
                    <select
                        id="add-spotType-input"
                        value={newSpotType}
                        onChange={updateSpotType}>
                        <option value="apartment">1--Apartment</option>
                        <option value="house">2--House</option>
                        <option value="secondaryUnit">3--Secondary Unit</option>
                        <option value="bnb">4--BnB</option>

                    </select>
                    <label htmlFor="add-subtType-input">Change Spot SubType</label>
                    <select
                        id="add-subType-input"
                        value={newSpotSub}
                        onChange={updateSpotSub}>
                        {newSpotType === "house"  &&
                            <>
                                <option value="">--Pick a new spot subtype</option>
                                <option value="residential">1--Residential</option>
                                <option value="cabin">2--Cabin</option>
                                <option value="villa">3--Villa</option>
                                <option value="townhouse">4--Townhouse</option>
                            </>
                        }
                        {newSpotType === "apartment" ||newSpotType === ""&&
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
                </div>

                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default NewSpotDetailForm
