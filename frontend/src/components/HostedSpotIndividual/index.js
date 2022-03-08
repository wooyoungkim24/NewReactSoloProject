import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, useHistory, useParams } from 'react-router-dom';
import * as sessionActions from "../../store/session";
import Navigation from '../Navigation';
import { getSpot } from "../../store/spot"
import "./index.css"
import EditPhotoArray from '../EditPhotoArray';


function HostedSpotIndividual() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const [isLoaded, setIsLoaded] = useState(false)
    useEffect(() => {
        dispatch(getSpot(id)).then(() => setIsLoaded(true))
    }, [dispatch])
    const spotInfo = useSelector(state => {
        return state.spots.individualSpot.spot
    })
    let spotId;
    let pushTermDelete;
    let pushTermAdd;
    if(isLoaded){
        spotId = spotInfo.id
        pushTermAdd = "add" + "_" + spotId.toString();
        pushTermDelete = "delete" + "_" + spotId.toString();

    }

    return (
        <div className='profile-render-div'>

            {isLoaded &&
                <div className='profile-hosted-spot-container'>
                    <div className='top-profile-hosted-spot'>
                        <div className='profile-user-photo'>
                            <img src={spotInfo.User.photo}></img>
                        </div>
                        <div className='hosted-spot-photo-container'>
                            <div className='hosted-spot-photo'>
                                <img src={spotInfo.Photo.photoArray[0]}></img>

                            </div>
                            <div className='hosted-spot-photo-nav'>
                                <button
                                    type="button"
                                    onClick={() =>history.push(`/profile/edit/photo/${pushTermAdd}`)}
                                    >Add
                                </button>
                                <button
                                    type="button"
                                    onClick={() =>history.push(`/profile/edit/photo/${pushTermDelete}`)}
                                    >Delete
                                </button>

                            </div>
                        </div>
                    </div>

                    <div className='bottom-profile-hosted-spot'>


                    </div>
                </div>}
        </div>

    )

}

export default HostedSpotIndividual;
