import NavigationBar from '@/components/navigationbar';
import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const onSearch = () => { }

const onLeftBack = () => { }

const renderSelect = () => {
    return (<></>)
}
const setState = (searchTitle: any) => { }

const renderListView = () => { return (<></>) }

const renderModel = () => { return (<></>) }

const TodoScreen: React.FC = () => {
    return (
        <View style={styles.contanier}>
            <View>
                <NavigationBar
                    title={''}
                    titleColor={''}
                    backgroundColor={''}
                    onLeftButtonPress={onLeftBack}
                    leftButtonIcon={require('@/assets/office/icon-backs.png')}
                    rightButtonTitle={'搜索'}
                    rightButtonTitleColor={'#fff'}
                    onRightButtonPress={onSearch}
                />
            </View>
            <View style={styles.searchContainer}>
                <View style={styles.searchInputContainer}>
                    <View style={styles.pickerContainer}>
                        {renderSelect()}
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
            {renderListView()}
            <View>
                <Spinner visible={taskList.taskListFetching} text={'加载中,请稍后...'} />
            </View>
            {renderModel()}
        </View>
    )
}
const styles = StyleSheet.create({
    contanier: {
        flex: 1,
        flexDirection: 'column',
    },
    searchContainer: {
        flexDirection: 'column',
    },
    searchInputContainer: {
        flexDirection: 'row',
        flex: 1,
        backgroundColor: Colors.lightgrey,
    },
    textInputContainer: {
        flex: 4,
        height: 35,
        margin: 5,
        elevation: 2,
        borderRadius: 2,
        backgroundColor: Colors.white,
        borderColor: Colors.lightgrey,
        borderWidth: 1,
    },
    textInput: {
        flex: 1,
        fontSize: 14,
        backgroundColor: Colors.white,
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
        backgroundColor: Colors.white,
        borderColor: Colors.lightgrey,
    },
    modelStyle: {
        flexDirection: 'column',
        position: 'absolute',
        backgroundColor: '#fdfcf5',
        opacity: 0.98,
        borderRadius: 10,
        overflow: 'hidden',
        marginLeft: deviceWidth / 8,
        width: deviceWidth - deviceWidth / 4,
        height: deviceHeight - deviceHeight / 3,
        marginTop: deviceHeight / 8,
    },
    picker: {
        flex: 1,
    },
    postsListView: {
        backgroundColor: Colors.mainBackground,
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