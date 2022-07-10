import { createSlice } from "@reduxjs/toolkit"

const initialState:any={
    msg:""
}
const homeSlice =createSlice({
    name:'Home',
    initialState:initialState,
    reducers:{}
})
export default homeSlice;