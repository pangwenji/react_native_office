import { combineReducers } from "@reduxjs/toolkit"
import homeSlice from "./home-slice";
import officeSlice from "./office-slice";
import noticeSlice from "./notice-slice";
//将reducer 注册进来
const rootReducer =combineReducers({
    home: homeSlice.reducer,
    office: officeSlice.reducer,
    notice:noticeSlice.reducer
    
})
export type RootState = ReturnType <typeof rootReducer>  
export default rootReducer