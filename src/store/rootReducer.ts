import { combineReducers } from "@reduxjs/toolkit"
import homeSlice from "./home-slice"
import officeSlice from "./office-slice"

const rootReducer =combineReducers({
    home: homeSlice.reducer,
    office:officeSlice.reducer
})
export type RootState = ReturnType <typeof rootReducer>  
export default rootReducer