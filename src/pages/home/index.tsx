import React from 'react';
import { View, Text, SafeAreaView, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { ViewHeight } from '@/utils/index';
import CarouselPage from '@/components/carousel/index';
import { Badge } from 'react-native-elements';

const _onPress = ({ navigation }: any, args: Home.renderlistProp) => {
    let { item } = args;
    navigation.navigate(item.name)
}

const _renderItem = (args: Home.renderlistProp | any, props: any) => {
    return (
        <TouchableOpacity onPress={() => _onPress(props, args)}>
            <View style={styles.contanier}>
                {/* 左边 */}
                <View style={styles.left}>
                    <Image
                        style={styles.image}
                        source={args.item.imageUrl}
                    />
                </View>
                {/* 中间 */}
                <View style={styles.center}>
                    <Text style={styles.topText}>{args.item.title}</Text>
                    <Text style={styles.bottomText}>{args.item.subTitle}</Text>
                </View>
                {/* 右边 */}
                <View style={styles.rigth}>
                    <Badge value={20} />
                </View>
            </View>
        </TouchableOpacity>
    )
}

const HomeScreen: React.FC = (props) => {
    let res: Home.flatListProp | any = useSelector<Home.homeType>(state => state.home)
    return (
        <SafeAreaView >
            {/* 轮播区域 */}
            <View>
                <CarouselPage />
            </View>
            <FlatList
                data={res.homeItem}
                renderItem={(item) => (_renderItem(item, props))}
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