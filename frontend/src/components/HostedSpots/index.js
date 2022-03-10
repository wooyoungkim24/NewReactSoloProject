import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, useHistory, useParams } from 'react-router-dom';
import * as sessionActions from "../../store/session";
import Navigation from '../Navigation';
import { getSpotsUser } from "../../store/spot"




function HostedSpots(){
    const dispatch = useDispatch()
    const history = useHistory();
    const [isLoaded, setIsLoaded] = useState(false)
    const {userId} = useParams();
    useEffect(() =>{
        dispatch(getSpotsUser(userId)).then(() => setIsLoaded(true))
    },[dispatch])

    const userSpots = useSelector(state =>{
        return state.spots.userSpots
    });
    const photos = useSelector(state =>{
        return state.spots.photoObjAll
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
                if(upperLetter === ""){
                    upperLetter = curr
                }else{
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
    function splitAtCapital(string) {
        const result = string.split(/(?=[A-Z])/);
        if (result.length === 1) {
            return result[0]
        } else {
            return result.join(" ")
        }
    }
    // console.log(photos[13])
    return (
        <div className="user-spots-page">
            <div>
                <button onClick={() => history.push("/profile/new/spot")}>Host a New Spot</button>
            </div>
            <div className='user-spots-list-container'>

                {isLoaded &&

                    <>
                        <ol>
                            {userSpots.map((ele) => {

                                    let ourPhotos = photos[ele.id]
                                    console.log(ourPhotos)
                                    let newOurPhotos=[];
                                    for(let i = 0 ; i < ourPhotos.length; i++){
                                        newOurPhotos.push(`https://citybrbphotos.s3.amazonaws.com/`+`Spot${ele.id}/`+ourPhotos[i])
                                    }
                                    // console.log(ele.id,newOurPhotos)
                                    const spotId = ele.id
                                    const privacyType = FilterTrue(ele.PrivacyType)[0]

                                    let privacyText;
                                    if (privacyType === 'privateRoom') {
                                        privacyText = "Private Room"
                                    } else if (privacyType === 'entire') {
                                        privacyText = "Entire Unit"
                                    } else if (privacyType === 'sharedRoom') {
                                        privacyText = "Shared Room"
                                    }

                                    const amenitiesKeys = Object.keys(ele.Amenity)
                                    let amenitiesKeysTrue = []
                                    for (let i = 0; i < amenitiesKeys.length; i++) {
                                        let curr = amenitiesKeys[i];


                                        if (ele.Amenity[curr] === true) {

                                            amenitiesKeysTrue.push(curr)
                                        }
                                    }

                                    return (
                                        <div key={spotId} className="spot-component-container" onClick= {()=> history.push(`/profile/spot/${spotId}`)} >
                                            <div className='component-img'>
                                                <img id="spot-component-image" src={newOurPhotos[4]} />
                                            </div>
                                            <div className='component-details'>
                                                <div className="component-spot-type">
                                                    <p>{privacyText} in {splitAtCapital(ele.city)} </p>
                                                </div>
                                                <div className='component-spot-title'>
                                                    <h2>{ele.title}</h2>
                                                </div>
                                                <div className='component-floor-plan'>
                                                    <p>
                                                        {ele.FloorPlan.guests} Guest - {ele.FloorPlan.beds} Bed - {ele.FloorPlan.bedrooms} Bedroom - {ele.FloorPlan.bathrooms} Bath
                                                    </p>
                                                </div>
                                                <div className='component-amenities'>
                                                    {camelToWord(amenitiesKeysTrue[0])} - {camelToWord(amenitiesKeysTrue[1])} - {camelToWord(amenitiesKeysTrue[2])}

                                                </div>
                                                <div className='component-price'>
                                                    <span className='dollarAmount'>
                                                        ${ele.costPerNight}
                                                    </span>
                                                    <span>
                                                        / night
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }


                            )}
                        </ol>
                    </>


                }
            </div>
        </div>
    )
}


export default HostedSpots
