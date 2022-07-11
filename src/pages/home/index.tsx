import React from 'react';
import { View, Text, SafeAreaView, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { ViewHeight } from '../../utils/index';
import CarouselPage from '../../components/carousel/index';
import { Badge } from 'react-native-elements';

const _onPress = () => {
    console.log(1)
}

const _renderItem = ({ item }) => {
    return (
        <TouchableOpacity onPress={_onPress}>
            <View style={styles.contanier}>
                {/* 左边 */}
                <View style={styles.left}>
                    <Image
                        style={styles.image}
                        source={item.imageUrl}
                    />
                </View>
                {/* 中间 */}
                <View style={styles.center}>
                    <Text style={styles.topText}>{item.title}</Text>
                    <Text style={styles.bottomText}>{item.subTitle}</Text>
                </View>
                {/* 右边 */}
                <View style={styles.rigth}>
                    <Badge value={20} />
                </View>
            </View>
        </TouchableOpacity>
    )
}

const HomeScreen: React.FC = () => {
    let res: Home.flatListProp | any = useSelector<Home.homeType>(state => state.home)
    return (
        <SafeAreaView >
            {/* 轮播区域 */}
            <View>
                <CarouselPage />
            </View>
            <FlatList
                data={res.homeItem}
                renderItem={_renderItem}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create<any>({
    contanier: {
        flex: 1,
        flexDirection: 'row',
        height: ViewHeight / 10,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ccc'
    },
    left: {
        flex: 1.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    rigth: {
        flex: 1,
        backgorundColor: 'red',
        justifyContent: 'center',
        width: 200
        // alignItems: 'center'
    },
    center: {
        flex: 4,
        verticalAlign: 'middle',
        paddingTop: 15,
        justifyContent: 'flex-start',
    },
    image: {
        width: 30,
        height: 30,
    },
    topText: {
        fontSize: 17,
        textAlign: 'left',
        color: '#333',
        marginBottom: 5,
    },
    bottomText: {
        fontSize: 14,
        color: 'gray',
    }
})

export default HomeScreen;