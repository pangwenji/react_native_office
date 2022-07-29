import { createSlice } from "@reduxjs/toolkit"

const initialState: notice.dataState= {
  data: [
    { title: "关于2022年度劳动节放假安排的通知", currentTime: '2022-05-06 12:45:23' },
    { title: "关于<<固定资产通知管理办法>>", currentTime: '2022-07-06 13:5:23' },
    {title:"公出单", currentTime:'2022-07-06 13:50:23'}
  ]
}

const noticeSlice = createSlice({
	name: 'notice',
	initialState: initialState,
	reducers: {}
})
export default noticeSlice;