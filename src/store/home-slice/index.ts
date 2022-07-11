import { createSlice } from "@reduxjs/toolkit"

const initialState:Home.stateProp = { 
    imageData: [
        {
            id: '1',
            imageUrl:`${require('../../assets/carousel/swiper_1.jpeg')}`,
        },
        {
            id: '2',
            imageUrl:`${require('../../assets/carousel/swiper_2.jpeg')}`,
        },
    ],
    homeItem: [
        {
            id: '1',
            title: '第一项'
        },
        {
            id: '2',
            title: '第三项'
        },
        {
            id: '3',
            title: '第四项'
        },
        {
            id: '4',
            title: '第五项'
        }
    ]

}
const homeSlice =createSlice({
    name:'Home',
    initialState:initialState,
    reducers:{}
})
export default homeSlice;