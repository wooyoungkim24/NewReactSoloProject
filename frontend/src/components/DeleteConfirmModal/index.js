import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, useHistory, useParams } from 'react-router-dom';
import * as sessionActions from "../../store/session";
import Navigation from '../Navigation';
import { deleteSpotSub, getSpot, deleteSpot, deleteAmenity, deletePrivacy, deleteFloorPlan, deletePhotos, deleteSpotType } from "../../store/spot"
import Cookies from 'js-cookie';
import "./index.css"

function DeleteConfirmModal({ id }) {
    const dispatch = useDispatch();
    const history = useHistory();

    function FilterTrue(obj) {
        let keys = Object.keys(obj);
        let returned = keys.filter(ele => obj[ele] === true)
        return returned;
    }
    const spotInfo = useSelector(state => {
        return state.spots.individualSpot.spot
    })
    const handleConfirm = async (e) => {
        const payload = {
            id
        }
        let type = FilterTrue(spotInfo.SpotType)
        const payloadSpecial = {
            spotId: id,
            type
        }
        await dispatch(deletePhotos(payload))
        await dispatch(deleteAmenity(payload))
        await dispatch(deleteFloorPlan(payload))
        await dispatch(deletePrivacy(payload))
        await dispatch(deleteSpotSub(payloadSpecial))

        await dispatch(deleteSpotType(payload))

        // const fetchPhotoDelete = fetch(`/api/spots/photosDelete`, {
        //     method: "POST",
        //     headers: { "XSRF-TOKEN": Cookies.get('XSRF-TOKEN') },
        //     body: JSON.stringify(payload)
        // })

        // const fetchAmenityDelete = fetch(`/api/spots/amenity`, {
        //     method: "DELETE",
        //     headers: { "XSRF-TOKEN": Cookies.get('XSRF-TOKEN') },
        //     body: JSON.stringify(payload)
        // })

        // const fetchFloorPlanDelete = fetch(`/api/spots/floorPlan`, {
        //     method: "DELETE",
        //     headers: { "XSRF-TOKEN": Cookies.get('XSRF-TOKEN') },
        //     body: JSON.stringify(payload)
        // })
        // const fetchPrivacyDelete = fetch(`/api/spots/privacyType`, {
        //     method: "DELETE",
        //     headers: { "XSRF-TOKEN": Cookies.get('XSRF-TOKEN') },
        //     body: JSON.stringify(payload)
        // })

        // const fetchSpotSubDelete = fetch(`/api/spots/${type}SpotType`, {
        //     method: "DELETE",
        //     headers: { "XSRF-TOKEN": Cookies.get('XSRF-TOKEN') },
        //     body: JSON.stringify(payload)
        // })

        // const fetchSpotTypeDelete = fetch(`/api/spots/spotType`, {
        //     method: "DELETE",
        //     headers: { "XSRF-TOKEN": Cookies.get('XSRF-TOKEN') },
        //     body: JSON.stringify(payload)
        // })

        // Promise.all([fetchPhotoDelete, fetchAmenityDelete,fetchFloorPlanDelete,fetchPrivacyDelete, fetchSpotSubDelete, fetchSpotTypeDelete])



        await dispatch(deleteSpot(payload)).then(() => history.goBack())
    }


    return (

        <div className="confirming-delete">
            <p>Are you sure you want to delete this spot?</p>

            <button
                onClick={handleConfirm}
                id= 'yes-delete'
            >
                Yes
            </button>

        </div>

    )
}



export default DeleteConfirmModal;
