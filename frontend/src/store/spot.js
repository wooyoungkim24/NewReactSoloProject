import { csrfFetch } from './csrf';

const LOAD_ALL = "allSpots/load"
const LOAD_ONE = "oneSpot/load"
const LOAD_PAYLOAD = "payload/load"

const load_all = (all) => ({
    type: LOAD_ALL,
    all
})

const load_one = (one) => ({
    type: LOAD_ONE,
    one
})

const load_payload = (payload)=>({
    type: LOAD_PAYLOAD,
    payload
})

export const getSpots = (city) => async dispatch => {
    const res = await csrfFetch(`/api/spots/all/${city}`);
    if (res.ok) {
        const spots = await res.json();
        dispatch(load_all(spots));
        return spots;
    }
}

export const getSpot = (id) => async dispatch =>{
    const res = await csrfFetch(`/api/spots/${id}`);
    if(res.ok){
        const spot = await res.json();
        dispatch(load_one(spot));
        return spot
    }
}

export const loadSearch = (payload) => async dispatch=>{
    dispatch(load_payload(payload))

}

const initialState = {
    spots: [],
    individualSpot:{},
    searchInfo:{}
}

const spotsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_ALL:
            return {
                ...state,
                spots: [...action.all]
            }
        case LOAD_ONE:
            return {
                ...state,
                individualSpot: {...action.one}
            }
        case LOAD_PAYLOAD:
            return{
                searchInfo:{...action.payload}
            }
        default:
            return state;
    }
}
export default spotsReducer;
