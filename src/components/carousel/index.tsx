import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Carousel, { CarouselProps } from 'react-native-snap-carousel'
// import { ViewWidth } from '../../utils/index';
import ImageCarousel from 'react-native-image-carousel';
let carouselList: Array<any> = [
    {
        id: '1',
        imageUrl:
            'https://newbee-mall.oss-cn-beijing.aliyuncs.com/images/banner-p50-pocket.png',
    },
    {
        id: '2',
        imageUrl:
            'https://newbee-mall.oss-cn-beijing.aliyuncs.com/images/banner-iphone13.png',
    },
    {
        id: '3',
        imageUrl:
            'https://newbee-mall.oss-cn-beijing.aliyuncs.com/images/banner-mate40.png',
    },
];

const _renderItem = (item: any) => {
    return (
        <></>
        // <TouchableOpacity onPress={_onPress}>
        //     {/* <Image
        //     source={{ uri: '' }}
        // /> */}
        // </TouchableOpacity>
    )
}
const CarouselPage = () => {
    // let carouselRef = React.createRef<any>();
    return (
        <ImageCarousel 
        
        />
      
    )
}

// const styles = StyleSheet.create<any>({
//     sliderWidht: ViewWidth,
//     itemWidth: ViewWidth
// })
export default CarouselPage;