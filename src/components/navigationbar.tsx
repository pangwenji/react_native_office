import React from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { ViewWidth } from '@/utils/index';



const _onLeftButton = () => {

}

const _onRightButton = () => { }

const _renderRightIcon = () => {
    return (<View></View>)
}

const _renderLeftIcon = () => {
    return (<View></View>)
}

const NavigationBar: React.FC<any> = (props) => {
    console.log(props)
    let iosTop = Platform.OS === 'ios' ? 20 : 0;
    return (
        <View style={[styles.container, {
            // height: this.state.height,
            // backgroundColor: this.state.backgroundColor,
            marginTop: iosTop,
        }]}>
            <TouchableOpacity onPress={_onLeftButton}>
                <View style={styles.leftButton}>
                    {_renderLeftIcon()}
                    <Text style={[styles.leftButtonTitle, { color: '' }]}>
                        {/* {this.state.leftButtonTitle} */}
                    </Text>
                </View>
            </TouchableOpacity>

            <View style={styles.title}>
                <Text style={[styles.titleText, { color: '' }]} numberOfLines={1}>
                    {/* {this.state.title} */}
                </Text>
            </View>

            <TouchableOpacity onPress={_onRightButton}>
                <View style={styles.rightButton}>
                    {_renderRightIcon()}
                    <Text style={[styles.rightButtonTitle, { color: 'this.state.rightButtonTitleColor' }]}>
                        {/* {this.state.rightButtonTitle} */}
                    </Text>
                </View>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: ViewWidth,
        elevation: 5,
    },
    leftButton: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    leftButtonIcon: {
        width: 24,
        height: 24,
        marginLeft: 8,
        marginRight: 8,
    },
    leftButtonTitle: {
        fontSize: 15
    },
    title: {
        flex: 1,
        justifyContent: 'center',
        overflow: 'hidden',
        marginLeft: 8,
    },
    titleText: {
        fontSize: 18,
    },
    rightButton: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginRight: 8,
    },
    rightButtonIcon: {
        width: 10,
        height: 15
    },
    rightButtonTitle: {
        fontSize: 17
    }
})

export default NavigationBar;