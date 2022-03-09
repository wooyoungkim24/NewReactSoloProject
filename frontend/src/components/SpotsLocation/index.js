import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, useHistory, useParams } from 'react-router-dom';
import * as sessionActions from "../../store/session";
import Navigation from '../Navigation';
import { getSpots } from "../../store/spot"
import "./index.css"
import moment from 'moment'

function SpotsLocation() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { searchPayload } = useParams();

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const today = new Date();
    const thisYear = today.getFullYear();
    const thisMonth = today.getMonth();
    const thisDate = today.getDate();

    let searchSplit = searchPayload.split("_");
    const city = searchSplit[1]
    const guests = searchSplit[0];

    const startSearch = searchSplit[2]
    const startSearchMonth = months.indexOf(startSearch.split(" ")[0])
    const startSearchDate = parseInt(startSearch.split(" ")[1])
    const startSearchYear = parseInt(startSearch.split(" ")[2])

    const endSearch = searchSplit[3]
    const endSearchMonth = months.indexOf(endSearch.split(" ")[0])
    const endSearchDate = parseInt(endSearch.split(" ")[1])
    const endSearchYear = parseInt(endSearch.split(" ")[2])

    let startSearchDateFull = new Date(startSearchYear, startSearchMonth,startSearchDate)
    let endSearchDateFull = new Date(endSearchYear, endSearchMonth,endSearchDate)

    const [isLoaded, setIsLoaded] = useState(false)





    useEffect(() => {
        dispatch(sessionActions.restoreUser())
        dispatch(getSpots(city)).then(() => setIsLoaded(true))
    }, [dispatch])



    const photos = useSelector(state =>{
        return state.spots.photoObjAll
    })
    const allSpots = useSelector(state => {
        return state.spots.spots
    })

    // console.log(moment(searchPayload.dateStart).format("MMMM D YYYY"))
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



    return (
        <div className="spots-page">
            <div className='navbar-spots'>

            </div>

            <div className='spots-list-container'>
                {isLoaded &&
                    <>
                        <ol>
                            {allSpots.map((ele) => {
                                const start = ele.bookedStart;
                                const end = ele.bookedStart;
                                let ourPhotos = photos[ele.id]

                                let newOurPhotos = [];
                                for(let i = 0 ; i < ourPhotos.length; i++){
                                    newOurPhotos.push(`https://citybrbphotos.s3.amazonaws.com/`+`Spot${ele.id}/`+ourPhotos[i])
                                }

                                // let startYear;
                                // let startMonth;
                                // let startDate;
                                // let endYear;
                                // let endMonth;
                                // let endDate;
                                // if (start) {
                                //     startYear = parseInt(start.split(" ")[2])
                                //     startMonth = months.indexOf(start.split(" ")[0])
                                //     startDate = parseInt(start.split(" ")[1])
                                // }
                                // if (end) {
                                //     endYear = parseInt(end.split(" ")[2])
                                //     endMonth = months.indexOf(end.split(" ")[0])
                                //     endDate = parseInt(end.split(" ")[1])
                                // }
                                let beforeOk = false;
                                let afterOk = false;
                                if (start && end) {
                                    if (startSearchDateFull < start && endSearchDateFull< start) {
                                        beforeOk = true;
                                    }
                                    if (startSearchDateFull > end && endSearchDateFull>end) {
                                        afterOk = true;
                                    }
                                }
                                if (!start && !end) {
                                    beforeOk = true;
                                    afterOk = true;
                                }


                                if (beforeOk || afterOk) {
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
                                    const searchTerm = ele.id.toString() + "_" + startSearchDateFull + "_" + endSearchDateFull
                                    return (
                                        <div key={spotId} className="spot-component-container" onClick={() => history.push(`/spot/${searchTerm}`)}>
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
                                                        {ele.costPerNight}
                                                    </span>
                                                    <span>
                                                        / night
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }


                            })}
                        </ol>
                    </>


                }
            </div>
        </div>
    )
}

export default SpotsLocation;
