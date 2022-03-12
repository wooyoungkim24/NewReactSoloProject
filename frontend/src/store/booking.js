import { csrfFetch } from './csrf';


const LOAD_ALL = "allBookings/load"
const LOAD_ALL_SPECIAL = "allBookingsSpecial/load"

const load_all = (all) => ({
    type: LOAD_ALL,
    all
})

const load_all_special = (all) =>({
    type: LOAD_ALL_SPECIAL,
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
export const getBookingsUser = (payload) => async dispatch =>{
    const {userId} = payload



    const res = await csrfFetch(`/api/bookings/user/${userId}`)
    if(res.ok){
        const bookings = await res.json();

        dispatch(load_all_special(bookings))
        return bookings
    }
}

export const createBooking = (payload) => async dispatch =>{
    const res = await csrfFetch(`/api/bookings`, {
        method: "POST",
        body: JSON.stringify(payload)
    });
    if(res.ok){
        const booking = await res.json();
        return booking
    }
}

export const deleteBooking = (payload) => async dispatch =>{
    const res = await csrfFetch("/api/bookings", {
        method: "DELETE",
        body: JSON.stringify(payload)
    })
    if(res.ok){
        const booking = await res.json();
        return booking
    }
}



const initialState = {
    bookings: [],
    photoObj:{}
}


const bookingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_ALL:
            return {
                ...state,
                bookings: [...action.all]
            }
        case LOAD_ALL_SPECIAL:

            return{
                ...state,

                bookings: [...action.all.bookings],
                photoObj: {...action.all.photoObj}
            }
        default:
            return state;
    }
}
export default bookingsReducer;
