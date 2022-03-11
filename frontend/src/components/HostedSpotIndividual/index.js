import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, useHistory, useParams } from 'react-router-dom';
import * as sessionActions from "../../store/session";
import Navigation from '../Navigation';
import { getSpot, deleteSpot } from "../../store/spot"
import "./index.css"
import EditFormPage from '../EditFormPage';
import { Modal } from '../../context/Modal';
import DeleteConfirmModal from '../DeleteConfirmModal';


function HostedSpotIndividual() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const [isLoaded, setIsLoaded] = useState(false)
    const [showModal, setShowModal] = useState(false);
    useEffect(() => {
        dispatch(getSpot(id)).then(() => setIsLoaded(true))
    }, [dispatch])
    const spotInfo = useSelector(state => {
        return state.spots.individualSpot.spot
    })
    const spotInfoSub = useSelector(state => {
        return state.spots.individualSpot.subType
    })
    const photos = useSelector(state => {
        return state.spots.individualSpot.photoObj
    })

    function FilterTrue(obj) {
        let keys = Object.keys(obj);
        let returned = keys.filter(ele => obj[ele] === true)
        return returned;
    }
    function camelToWord(string) {
        let upperLetter = "";
        let upperLetter2 = "";
        for (let i = 0; i < string.length; i++) {
            let curr = string.charAt(i);
            if (curr === curr.toUpperCase()) {
                if (upperLetter === "") {
                    upperLetter = curr
                } else {
                    upperLetter2 = curr
                }
            }
        }
        let split = string.split(/[A-Z]/)
        let replacedLetter1 = upperLetter + split[1]
        split[1] = replacedLetter1
        let replacedLetter2 = upperLetter2 + split[2]
        split[2] = replacedLetter2
        if (split[2] === 'undefined') {
            split.pop();
        }
        if (split[1] === 'undefined') {
            split.pop();
        }

        let first = split[0];
        let splitFirst = first.split("");
        splitFirst[0] = splitFirst[0].toUpperCase();
        let newSplitFirst = splitFirst.join("")
        split[0] = newSplitFirst;
        return split.join(" ")
    }



    let spotId;
    let pushTermPhoto;
    let pushTermTitle;
    let pushTermDesc;
    let pushTermCost;
    let pushTermSpotType;
    let pushTermAmenities;
    let pushTermFloorPlan
    let pushTermPrivacy;
    let ourPhotos;
    let pushTermWhere;
    let newOurPhotos = [];
    let amenityKey;
    if (isLoaded) {
        spotId = spotInfo.id
        pushTermPhoto = "photo" + "_" + spotId.toString();
        pushTermTitle = "title" + "_" + spotId.toString();
        pushTermDesc = "description" + "_" + spotId.toString();
        pushTermCost = "cost" + "_" + spotId.toString();
        pushTermWhere = "where" + "_" + spotId.toString();
        pushTermSpotType = "spotType" + "_" + spotId.toString();
        pushTermAmenities = "amenity" + "_" + spotId.toString();
        pushTermFloorPlan = "floorPlan" + "_" + spotId.toString();
        pushTermPrivacy = "privacy" + "_" + spotId.toString();
        ourPhotos = photos[id]

        for (let i = 0; i < ourPhotos.length; i++) {
            newOurPhotos.push(`https://citybrbphotos.s3.amazonaws.com/` + `Spot${id}/` + ourPhotos[i])
        }

        amenityKey = Object.keys(spotInfo.Amenity)
        const idIndex = amenityKey.indexOf("id")
        amenityKey.splice(idIndex, 1)
        const spotIdIndex = amenityKey.indexOf("spotId")
        amenityKey.splice(spotIdIndex, 1)
        const createdIndex = amenityKey.indexOf("createdAt")
        amenityKey.splice(createdIndex, 1)
        const updatedIndex = amenityKey.indexOf("updatedAt")
        amenityKey.splice(updatedIndex, 1)
        console.log(amenityKey)
    }

    return (
        <div className='profile-render-div'>
            {isLoaded &&
                <div className='profile-hosted-spot-container'>
                    <div className='top-profile-hosted-spot'>

                        <div className='hosted-spot-photo-container'>
                            <div className='individual-image-container'>
                                <div id='individual-image-big-container'>
                                    <img id="individual-image-big" src={newOurPhotos[0]} />
                                </div>

                                <div id='individual-image-small-container'>
                                    <div id='individual-image-small-top'>
                                        <img id="individual-image-small" src={newOurPhotos[1]} />
                                        <img id="individual-image-small" src={newOurPhotos[2]} />
                                    </div>
                                    <div id='individual-image-small-bottom'>
                                        <img id="individual-image-small" src={newOurPhotos[3]} />
                                        <img id="individual-image-small" src={newOurPhotos[4]} />
                                    </div>
                                </div>
                            </div>
                            <div className='hosted-spot-photo-nav'>
                                <button
                                    id="edit-picture-button"
                                    type="button"
                                    onClick={() => history.push(`/profile/edit/${pushTermPhoto}`)}
                                >Edit Pictures
                                </button>

                            </div>
                        </div>
                    </div>

                    <div className='bottom-profile-hosted-spot'>
                        <div className='edit-title-div'>
                            <div className='edit-title-top'>
                                <div id='edit-title-top'>
                                    <p>Title: </p>
                                </div>

                                <button
                                    type='button'
                                    id='edit-title-button'
                                    onClick={() => history.push(`/profile/edit/${pushTermTitle}`)}
                                >Edit Title</button>
                            </div>
                            <div className='edit-title-bottom'>
                                <p>{spotInfo.title}</p>
                            </div>
                        </div>


                        <div className='edit-desc-div'>
                            <div className='edit-desc-top'>
                                <div>
                                    <p>Description: </p>
                                </div>

                                <button
                                    type='button'
                                    onClick={() => history.push(`/profile/edit/${pushTermDesc}`)}
                                >Edit Description</button>

                            </div>
                            <div className='edit-desc-bottom'>
                                <p>{spotInfo.description}</p>
                            </div>
                        </div>


                        <div className='edit-cost-div'>
                            <div className='edit-cost-top'>
                                <div>
                                    <p>Cost per Night: </p>
                                </div>

                                <button
                                    type='button'
                                    onClick={() => history.push(`/profile/edit/${pushTermCost}`)}
                                >Edit Cost</button>

                            </div>
                            <div className='edit-cost-bottom'>
                                <p>${spotInfo.costPerNight}/ night</p>
                            </div>
                        </div>


                        <div className='edit-address-div'>
                            <div className='edit-address-top'>
                                <div>
                                    <p>Address/City: </p>
                                </div>

                                <button
                                    type='button'
                                    onClick={() => history.push(`/profile/edit/${pushTermWhere}`)}
                                >Edit Address</button>

                            </div>
                            <div className='edit-address-bottom'>
                                <p>{spotInfo.address}/ {spotInfo.city}</p>
                            </div>

                        </div>


                        <div className='edit-spotType-div'>
                            <div className='edit-spotType-top'>
                                <div>
                                    <p>Spot Types: </p>
                                </div>

                                <button
                                    type='button'
                                    onClick={() => history.push(`/profile/edit/${pushTermSpotType}`)}
                                >Edit Spot Type</button>

                            </div>
                            <div className='edit-spotType-bottom'>
                                {/* <p>
                                {camelToWord(FilterTrue(spotInfo.SpotType)[0])}
                                </p> */}
                                {console.log(spotInfoSub)}
                                <p>{camelToWord(FilterTrue(spotInfo.SpotType)[0])}/ {camelToWord(FilterTrue(spotInfoSub)[0])}</p>
                            </div>

                        </div>
                        <div className='edit-amenities-div'>
                            <div className='edit-amenities-top'>
                                <div>
                                    <p>Amenities: </p>
                                </div>

                                <button
                                    type='button'
                                    onClick={() => history.push(`/profile/edit/${pushTermAmenities}`)}
                                >Edit Amenities</button>

                            </div>
                            <div className='edit-amenities-bottom'>

                                {amenityKey.map(ele => {

                                    return (
                                        <div key={ele}>
                                            {spotInfo.Amenity[ele] &&
                                                <>
                                                    <span id='amenity-name-edit-yes'>
                                                         {camelToWord(ele)}
                                                    </span>

                                                    <i className="fas fa-thumbs-up fa-2x"></i>
                                                </>
                                            }
                                            {spotInfo.Amenity[ele] === false &&
                                                <>
                                                    <div id='amenity-name-edit-no'>
                                                        {camelToWord(ele)}
                                                    </div>

                                                     <i className="fas fa-thumbs-down fa-2x"></i>
                                                </>
                                            }
                                        </div>
                                    )
                                })}
                            </div>

                        </div>
                        <div className='edit-floorPlan-div'>
                            <div className='edit-floorPlan-top'>
                                <div>
                                    <p>Floor Plan: </p>
                                </div>

                                <button
                                    type='button'
                                    onClick={() => history.push(`/profile/edit/${pushTermFloorPlan}`)}
                                >Edit Floor Plan</button>

                            </div>
                            <div className='edit-floorPlan-bottom'>
                                {Object.keys(spotInfo.FloorPlan).map(ele => {
                                    const not = ["id", "spotId", "createdAt", "updatedAt"]

                                    if (!(not.includes(ele))) {
                                        return (
                                            <div key={ele} className="profile-floorPlan-info">
                                                <p>{camelToWord(ele)}: {spotInfo.FloorPlan[ele]}</p>
                                            </div>
                                        )
                                    }

                                })}

                            </div>

                        </div>
                        <div className='edit-privacyType-div'>
                            <div className='edit-privacyType-top'>
                                <div>
                                    <p>Privacy Type: </p>
                                </div>

                                <button
                                    type='button'
                                    onClick={() => history.push(`/profile/edit/${pushTermPrivacy}`)}
                                >Edit Privacy Type</button>

                            </div>
                            <div className='edit-privacyType-bottom'>
                                {camelToWord(FilterTrue(spotInfo.PrivacyType)[0]) === "Entire"
                                    ?<p>{camelToWord(FilterTrue(spotInfo.PrivacyType)[0])} Unit</p>
                                    :<p>{camelToWord(FilterTrue(spotInfo.PrivacyType)[0])}</p>
                                }


                            </div>

                        </div>
                    </div>
                </div>}

            <button id="delete-spot-button" type="button" onClick={() => setShowModal(true)}>Delete Spot</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <DeleteConfirmModal id={id} />
                </Modal>
            )}
        </div>

    )

}

export default HostedSpotIndividual;
