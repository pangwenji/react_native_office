import { createSlice } from "@reduxjs/toolkit"

const initialState: office.stateProp = {
	images: [
		{ url: require('@/assets/office/office_sickleave.png') },
		{ url: require('@/assets/office/office_sickleave.png') },
		{ url: require('@/assets/office/office_sickleave.png') },
		{ url: require('@/assets/office/office_sickleave.png') },
		{ url: require('@/assets/office/office_sickleave.png') },
		{ url: require('@/assets/office/office_sickleave.png') },
		{ url: require('@/assets/office/office_sickleave.png') },
		{ url: require('@/assets/office/office_sickleave.png') },
		{ url: require('@/assets/office/office_sickleave.png') },
		{ url: require('@/assets/office/office_sickleave.png') },
		{ url: require('@/assets/office/office_sickleave.png') },
		{ url: require('@/assets/office/office_sickleave.png') },
		{ url: require('@/assets/office/office_sickleave.png') },
	]
}

const officeSlice = createSlice({
	name: 'Office',
	initialState: initialState,
	reducers: {}
})
export default officeSlice;