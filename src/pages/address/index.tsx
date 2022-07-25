import NavigationBar from '@/components/navigationbar';
import Spinner from '@/components/spinner';
import { ViewHeight } from '@/utils/index';
import { Colors } from '@/utils/colors';
import React from 'react';
import {
    View,
    Text,
    TouchableWithoutFeedback,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Image,
    Platform,
    Linking,
    Keyboard

} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const onCall = (phoneNum: string | number) => {
    let url = Platform.OS !== 'android' ? 'telprompt:' + phoneNum : 'tel:' + phoneNum;
    Linking.openURL(url);
}

const renderTelephoneIcon = (data: any) => {
    let { phoneNum } = data;
    return (
        <TouchableOpacity onPress={() => onCall(phoneNum)}>
            <Image style={{ height: 24, width: 24, }} source={require('@/assets/img/icon/telephone.png')} />
        </TouchableOpacity>
    )
}

const _renderItem = (props: any) => {
    let { rowData } = props
    return (
        <View style={styles.card}>
            <View style={styles.userInfo}>
                <Image style={styles.avatar} source={require('@/assets/img/icon/icon-avatar.png')} />
                <Text style={styles.detailText}>{rowData.displayName}</Text>
            </View>
            <View style={styles.detail}>
                <View style={styles.row}>
                    <Text style={styles.detailText}>电话: {rowData.mobile}</Text>
                    {rowData.mobile !== undefined && rowData.mobile.length > 0 && renderTelephoneIcon(rowData.mobile)}
                </View>
                <Text style={styles.detailText}>邮箱: {rowData.email}</Text>
                <Text style={styles.detailText}>所属公司: {rowData.compayName}</Text>
            </View>
        </View>
    );
}

const renderListView = (props: any) => {
    const { address } = props;
    if (address.searchUserData._cachedRowCount <= 0) {
        return (
            <View style={{ height: ViewHeight - 250, alignItems: 'center', justifyContent: 'center' }}>
                <Image source={require('@/assets/img/icon/app_panel_expression_icon.png')} style={{ width: 120, height: 120, }} />
                <Text style={{ textAlign: 'center', fontSize: 15, color: Colors.GREY, }}>当前没有搜索结果～</Text>
            </View>
        )
    } else {
        return (
            <FlatList
                data={address.searchUserData}
                renderItem={_renderItem}
            />
        )
    }
}

const goBack = () => {
    // const {navigator} = this.props;
    // navigator.pop();
}

const onSearch = () => {
    // const {dispatch, address} = this.props;
    // if(!address.searchName || !address.searchName.trim() || address.searchName.trim().length <= 0) {
    //   Alert.alert('错误提示:','搜索内容不能为空!',[{text: '好'},]);
    //   return;
    // }
    // dispatch(fetchAddressSearch(address.searchName.LTrim().RTrim()));
    // dispatch(startHandleTimeConsuming());
}

const ContactsScreen: React.FC = (props: any) => {
    const { dispatch, address } = props;
    return (
        <View style={styles.container}>
            <NavigationBar title={'通讯录'} titleColor={Colors.WHITE}
            leftButtonIcon={require('@/assets/img/office/icon-backs.png')}
                backgroundColor={Colors.ORANGE} onLeftButtonPress={goBack} onRightButtonPress={() => { }} />
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={{ flexDirection: 'row', height: 56 }}>
                    <TextInput
                        style={{ flex: 1, height: 32, margin: 8, elevation: 3, borderRadius: 2, backgroundColor: 'white', fontSize: 14 }}
                        placeholder='请输入姓名查找'
                        // onChangeText={(searchName) => dispatch(changeSearchName(searchName))}
                        returnKeyType={'search'}
                        onSubmitEditing={onSearch} />
                    <TouchableOpacity onPress={onSearch}
                        style={{ height: 32, width: 64, margin: 8, elevation: 3, borderRadius: 2, alignItems: 'center', justifyContent: 'center', backgroundColor: Colors.ORANGE }}>
                        <Text>搜索</Text>
                    </TouchableOpacity>
                </View>
            </TouchableWithoutFeedback>

            <View style={styles.main}>
                {renderListView(props)}
            </View>
            <View>
                <Spinner visible={address.addressFetching} text={'搜索中,请稍后...'} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.GRAY_GAY
    },

    main: {
        flex: 1,
        backgroundColor: 'white',
    },
    card: {
        flexDirection: 'row',
        borderRadius: 2,
        borderWidth: 0.5,
        borderColor: '#ccc',
        margin: 8,
        elevation: 1,
        padding: 8,
    },
    userInfo: {
        alignItems: 'center'
    },
    avatar: {
        width: 48,
        height: 48,
        alignSelf: 'center',
    },
    detail: {
        marginLeft: 16,
    },
    detailText: {
        marginTop: 5,
        fontSize: 12,
        color: '#666',
    },
    row: {
        flexDirection: 'row',
    }
});

export default ContactsScreen;