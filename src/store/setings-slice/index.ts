import { createSlice } from "@reduxjs/toolkit"

const setingsState: setings.stateProp = {
  userInfo: {username:'李四'}
}

const setingsSlice = createSlice({
	name: 'Setings',
	initialState: setingsState,
	reducers: {}
})
export default setingsSlice;