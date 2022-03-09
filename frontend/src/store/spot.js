import { csrfFetch } from './csrf';

const LOAD_ALL = "allSpots/load"
const LOAD_ONE = "oneSpot/load"
const LOAD_PAYLOAD = "payload/load"
const LOAD_USERSPOTS = "userSpots/load"

const load_all = (all) => ({
    type: LOAD_ALL,
    all
})

const load_userspots = (all) => ({
    type: LOAD_USERSPOTS,
    all
})
const load_one = (one) => ({
    type: LOAD_ONE,
    one
})

const load_payload = (payload) => ({
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
export const putPhoto = (payload) => async dispatch => {

    console.log("this is the test", payload.getAll("File"))
    await csrfFetch(`/api/spots/photo`, {
        method: "POST",
        headers: { "Content-Type": "multipart/form-data" },
        body: payload
    })

}

export const getSpot = (id) => async dispatch => {
    const res = await csrfFetch(`/api/spots/${id}`);
    if (res.ok) {
        const spot = await res.json();
        dispatch(load_one(spot));
        return spot
    }
}

export const getSpotsUser = (userId) => async dispatch => {
    const res = await csrfFetch(`/api/spots/all/user/${userId}`);

    if (res.ok) {
        const spots = await res.json();
        dispatch(load_userspots(spots))
        return spots
    }
}

export const editAmenity = (payload)=>async dispatch =>{
    console.log(payload)
    const res1 = await csrfFetch(`/api/spots/amenity`, {
        method: "PUT",
        body: JSON.stringify(payload)
    })
}

export const editSpotType = (payload) => async dispatch => {

    const res1 = await csrfFetch(`/api/spots/spotType`, {
        method: "PUT",
        body: JSON.stringify(payload)
    })
}
export const editSpotSub = (payload) => async dispatch => {
    const{oldSpotType, newSpotType} = payload

    delete payload.oldSpotType
    delete payload.newSpotType
    console.log("frotn end test", payload)
    const res1 = await csrfFetch(`/api/spots/${oldSpotType}SpotType`, {
        method: "DELETE",
        body: JSON.stringify(payload)
    })
    const res2 = await csrfFetch(`/api/spots/${newSpotType}SpotType`, {
        method: "POST",
        body: JSON.stringify(payload)
    })
}
export const editSpotStuff = (payload) => async dispatch => {
    const { type } = payload;
    if (type === 'title') {
        const { title, spotId } = payload
        const res = await csrfFetch(`/api/spots/`, {
            method: "PUT",
            body: JSON.stringify({
                title,
                id: spotId
            })
        })
        if (res.ok) {
            const titleChanged = await res.json();
            return titleChanged;
        }
    }
    if (type === 'description') {
        const { description, spotId } = payload
        const res = await csrfFetch(`/api/spots/`, {
            method: "PUT",
            body: JSON.stringify({
                description,
                // id: spotId
            })
        })
        if (res.ok) {
            const descriptionChanged = await res.json();
            return descriptionChanged;
        }
    }
    if (type === 'cost') {
        const { costPerNight, spotId } = payload
        const res = await csrfFetch(`/api/spots/`, {
            method: "PUT",
            body: JSON.stringify({
                costPerNight,
                id: spotId
            })
        })
        if (res.ok) {
            const costChanged = await res.json();
            return costChanged;
        }
    }
    if (type === 'address') {
        const { address, city, spotId } = payload
        const res = await csrfFetch(`/api/spots/`, {
            method: "PUT",
            body: JSON.stringify({
                address,
                city,
                id: spotId
            })
        })
        if (res.ok) {
            const costChanged = await res.json();
            return costChanged;
        }
    }


}

export const loadSearch = (payload) => async dispatch => {
    dispatch(load_payload(payload))
}

const initialState = {
    spots: [],
    individualSpot: {},
    searchInfo: {},
    userSpots: [],
    photoObjAll: {}
}

const spotsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_ALL:
            return {
                ...state,
                spots: [...action.all.spots],
                photoObjAll: { ...action.all.photoObj }
            }
        case LOAD_ONE:
            return {
                ...state,
                individualSpot: { ...action.one }
            }
        case LOAD_PAYLOAD:
            return {
                searchInfo: { ...action.payload }
            }
        case LOAD_USERSPOTS:
            return {
                ...state,
                userSpots: [...action.all.spots],
                photoObjAll: { ...action.all.photoObj }
            }
        default:
            return state;
    }
}
export default spotsReducer;
