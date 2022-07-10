import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import CarouselPage from '../../components/carousel/index';


const HomeScreen: React.FC = () => {
    return (
        <SafeAreaView>
            {/* 轮播区域 */}
            <CarouselPage />
            <Text>首页</Text>
        </SafeAreaView>
    )
}

export default HomeScreen;