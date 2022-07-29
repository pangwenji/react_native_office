import NavigationBar from '@/components/navigationbar';
import Spinner from '@/components/spinner';
import WebViews from '@/components/webview';
import { goBack } from '@/utils/index';
import { Colors } from '@/utils/colors';
import React from 'react';
import { View, Text, TouchableHighlight, Image, StyleSheet } from 'react-native';
import { FlatList, State } from 'react-native-gesture-handler';
import { RootState } from '@/store/rootReducer';
import { useSelector } from 'react-redux';



const goBacks = (props: any) => {
    console.log(props)
    goBack(props)
}

const goToNext = () => {
    // dispatch(changeWebviewUrl(NOTICE_DETIAL_URL + noticeItemNum + '&accountId=' + login.rawData.userId));
    // navigator.push({
    //     name: "WebViews",
    //     component: WebViews,
    // });
}

const _renderItem = ({item}:any) => {
    // let { iconTZ, news, iconNext } = props;
    let {title,currentTime } = item;
    return (
        <View style={{ backgroundColor: 'white' }}>
            <TouchableHighlight onPress={() => goToNext()} underlayColor='transparent'> 
                <View style={styles.cellBG}>
                    <Image source={require('@/assets/img/icon/icon-TZ.png')} style={styles.pic} />
                    <View style={styles.cellStyle}>
                        <View style={styles.ImageStyleCell}>
                            <Text style={styles.titleStyle} numberOfLines={1}>{title}</Text>
                            <Text style={styles.detailStyle}>发布时间: {currentTime}</Text>
                        </View>
                        <Image source={require('@/assets/img/icon/icon-next.png')} style={styles.iamgeStyle} />
                    </View>
                </View>
            </TouchableHighlight>
        </View>
    );
}

const NoticeScreen: React.FC<any> = (props: any) => {
    const { noticeList } = props;
    // const {notice } = useAppSelector<RootState>(state =>state.notice)
    const  resulte:notice.dataState | any = useSelector<notice.itemState>(state => state.notice);
    console.log(resulte,'resulte')
    return (
        <View style={styles.container}>
            <NavigationBar
                title={'通知'} titleColor={Colors.WHITE}
                backgroundColor={'#ef6c00'}
                height={45}
                onLeftButtonPress={() => goBacks(props)}
                leftButtonIcon={require('@/assets/office/icon-backs.png')}
                onRightButtonPress={() => { }} />
            <FlatList
                data={resulte.data}
                renderItem={_renderItem}
            />
            <View>
                {/* <Spinner visible={noticeList.noticeListFetching} text={'加载中,请稍后...'} /> */}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    iamgeStyle: {
        width: 8,
        height: 13,
        margin: 15,
        alignSelf: 'center',
        justifyContent: 'center'
    },
    ImageStyleCell: {
        flex: 1,
    },
    postButton: {
        margin: 10,
    },
    detailStyle: {
        flex: 1,
        fontSize: 12,
        color: 'gray',
    },
    titleStyle: {
        marginTop: 10,
        fontSize: 14,
        flex: 1,
        color: '#333',
    },
    cellBG: {
        flexDirection: 'row',
        flex: 1,
    },
    cellStyle: {
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: '#e5e5e5',
        backgroundColor: "white",
        flexDirection: 'row',
        flex: 1,
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: "#f5f5f5",
    },
    listView: {
        flex: 1,
    },
    pic: {
        margin: 10,
        height: 30,
        width: 30,
        flex: 0,
    },
});

export default NoticeScreen;