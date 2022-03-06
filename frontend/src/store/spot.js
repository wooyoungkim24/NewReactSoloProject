import { csrfFetch } from './csrf';

const LOAD_ALL = "allSpots/load"


const load_all = (all) =>({
    type: LOAD_ALL,
    all
})

export const getSpots = (city) => async dispatch =>{
    const res = await csrfFetch(`/api/spots/all/${city}`);
    if(res.ok){
        const spots = await res.json();
        dispatch(load_all(spots));
        return spots;
    }
}


const initialState = {
    spots: []
}

const spotsReducer = (state = initialState, action) =>{
    switch (action.type){
        case LOAD_ALL:
            return{
                ...state,
                spots:[...action.all]
            }
    }
}
export default spotsReducer;
