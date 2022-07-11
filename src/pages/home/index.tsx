import React from 'react';
import { View, Text, SafeAreaView, FlatList, StyleSheet} from 'react-native';
import { useSelector } from 'react-redux';
import CarouselPage from '../../components/carousel/index';

const _renderItem = ({item}) => {
    return (
        <View style={styles.contanier}>
            {/* 左边 */}
            <View style={styles.left}><Text>{item.id}</Text></View>
            {/* 右边 */}
            <View style={styles.rigth}>
                <Text>{item.title}</Text>
            </View>
        </View>
    )
 }

const HomeScreen: React.FC = () => {
    let res:Home.flatListProp | any = useSelector<Home.homeType>(state => state.home)
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
        height: 60,
        backgroundColor: '#fff'
    },
    left: {
        flex: 1,
    },
    rigth: {
        flex: 6,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default HomeScreen;