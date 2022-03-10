import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, useHistory, useParams } from 'react-router-dom';
import * as sessionActions from "../../store/session";
import Navigation from '../Navigation';
import { deleteSpotSub,getSpot, deleteSpot, deleteAmenity, deletePrivacy, deleteFloorPlan, deletePhotos, deleteSpotType } from "../../store/spot"
import Cookies from 'js-cookie';

function DeleteConfirmModal ({id}) {
    const dispatch = useDispatch();
    const history = useHistory();
    console.log(id)
    function FilterTrue(obj) {
        let keys = Object.keys(obj);
        let returned = keys.filter(ele => obj[ele] === true)
        return returned;
    }
    const spotInfo = useSelector(state =>{
        return state.spots.individualSpot.spot
    })
    const handleConfirm = async(e) =>{
        const payload = {
            id
        }
        let type = FilterTrue(spotInfo.SpotType)
        const payloadSpecial = {
            id,
            type
        }
        let deleteTest = await dispatch(deletePhotos(payload))
        let deleteAmenityTest = await dispatch(deleteAmenity(payload))
        
        // const fetchPhotoDelete = fetch(`/api/spots/photosDelete`, {
        //     method: "POST",
        //     headers: { "XSRF-TOKEN": Cookies.get('XSRF-TOKEN') },
        //     body: JSON.stringify(payload)
        // })

        // const fetchAmenityDelete = fetch(`/api/spots/amenity`, {
        //     method: "POST",
        //     headers: { "XSRF-TOKEN": Cookies.get('XSRF-TOKEN') },
        //     body: JSON.stringify(payload)
        // })

        // const fetchFloorPlanDelete = fetch(`/api/spots/amenity`, {
        //     method: "POST",
        //     headers: { "XSRF-TOKEN": Cookies.get('XSRF-TOKEN') },
        //     body: JSON.stringify(payload)
        // })



        // await dispatch(deleteFloorPlan(payload))
        // await dispatch(deletePrivacy(payload))
        // await dispatch(deleteSpotSub(payloadSpecial))

        // await dispatch(deleteSpotType(payload))


        // await dispatch(deleteSpot(payload)).then(() =>history.goBack())
    }


    return (

        <div className="confirming-delete">
            <p>Are you sure you want to delete this spot?</p>
            <div className="confirm-buttons">
                <button
                    onClick={handleConfirm}
                >
                    Yes
                </button>
            </div>
        </div>

    )
}



export default DeleteConfirmModal;
