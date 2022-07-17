import NavigationBar from "@/components/navigationbar";
import Spinner from "@/components/spinner";
import { ViewHeight } from "@/utils/";
import { Colors } from "@/utils/colors";
import React, { useEffect } from "react";
import { Alert, Image, Platform, StyleSheet, Text, TextInput, TouchableHighlight, TouchableWithoutFeedback, View } from "react-native";



// const MyComponent = React.memo(
//     _MyComponent, 
//     (prevProps, nextProps) => nextProps.count !== prevProps.count
// )
const commit = () => { }

const load=()=>{
    return  Platform.OS == 'ios' ? null :  <Spinner visible={userInfo.avatarUploading} text={'头像上传中,请稍后...'} />
}

const UserInfo: React.FC = (props) => {
    const { userInfo, login } = props;
    //相当于componentDidMount
    useEffect(() => {
        const { dispatch, login } = this.props;
        dispatch(fetchPhoneNumAndEmail(login.username));
        dispatch(startHandleTimeConsuming());
    }, [])

    //相当于shouldComponentUpdate
    useEffect(() => {
        if (userInfo.userInfoGot) {
            // nextProps.dispatch(stopHandleTimeConsuming());
        }

        if (userInfo.avatarUploaded) {
            // nextProps.dispatch(stopHandleTimeConsuming());
            // console.log(userInfo);
            // Alert.alert('', userInfo.avatarResult, [{ text: '好' },]);
        }

        if (userInfo.committed) {
            // nextProps.dispatch(stopHandleTimeConsuming());
            // if (userInfo.commitResult == "success") {
            //     Alert.alert('', '个人信息修改成功!', [{ text: '好', onPress: () => { } },]);
            //     let data = login.rawData;
            //     data.email = userInfo.email;
            //     data.telephone = userInfo.phoneNumber;
            //     dispatch(changeLoginAuth({ rawData: data }));
            //     nextProps.navigator.pop();
            // } else if (userInfo.commitResult == 'failure') {
            //     Alert.alert('', '个人信息修改失败!', [{ text: '好' },]);
            // }
        }

        if ((userInfo.committed || userInfo.avatarUploaded || userInfo.userInfoGot)
            && userInfo.error) {
            // showAlert(userInfo.error);
        }
    }, [])
    const dismissKeyboard = require('dismissKeyboard');
    return (
        <View style={styles.background}>
            <NavigationBar
                title={'个人信息'} titleColor={Colors.WHITE}
                backgroundColor={Colors.ORANGE} onLeftButtonPress={goBack}
                leftButtonIcon={require('../img/office/icon-backs.png')}
                rightButtonIcon={{}}
                rightButtonTitle={'提交'}
                rightButtonTitleColor={'#fff'}
                onRightButtonPress={commit} />
            {/*头像*/}
            <TouchableHighlight style={{ marginTop: 20, }} onPress={this.onAvatarPress}>
                <View style={[styles.item, { justifyContent: 'space-between', }]}>
                    <Text style={styles.leftText}>头像</Text>
                    <Image style={styles.avatar} source={userInfo.avatarData ? userInfo.avatarData : require('../img/icon/icon-avatar.png')} />
                </View>
            </TouchableHighlight>

            <View style={{ backgroundColor: Colors.GRAY_GAY, height: 1, }} />
            {/*姓名*/}
            <View style={[styles.item, { justifyContent: 'space-between', }]}>
                <Text style={styles.leftText}>姓名</Text>
                <Text style={styles.rightText}>{login.rawData.nickName}</Text>
            </View>

            <View style={{ backgroundColor: Colors.GRAY_GAY, height: 1, }} />
            {/*手机号码*/}
            <TouchableWithoutFeedback onPress={() => dismissKeyboard()}>
                <View style={[styles.item, { marginTop: 20, }]}>
                    <Text style={styles.leftText}>手机号码</Text>
                    <TextInput
                        underlineColorAndroid={'transparent'}
                        style={styles.textInput}
                        defaultValue={userInfo.phoneNumber}
                        onChangeText={(phoneNumber) => dispatch(changeUserInfo({ phoneNumber: phoneNumber }))}
                        placeholder={'请输入您的手机号码'} />
                </View>
            </TouchableWithoutFeedback>

            <View style={{ backgroundColor: Colors.GRAY_GAY, height: 1, }} />

            {/*电子邮箱*/}
            <TouchableWithoutFeedback onPress={() => dismissKeyboard()}>
                <View style={styles.item}>
                    <Text style={styles.leftText}>电子邮箱</Text>
                    <TextInput
                        underlineColorAndroid={'transparent'}
                        style={styles.textInput}
                        defaultValue={userInfo.email}
                        onChangeText={(email) => dispatch(changeUserInfo({ email: email }))}
                        placeholder={'请输入你的邮箱'} />
                </View>
            </TouchableWithoutFeedback>

            <View>
                <Spinner visible={userInfo.userInfoGetting} text={'加载中,请稍后...'} />
                {load()}
                <Spinner visible={userInfo.committing} text={'修改中,请稍后...'} />
            </View>
        </View>
    )
}

const ITEM_HEIGHT = ViewHeight / 14;

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: Colors.GRAY_GAY,
    },
    item: {
        height: ITEM_HEIGHT,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.WHITE,
    },
    avatar: {
        width: ITEM_HEIGHT * 0.8,
        height: ITEM_HEIGHT * 0.8,
        borderRadius: ITEM_HEIGHT * 0.4,
        marginLeft: 10,
        marginRight: 10,
    },
    leftText: {
        marginLeft: 10,
        marginRight: 10,
        fontSize: 14,
        color: '#333333',
    },
    rightText: {
        marginRight: 10,
        fontSize: 14,
        color: '#333333',
    },
    textInput: {
        flex: 1,
        fontSize: 14,
        width: 100,
        color: '#333333',
    },
    edit: {
        width: ITEM_HEIGHT * 0.7,
        height: ITEM_HEIGHT * 0.7,
    }
});
export default UserInfo;