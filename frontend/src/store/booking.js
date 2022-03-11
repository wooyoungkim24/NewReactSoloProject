import { csrfFetch } from './csrf';


const LOAD_ALL = "allBookings/load"


const load_all = (all) => ({
    type: LOAD_ALL,
    all
})



export const getBookings = () => async dispatch => {

    const res = await csrfFetch(`/api/bookings`);
    if (res.ok) {
        const bookings = await res.json();
        dispatch(load_all(bookings));
        return bookings;
    }
}

export const getBookingsId = (payload) => async dispatch =>{
    const {spotId} = payload
    const res = await csrfFetch(`/api/bookings/${spotId}`);
    if(res.ok){
        const bookings = await res.json();
        dispatch(load_all(bookings))
        return bookings
    }
}


const initialState = {
    bookings: [],
}


const bookingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_ALL:
            return {
                ...state,
                bookings: [...action.all]
            }
        default:
            return state;
    }
}
export default bookingsReducer;
