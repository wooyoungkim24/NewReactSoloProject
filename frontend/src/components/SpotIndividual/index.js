import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, useHistory, useParams } from 'react-router-dom';
import * as sessionActions from "../../store/session";
import Navigation from '../Navigation';
import { getSpots, getSpot } from "../../store/spot"
import "./index.css"

function SpotIndividual() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const history = useHistory();

    const [isLoaded, setIsLoaded] = useState(false);
    const [privacyText, setPrivacyText] = useState("")
    const [spotType, setSpotType] = useState("")
    const [spotTypeSub, setSpotTypeSub] = useState("")
    const individualSpot = useSelector(state => {
        return state.spots.individualSpot
    })

    function FilterTrue(obj) {
        let keys = Object.keys(obj);
        let returned = keys.filter(ele => obj[ele] === true)
        return returned;
    }
    function camelToWord(string) {
        let upperLetter = "";
        for (let i = 0; i < string.length; i++) {
            let curr = string.charAt(i);
            if (curr === curr.toUpperCase()) {
                upperLetter = curr
            }
        }
        let split = string.split(/[A-Z]/)
        let replacedLetter = upperLetter + split[1]
        split[1] = replacedLetter
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


    function splitAtCapital(string) {
        const result = string.split(/(?=[A-Z])/);
        if (result.length === 1) {
            return result[0]
        } else {
            return result.join(" ")
        }
    }
    useEffect(() => {
        dispatch(sessionActions.restoreUser())
        dispatch(getSpot(id)).then(() => setIsLoaded(true))
    }, [dispatch])

    const didMountRef = useRef(0);

    useEffect(() => {
        if (didMountRef.current === 1) {
            let spotTypeTemp = FilterTrue(individualSpot.spot.SpotType)

            let spotTypeSubTemp = FilterTrue(individualSpot.subType)

            setSpotType(camelToWord(spotTypeTemp[0]))
            setSpotTypeSub(camelToWord(spotTypeSubTemp[0]))


            let privacyType = FilterTrue(individualSpot.spot.PrivacyType)

            if (privacyType[0] === "privateRoom" || privacyType === "sharedRoom") {
                setPrivacyText(camelToWord(privacyType[0]) + " in");
                console.log(privacyText)

            }
            else {
                setPrivacyText(camelToWord(privacyType[0]))
            }
        }
        didMountRef.current += 1;
    }, [isLoaded])





    return (
        <div className='individual-spot-page'>
            <div className='navbar-individual-spot'>

            </div>
            {isLoaded &&
                <div className='individual-spot-container'>
                    <div className='individual-title'>
                        <h1>{individualSpot.spot.title}</h1>
                    </div>

                    <div className='individual-location'>
                        <h4>{splitAtCapital(individualSpot.spot.city)}</h4>
                    </div>

                    <div className='individual-image-container'>
                        <div id='individual-image-big-container'>
                            <img id="individual-image-big" src={individualSpot.spot.Photo.photoArray[0]} />
                        </div>

                        <div id='individual-image-small-container'>
                            <div id='individual-image-small-top'>
                                <img id="individual-image-small" src={individualSpot.spot.Photo.photoArray[1]} />
                                <img id="individual-image-small" src={individualSpot.spot.Photo.photoArray[2]} />
                            </div>
                            <div id='individual-image-small-bottom'>
                                <img id="individual-image-small" src={individualSpot.spot.Photo.photoArray[3]} />
                                <img id="individual-image-small" src={individualSpot.spot.Photo.photoArray[4]} />
                            </div>
                        </div>
                    </div>

                    <div className='individual-bottom-container'>
                        <div className='bottom-left'>
                            <div className='intro-info'>
                                <div className='intro-left-container'>
                                    <div id='intro-title'>
                                        {privacyText}&nbsp;{spotTypeSub}&nbsp;{spotType} hosted by {individualSpot.spot.User.username}
                                    </div>
                                    <div id='intro-floor-plan'>
                                        {individualSpot.spot.FloorPlan.guests} Guest - {individualSpot.spot.FloorPlan.beds} Bed - {individualSpot.spot.FloorPlan.bedrooms} Bedroom - {individualSpot.spot.FloorPlan.bathrooms} Bath
                                    </div>
                                </div>
                                <div className='intro-profile-photo'>
                                    <img id="spot-user-photo" src={individualSpot.spot.User.photo}></img>
                                </div>


                            </div>

                            <div className='description'>

                            </div>

                            <div className='amenities'>

                            </div>

                            <div className='calendar'>

                            </div>
                        </div>

                        <div className='bottom-right'>

                        </div>

                    </div>

                </div>
            }
        </div>
    )

}


export default SpotIndividual
