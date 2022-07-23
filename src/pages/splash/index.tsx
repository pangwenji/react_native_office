import { ViewWidth } from '@/utils/index';
import React, { useEffect, useRef } from 'react';
import { Animated, InteractionManager, StyleSheet, Text, View } from 'react-native';
import Store from '@/utils/storage';
import Login from '../login';
import HomeScreen from '../home';
const Splash: React.FC = (props:any) => {
    let bounceValue = useRef(new Animated.Value(1)).current;
    useEffect(() => {
        const { navigator, dispatch } = props;
        let key: string = 'userName';
        setTimeout(() => {
            Store.getValue(key).then((ret:any) => {
                if (ret.userName && ret.password && ret.rawData) {
                    // dispatch(changeLoginAuth({ username: ret.userName, password: ret.password, rawData: ret.rawData }))
                    navigator.push({
                           name: "HomeScreen",
                           component: HomeScreen,
                    });
                } else {
                    InteractionManager.runAfterInteractions(() => {
                        navigator.resetTo({
                            component: Login,
                            name: 'Login'
                        });
                    });
                }
            }).catch((err) => {
                console.log('setAotoLogin error ==> ', err);
                InteractionManager.runAfterInteractions(() => {
                    navigator.resetTo({
                        component: Login,
                        name: 'Login'
                    });
                });
            })
        }, 2000);
    }, [])
    return (
        <View style={styles.container}>
            <Animated.Image
                source={require('@/assets/cons/splash.jpg')}
                style={{
                    flex: 1,
                    width: ViewWidth,
                    height: 1,
                    transform: [
                        { scale: bounceValue },
                    ]
                }} />
            <Text style={styles.text} />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    cover: {
        flex: 1,
        width: 200,
        height: 1,
    },
    logo: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 30,
        height: 54,
        backgroundColor: 'transparent',
    },
    text: {
        flex: 1,
        fontSize: 16,
        textAlign: 'center',
        color: 'white',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 10,
        backgroundColor: 'transparent',
    }
});
export default Splash;