//managing bookings
// store all bookings
// store Individual booking details
// Track the API loading status
// Add new bookings when a booking is created
// Updating the booking data when we receive it from the backend

import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    bookings: [],
    bookingDetails: {},
    loading: false
}
const bookingSlice = createSlice({
    name: "bookings",
    initialState,
    reducers: {
        setBookingRequest(state) {
            state.loading = true;
        },
        // Stores the bookings received from the API 
        setBookings(state, action) {
            state.bookings = action.payload
            state.loading = false
        },
        addBooking: (state, action) => {
            state.bookings.push(action.payload)
        },
        setBookingDetails: (state, action) => {
            state.bookingDetails = action.payload.bookings
        }
    }
})
export const { setBookingDetails, setBookings, addBooking } = bookingSlice.actions;
export default bookingSlice;