import NavigationBar from '@/components/navigationbar';
import Spinner from '@/components/spinner';
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { Model } from 'react-native-paper'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Platform,
    TouchableOpacity,
    Image,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Colors } from '@/utils/colors';
import { ViewWidth, ViewHeight, goBack } from '@/utils/index';
import PostCell from '@/components/postcell_todo';
import { useSelector } from 'react-redux';

interface IProps {
    taskList: {
        taskListFetching: boolean
    }
}

const onSearch = () => { }

const goBacks = (props: any) => {
    goBack(props);
}

const renderSelect = (props: any,setIsShow:Function) => {
    let [selectedValue, setState] = useState(false)
    if (Platform.OS == 'ios') {
        return (
            <View>
                <TouchableOpacity
                    onPress={() => setIsShow(false)}
                    style={
                        {
                            alignItems: 'center',
                            marginTop: 10
                        }}>
                    <Text style={{ textAlign: 'center' }}>
                        {selectedValue}
                    </Text>
                </TouchableOpacity>
            </View>)
    } else {
        return (renderPick(props))
    }
}

const renderPick = (props: any) => {
    let [searchId, setState] = useState(0);
    let [selectedValue, setSelectedValue] = useState(0);
    let [isSelect, setIsSelect] = useState(false);
    const { login, route, dispatch } = props;
    let searchArr: Array<any> = [];
    let itemAll: { id: string, name: string } = {
        id: '',
        name: ''
    };
    itemAll.id = '';
    itemAll.name = '全部';
    searchArr.push(itemAll);
    // Array.prototype.push.apply(searchArr, taskList.taskSearchList); //链接两个数字
    return (
        <Picker
            style={styles.picker}
            mode="dropdown"
            selectedValue={searchId}
            itemStyle={{ backgroundColor: '#fdfcf5', }}
            onValueChange={(id) => {
                for (var i = 0; i < searchArr.length; i++) {
                    if (searchArr[i].id == id) {
                        setSelectedValue(searchArr[i].name);
                    }
                }
                const page = 1;
                const canLoadMore = false;
                const onEndReach = false;
                // dispatch(fetchTaskList(route.url + 'userId=', login.rawData.userId, id, '', '', page));
                // dispatch(startHandleTimeConsuming());
                setState(id);
                setIsSelect(true);
            }}>
            {searchArr.map(function (row) {
                return <Picker.Item label={row.name} value={row.id} />
            })}
        </Picker>
    )
}

const onPress = () => { }

const _renderItem = (props: any) => {
    let _props = Object.assign(props, {
        type: '已办任务',
        post: {
            startTime: '2022-08-01 11:11:00',
            endTime: '2022-08-30 24:00:00',
            timeOut: '24小时'
        }
    })
    return (
        <PostCell
            props={_props}
            onSelect={async () => onPress()}
        />);
}
const setState = (searchTitle: any) => { }

const _onScorll = () => { }

const renderListView = (props: any) => {
    let result: any = useSelector<Home.homeType>(state => state.home);
    if (result.todoData.length <= 0) {
        return (
            <View style={
                {
                    height: ViewHeight - 250,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                <Image source={require('@/assets/img/icon/app_panel_expression_icon.png')} style={{ width: 120, height: 120, }} />
                <Text style={{ textAlign: 'center', fontSize: 15, color: Colors.GREY, }}>当前没有对应数据～</Text>
            </View>
        )
    } else {
        return (
            <FlatList
                renderItem={_renderItem}
                data={result.todoData}
                onScroll={_onScorll}
                onEndReachedThreshold={10}
            />
        )
    }

}

const commonRenderButton = (title:string,setIsShow:Function) => {
    return (
        <TouchableOpacity style={styles.button} onPress={() => setIsShow(false)} >
            <Text style={styles.buttonText}>取 消</Text>
        </TouchableOpacity>
    )
}

const showModel = (props: any, isShow: boolean, setIsShow: Function) => {
    return (
        <Model visible={isShow} transparent={true}>
            <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', height: ViewHeight, width: ViewWidth, }}>
                <View style={styles.modelStyle}>
                    <View style={styles.calendarContainer}>
                        <Text style={styles.textStyle}>请选择类型</Text>
                        <View style={{ flex: 1, justifyContent: 'center', }}>
                            {renderPick(props)}
                        </View>
                        <View style={styles.calendar}>
                            {commonRenderButton('取 消', setIsShow)}
                            {commonRenderButton('确 定', setIsShow)}
                        </View>
                    </View>
                </View>
            </View>
        </Model>
    )
}

const TodoScreen: React.FC<IProps> = (props: IProps) => {
    let [isShow, setIsShow] = useState(false);
    return (
        <View style={styles.contanier}>
            <View style={{ display: 'flex', flexDirection: 'column' }}>
                <View >
                    <NavigationBar
                        height={45}
                        title={'待办'}
                        titleColor={'#ffffff'}
                        backgroundColor={'#ef6c00'}
                        onLeftButtonPress={() => goBacks(props)}
                        leftButtonIcon={require('@/assets/office/icon-backs.png')}
                        rightButtonTitle={'搜索'}
                        rightButtonTitleColor={'#fff'}
                        onRightButtonPress={onSearch}
                    />
                </View>
                <View style={styles.searchContainer}>
                    <View style={styles.pickerContainer}>
                        {renderSelect(props,setIsShow)}
                    </View>
                    <View style={styles.textInputContainer}>
                        <TextInput
                            style={styles.textInput}
                            placeholder='请输入标题关键字搜索...'
                            onChangeText={(searchTitle) => { setState({ searchTitle: searchTitle }); }}
                            returnKeyType={'search'} />
                    </View>
                </View>
            </View>
            <View >
                {renderListView(props)}
            </View>
            <View>
                <Spinner visible={false} text={'加载中,请稍后...'} />
            </View>
            {showModel(props, isShow, setIsShow)}
        </View>
    )
}
const styles = StyleSheet.create({
    contanier: {
        flex: 1,
        flexDirection: 'column',
    },
    searchContainer: {
        flexDirection: 'row',
        backgroundColor: Colors.WHITE,
    },
    textInputContainer: {
        flex: 4,
        height: 35,
        margin: 5,
        elevation: 2,
        borderRadius: 2,
        backgroundColor: Colors.WHITE,
        borderColor: Colors.LIGHT_GREY,
        borderWidth: 1,
    },
    textInput: {
        flex: 1,
        fontSize: 14,
        backgroundColor: Colors.WHITE,
        height: 26,
        borderWidth: 0.5,
        borderColor: '#0f0f0f',
        padding: 4,
    },
    pickerContainer: {
        flex: 3,
        margin: 5,
        marginBottom: 7,
        height: 35,
        elevation: 2,
        borderRadius: 2,
        backgroundColor: Colors.WHITE,
        borderColor: Colors.LIGHT_GREY,
    },
    modelStyle: {
        flexDirection: 'column',
        position: 'absolute',
        backgroundColor: '#fdfcf5',
        opacity: 0.98,
        borderRadius: 10,
        overflow: 'hidden',
        marginLeft: ViewWidth / 8,
        width: ViewWidth - ViewWidth / 4,
        height: ViewHeight - ViewHeight / 3,
        marginTop: ViewHeight / 8,
    },
    picker: {
        flex: 1,
    },
    postsListView: {
        backgroundColor: Colors.GRAY_GAY,
    },
    textStyle: {
        marginTop: 5,
        fontSize: 20,
        fontWeight: '500',
        textAlign: 'center',
        color: '#ff8c00'
    },
    calendar: {
        height: 60,
        justifyContent: 'center',
        flexDirection: 'row',
    },
    button: {
        justifyContent: 'center',
        borderRadius: 8,
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20,
        width: 70,
        height: 35,
    },
    buttonText: {
        alignSelf: 'center',
        fontSize: 18,
        color: '#ff8c00'
    },
    calendarContainer: {
        flex: 1,
        justifyContent: 'center',
        marginTop: 30,
    },
})

export default TodoScreen;