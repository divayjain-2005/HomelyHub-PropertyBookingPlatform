
// fetch details of one specific propertyusing its id

// recieve property id
// start loading 
// call backend api 
// wait for response 
// get the property data 
// store dertails in redux
// if error    store error in redux

import { axiosInstance } from "../../utils/axios";
import { propertyDetailsAction } from "./propertyDetails-slice";
export const getPropertyDetails = (id) => async (dispatch) => {
    try {
        dispatch(propertyDetailsAction.getListRequest());
        const response = await axiosInstance(`v1/rent/listing/${id}`)
        console.log(response)
        if (!response) {
            throw new Error("Could not fetch any property Details")
        }
        const { data } = response.data;
        dispatch(propertyDetailsAction.getPropertyDetails(data))
    } catch (error) {
        dispatch(propertyDetailsAction.getErrors(error.response?.data?.error ||  error.message))
        console.log(error)
    }
}