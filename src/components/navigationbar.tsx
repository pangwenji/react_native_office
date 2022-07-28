import React, { useState } from 'react';
import { Image, ImageProps, TextStyle, TouchableOpacity } from 'react-native';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { ViewWidth } from '@/utils/index';

interface IProp { 
    title?:string,
    height?:number,
    titleColor?:string,
    backgroundColor?:string,
    leftButtonTitle?:string,
    leftButtonTitleColor?:string,
    onLeftButtonPress:Function,
    rightButtonTitle?:string,
    rightButtonTitleColor?:string,
    onRightButtonPress:Function,
    leftButtonIcon?:string,
    rightButtonIcon?:string
}

const commonRenderIcon = (title: ImageProps | Readonly<ImageProps> | any) => { 
   return title ? <Image style={styles.rightButtonIcon} source={title} /> : null;
}

const _renderLeftIcon = (props: any) => { 
    let { leftButtonIcon } = props;
    console.log()
    return commonRenderIcon(leftButtonIcon);
 }

const _renderRightIcon = (props: any) => {
    let { rightButtonIcon } = props;
    return commonRenderIcon(rightButtonIcon);
 }


const commonRenderTouchableOpacity = (style:any,bottonTilte:TextStyle ,onPress:Function,renderView:Element | any,title:any,titleColor:string | any ) => { 
    return (
        <TouchableOpacity onPress={()=>onPress}>
            <View style={style}>
                {renderView}
                <Text style={[bottonTilte, { color: titleColor }]}>
                    {title}
                </Text>
            </View>
        </TouchableOpacity>
     )
}

const NavigationBar: React.FC<IProp> = (props:IProp) => {
    let {
        title,
        height,
        titleColor,
        backgroundColor,
        leftButtonTitle,
        leftButtonTitleColor,
        onLeftButtonPress, //左边函数
        rightButtonTitle,
        rightButtonTitleColor,
        onRightButtonPress,//右边函数
    } = props;
    let iosTop = Platform.OS === 'ios' ?  20 : 0;
    return (
        <View style={[styles.container, {
            // height: this.state.height,
            // backgroundColor: this.state.backgroundColor,
            marginTop: iosTop,
        }]}>
            { commonRenderTouchableOpacity(styles.leftButton,styles.leftButtonTitle,onLeftButtonPress,_renderLeftIcon(props),leftButtonTitle,'')}
            <View style={styles.title}>
                <Text style={[styles.titleText, { color: '' }]} numberOfLines={1}>
                    {title}
                </Text>
            </View>
            { commonRenderTouchableOpacity(styles.rightButton,styles.rightButtonTitle,onRightButtonPress,_renderRightIcon(props),rightButtonTitle,rightButtonTitleColor)}
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