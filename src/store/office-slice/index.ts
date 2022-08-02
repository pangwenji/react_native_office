import { createSlice } from "@reduxjs/toolkit"

const initialState: office.stateProp = {
	images: [
		{  title:'采购申请',type:'purchase' },
		{ title:'人事申请',type:'personnel' },
		{ title:'行政申请',type:'administration' },
		{ title:'财务申请' ,type:'finance'},
	]
}

const officeSlice = createSlice({
	name: 'Office',
	initialState: initialState,
	reducers: {}
})
export default officeSlice;