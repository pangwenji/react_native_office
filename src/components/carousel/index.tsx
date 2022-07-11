import React, { useEffect }  from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import { ViewWidth } from '../../utils/index';
import { useSelector} from 'react-redux';
import Swiper from 'react-native-swiper'


const CarouselPage = () => {
    const  data:any= useSelector<Home.homeType>(state => state.home)
    return (
        <View style={styles.contanier}>
            <Swiper
                showsPagination={ true}
                showsButtons={false}
                autoplay
                autoplayTimeout={2}
                activeDot={<View style={styles.activeDotSty} />}
                dot={<View style={styles.docSty} />}
            >
                {
                    data.imageData.map((res: any ,idx:number)=> (
                    <View key={idx}>
                        <Image
                            source={res.imageUrl}
                            resizeMode='stretch'
                            style={styles.image}
                        />
                    </View>))
                }
            </Swiper>
       </View>
    )
}

const styles = StyleSheet.create({
    contanier: {
        width: ViewWidth,
        height: 240 
    },
    image: {
        width: ViewWidth,
        height: 240,
    },
    activeDotSty: {
        backgroundColor: 'red',
        width: 8,
        height: 8,
        borderRadius: 4,
        marginLeft: 3,
        marginRight: 3,
    },
    docSty: {
        backgroundColor: 'white',
        height: 8,
        width: 8,
        borderRadius: 4,
        marginLeft: 3,
        marginRight: 3,
    }
})
export default CarouselPage;