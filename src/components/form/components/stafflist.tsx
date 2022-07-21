import NavigationBar from "@/components/navigationbar";
import Spinner from "@/components/spinner";
import { ViewHeight } from "@/utils/index";
import { Colors } from "@/utils/colors";
import { NaigatorTypes } from "@/utils/naigator_types";
import React from "react";
import {
    Alert,
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import TextInputs from "./textinput";

const arrow = () => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1, marginLeft: 30, }}>
            <Image style={{ width: 20, height: 20 }} source={require('@/assets/img/icon/icon-agree.png')} />
        </View>
    )
}

const select = () => {
    const { navigator, staffList, dispatch } = this.props;
    let staffData = staffList.staffData;
    for (let i = 0; i < staffData.length; i++) {
        if (staffData[i].select)
            staffData[i].select = false;
        if (rowData.id == staffData[i].id) {
            staffData[i].select = true;
            dispatch(assignStaffUserId(staffData[i].id, staffData[i].nickName));
        }
    }
    dispatch(assignStaffListData(staffData));
}

const _renderItem = () => {
    return (
        <TouchableOpacity onPress={() => select(rowData)}>
            <View style={styles.card}>
                <View style={{ flexDirection: 'row', flex: 9 }}>
                    <View style={styles.userInfo}>
                        <Image style={styles.avatar} source={require('@/assets/img/icon/icon-avatar.png')} />
                        <Text style={styles.detailText}>{rowData.nickName}</Text>
                    </View>
                    <View style={styles.detail}>
                        <Text style={styles.detailText}>部门:{rowData.dept}</Text>
                        <Text style={styles.detailText}>公司:{rowData.companyName}</Text>
                    </View>
                </View>
                {rowData.select && arrow()}
            </View>
        </TouchableOpacity>
    )
}

const renderListView = () => {
    const { staffList } = this.props;
    if (staffList.staffListData._cachedRowCount <= 0) {
        return (
            <View style={{ height: ViewHeight - 250, alignItems: 'center', justifyContent: 'center' }}>
                <Image source={require('@/assets/img/icon/app_panel_expression_icon.png')} style={{ width: 120, height: 120, }} />
                <Text style={{ textAlign: 'center', fontSize: 15, color: Colors.GREY, }}>当前没有搜索结果～</Text>
            </View>
        )
    } else {
        return (
            <FlatList
                data={staffList.staffListData}
                renderItem={_renderItem}
            />
        )
    }
}

const goBack = () => {
    // const {navigator} = this.props;
    // navigator.pop();
}

const next = () => {
    const { navigator, route, staffList } = this.props;
    if (route.type === NaigatorTypes.STAFF_LIST_NORMAL) {
        navigator.push({
            name: "TextInput",
            component: TextInputs,
            taskId: route.taskId,
            type: route.dealType,
        });
    } else if (route.type === NaigatorTypes.STAFF_LIST_CONTACT) {
        route.onStaffSelect(staffList.nickName, staffList.userId);
        navigator.pop();
    }
}

const search = () => {
    const { dispatch, staffList } = this.props;
    if (!staffList.searchName.trim() || staffList.searchName.trim().length <= 0) {
        Alert.alert('错误提示:', '搜索内容不能为空!', [{ text: '好' },]);
        return;
    }
    dispatch(fetchStaffList(staffList.searchName));
    dispatch(startHandleTimeConsuming());
}

const StaffList: React.FC = () => {
    const { dispatch, route, staffList } = this.props;
    let rightButtonTitle = '';
    let staffData = staffList.staffData;
    for (let i = 0; i < staffData.length; i++) {
        if (staffData[i].select) {
            if (route.type === NaigatorTypes.STAFF_LIST_NORMAL) {
                rightButtonTitle = '下一步';
            } else if (route.type === NaigatorTypes.STAFF_LIST_CONTACT) {
                rightButtonTitle = '完成';
            }
            break;
        }
    }
    const dismissKeyboard = require('dismissKeyboard');
    return (
        <View style={styles.container}>
            <NavigationBar title={'人员列表'} titleColor={Colors.WHITE}
                leftButtonIcon={require('@/assets/office/icon-backs.png')} rightButtonTitle={rightButtonTitle}
                rightButtonTitleColor={'#fff'} backgroundColor={Colors.ORANGE}
                onLeftButtonPress={goBack} onRightButtonPress={next} />
            <TouchableWithoutFeedback onPress={() => dismissKeyboard()}>
                <View style={{ flexDirection: 'row', height: 56 }}>
                    <TextInput
                        style={styles.input}
                        placeholder='请输入姓名查找'
                        onChangeText={(searchName) => dispatch(changeSearchName(searchName))}
                        returnKeyType={'search'}
                        onSubmitEditing={search} />
                    <TouchableOpacity onPress={search}
                        style={styles.search}>
                        <Text>搜索</Text>
                    </TouchableOpacity>
                </View>
            </TouchableWithoutFeedback>

            <View style={styles.main}>
                {renderListView()}
            </View>

            <View>
                <Spinner visible={staffList.staffListFetching} text={'搜索中,请稍后...'} />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.ORANGE
    },

    main: {
        flex: 1,
        backgroundColor: 'white',
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
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
        flexDirection: 'column',
        alignSelf: 'center',
        marginLeft: 30,
    },
    detailText: {
        marginTop: 5,
        fontSize: 12,
        color: '#666',
    },
    input: {
        flex: 1,
        height: 32,
        margin: 8,
        elevation: 3,
        borderRadius: 2,
        backgroundColor: 'white',
        fontSize: 14,
    },
    search: {
        height: 32,
        width: 64,
        margin: 8,
        elevation: 3,
        borderRadius: 2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.ORANGE
    },
});


export default StaffList;