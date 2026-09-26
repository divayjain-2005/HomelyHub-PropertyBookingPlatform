// propertyDetails 
// create a slice name 
// create initial state 
// request starts 
// properety data recieved 
// error occur
// export action 
// export slice

// this slice is storage and status manager for a single propertydetails

import { createSlice } from "@reduxjs/toolkit";

const propertyDetailsSlice = createSlice({
    name: "propertyDetails",
    initialState: {
        propertyDetails: null,
        loading: false,
        error: null
    },
    reducers: {
        getListRequest(state) {
            state.loading = true
        },
        getPropertyDetails(state, action) {
            state.propertyDetails = action.payload;
            state.loading = false;

        },
        getErrors(state, action) {
            state.error = action.payload;
            state.loading = false;

        }
    }
})

export const propertyDetailsAction = propertyDetailsSlice.actions;
export default propertyDetailsSlice;