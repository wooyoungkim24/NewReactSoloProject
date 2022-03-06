import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, useHistory, useParams } from 'react-router-dom';
import * as sessionActions from "../../store/session";
import Navigation from '../Navigation';
import {getSpots, getSpot} from "../../store/spot"
import "./index.css"

function SpotIndividual() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const history = useHistory();

    const [isLoaded, setIsLoaded] = useState(false);

    const individualSpot = useSelector(state =>{
        return state.spots.individualSpot
    })
    useEffect(() => {
        dispatch(sessionActions.restoreUser())
        dispatch(getSpot(id)).then(() => setIsLoaded(true))
    }, [dispatch])
    function splitAtCapital(string){
        const result = string.split(/(?=[A-Z])/);
        if(result.length ===1){
            return result[0]
        }else{
            return result.join(" ")
        }
    }
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
                            <img id="individual-image-big" src={individualSpot.spot.Photo.photoArray[0]}/>
                        </div>

                        <div id='individual-image-small-container'>
                            <div id='individual-image-small-top'>
                                <img id="individual-image-small" src={individualSpot.spot.Photo.photoArray[1]}/>
                                <img id="individual-image-small" src={individualSpot.spot.Photo.photoArray[2]}/>
                            </div>
                            <div id='individual-image-small-bottom'>
                                <img id="individual-image-small" src={individualSpot.spot.Photo.photoArray[3]}/>
                                <img id="individual-image-small" src={individualSpot.spot.Photo.photoArray[4]}/>
                            </div>
                        </div>
                    </div>

                    <div className='individual-bottom-container'>
                        <div className='bottom-left'>

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
