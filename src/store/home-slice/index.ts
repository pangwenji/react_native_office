import { createSlice } from "@reduxjs/toolkit"

const initialState: Home.stateProp = {
    imageData: [
        {
            id: '1',
            imageUrl: `${require('../../assets/carousel/swiper_1.jpeg')}`,
        },
        {
            id: '2',
            imageUrl: `${require('../../assets/carousel/swiper_2.jpeg')}`,
        },
    ],
    homeItem: [
        {
            id: '1',
            title: '通知公告',
            imageUrl: `${require('../../assets/home/icon-TZ.png')}`,
            subTitle: "通知消息提示",
            name:"notice"
        },
        {
            id: '2',
            title: '待办',
            imageUrl: `${require('../../assets/home/icon-DB.png')}`,
            subTitle: "待办信息",
            name:"todo"
        },
        {
            id: '3',
            title: '通讯录',
            imageUrl: `${require('../../assets/home/icon-addresslist.png')}`,
            subTitle: "搜索查询通讯信息",
            name:"contacts"
        },
        {
            id: '4',
            title: '系统消息',
            imageUrl: `${require('../../assets/home/icon_message.png')}`,
            subTitle: "历史消息记录",
            name:"message"
        }
    ]

}
const homeSlice = createSlice({
    name: 'Home',
    initialState: initialState,
    reducers: {}
})
export default homeSlice;