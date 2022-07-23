import NavigationBar from '@/components/navigationbar';
import Spinner from '@/components/spinner';
import { goBack } from '@/utils/index';
import { Colors } from '@/utils/colors';
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';


// componentWillReceiveProps(nextProps) {
//     const {messageList} = nextProps;
//     if(messageList.messageListFetched){
//       nextProps.dispatch(stopHandleTimeConsuming());
//       if(messageList.error){
//         showAlert(messageList.error);
//       } else if (messageList.messageListData._cachedRowCount == 0) {
//         Alert.alert('', '暂无消息通知！', [{text: '好'},]);
//       }
//     }
//   }

//   componentDidMount() {
//     const {dispatch, login} = this.props;
//     dispatch(fetchMessageList(login.rawData.userId));
//     dispatch(startHandleTimeConsuming());
//   }

const goBacks = (props: any) => { goBack(props) }

const _renderItem = (props: any) => {
    let { iconMessage, message } = props;
    return (
        <View style={styles.messageContainer}>
            <View style={styles.titleContainer}>
                <View style={styles.title}>
                    <Image source={iconMessage} style={styles.pic} />
                    <Text style={styles.titleText}>系统消息:</Text>
                </View>
                <View style={styles.timeContainer}>
                    <Text style={styles.time}>{message.CREATE_DATE}</Text>
                </View>
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.content}>{message.MESSAGE}</Text>
            </View>
        </View>
    );
}

const MessageScreen: React.FC = (props: any) => {
    const { messageList } = props;
    return (
        <View style={styles.container}>
            <NavigationBar
                title={'消息'} titleColor={Colors.WHITE}
                backgroundColor={Colors.ORANGE} onLeftButtonPress={() => goBacks(props)}
                leftButtonIcon={require('@/assets/office/icon-backs.png')} onRightButtonPress={() => { }} />
            <FlatList data={messageList.messageListData} renderItem={_renderItem} />
            <View>
                <Spinner visible={messageList.messageListFetching} text={'加载中,请稍后...'} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    listView: {
        flex: 1,
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: "#f5f5f5",
    },
    messageContainer: {
        borderBottomWidth: 1,
        borderBottomColor: Colors.LIGHT_GREY,
        backgroundColor: Colors.WHITE,
    },
    titleContainer: {
        flexDirection: 'row',
        flex: 1,
    },
    title: {
        flex: 1,
        flexDirection: 'row',
    },
    titleText: {
        flex: 1,
        marginTop: 20,
        marginLeft: 8,
        fontSize: 16,
        color: Colors.BLACK,
    },
    timeContainer: {
        flex: 1,
    },
    time: {
        fontSize: 12,
        marginTop: 20,
        marginRight: 10,
        textAlign: 'right',
    },
    contentContainer: {
        flex: 1,
        margin: 10,
        marginLeft: 70,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: Colors.LIGHT_GREY,
        borderRadius: 6,
        backgroundColor: "#f5f5f5",
        elevation: 2,
    },
    content: {
        margin: 10,
        marginTop: 20,
        marginBottom: 20,
        fontSize: 14,
        color: Colors.BLACK,
    },
    pic: {
        height: 30,
        width: 30,
        marginTop: 15,
        marginLeft: 10,
    },
});

export default MessageScreen;