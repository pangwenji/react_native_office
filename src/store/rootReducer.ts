import { combineReducers } from "@reduxjs/toolkit"
import homeSlice from "./home-slice"

const rootReducer =combineReducers({
    home:homeSlice.reducer
})
export type RootState = ReturnType <typeof rootReducer>  
export default rootReducer