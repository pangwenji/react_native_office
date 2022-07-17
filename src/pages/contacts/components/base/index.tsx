import NavigationBar from "@/components/navigationbar";
import Spinner from "@/components/spinner";
import TabBar from "@/components/tarbar";
import { ViewHeight } from "@/utils/";
import { Colors } from "@/utils/colors";
import React, { useState } from "react";
import { Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Image } from "react-native-elements";


const textData = [
    { CONTACTLIST_TAB_PROGRESS: '进行中' },
    { CONTACTLIST_TAB_COMPLETE: '已完成' },
    { CONTACTLIST_TAB_INCOMPLETE: '未完成' },
    { CONTACTLIST_TAB_OVERDUE: '逾期完成' },
]
const renderPage = () => {
    // if(this.state.page === CONTACTLIST_TAB_PROGRESS){
    //     return (
    //       <ContactListView {...this.props} searchTitle={this.state.searchTitle} onClear={() => {this.clearText()}}
    //         listType={common.CONTACT_LIST_TYPE_PROGRESS} statusColor={'red'}/>
    //     );
    //   }else if(this.state.page === CONTACTLIST_TAB_COMPLETE){
    //     return (
    //       <ContactListView {...this.props} searchTitle={this.state.searchTitle} onClear={() => {this.clearText()}}
    //         listType={common.CONTACT_LIST_TYPE_COMPLETE} statusColor={'green'}/>
    //     );
    //   }else if(this.state.page === CONTACTLIST_TAB_INCOMPLETE){
    //     return (
    //       <ContactListView {...this.props} searchTitle={this.state.searchTitle} onClear={() => {this.clearText()}}
    //         listType={common.CONTACT_LIST_TYPE_INCOMPLETE} statusColor={'red'}/>
    //     );
    //   }else if(this.state.page === CONTACTLIST_TAB_OVERDUE){
    //     return (
    //       <ContactListView {...this.props} searchTitle={this.state.searchTitle} onClear={() => {this.clearText()}}
    //         listType={common.CONTACT_LIST_TYPE_OVERDUE} statusColor={'red'}/>
    //     );
    //   }
    return <View />
}

const rightOnPress = () => {

}

const search = () => { }

const goBack =()=>{}

const Base: React.FC = () => {
    let [page, setState] = useState()
    const { contactListBase } = this.props;
    return (
        <View style={styles.container}>
            <NavigationBar title='工作联系单' titleColor={Colors.WHITE}
                backgroundColor={Colors.ORANGE} onLeftButtonPress={goBack}
                leftButtonIcon={require('../../img/office/icon-backs.png')}
                rightButtonTitle={'新建'} rightButtonTitleColor={'#fff'}
                onRightButtonPress={rightOnPress} />
            <TabBar selected={page} style={{ backgroundColor: '#322a33', height: 50, top: 48 }}
                onSelect={el => setState(el.props.name)}>
                {
                    textData.map((title: string, index: number) => {
                        return (
                            <Text
                                key={index}
                                style={{ color: Colors.WHITE }}
                                selectionColor={Colors.ORANGE}
                            >{title}</Text>
                        )
                    })
                }
            </TabBar >
            <View style={styles.searchContainer}>
                <View style={styles.textInputContainer}>
                    <TextInput
                        ref={'textInput'}
                        value={searchTitle}
                        style={styles.textInput}
                        onChangeText={(search) => { searchTitle = search }}
                        placeholder='请输入工作单查找'
                        returnKeyType={'search'} />
                </View>
                <TouchableOpacity onPress={search} style={styles.searchButton}>
                    <Text>搜索</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.mainPage}>
                {
                    renderPage()
                }
            </View>
            <TouchableOpacity style={styles.numberButton}>
                <Image style={{ color: Colors.WHITE, fontSize: 20 }} source={require('../../img/icon/icon-fb-edit.png')}>0</Image>
            </TouchableOpacity>
            <View>
                <Spinner visible={contactListBase.contactListFetching} text={'加载中,请稍后...'} />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    searchContainer: {
        flexDirection: 'row',
        height: 50,
        marginTop: 50,
        elevation: 2,
        backgroundColor: Colors.LIGHT_GREY,
    },
    textInput: {
        height: 31,
        fontSize: 13,
        marginLeft: 8,
        marginRight: 8,
        backgroundColor: Colors.WHITE,
    },
    textInputContainer: {
        flex: 1,
        flexDirection: 'column',
        height: 34,
        margin: 8,
        elevation: 3,
        borderRadius: 15,
        backgroundColor: Colors.WHITE,
        justifyContent: 'center',
    },
    searchButton: {
        height: 32,
        width: 64,
        margin: 8,
        elevation: 3,
        borderRadius: 3,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.ORANGE,
    },
    mainPage: {
        height: Platform.OS === 'ios' ? ViewHeight - 148 : ViewHeight - 173,
    },
    numberButton: {
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: Colors.ORANGE,
        position: 'absolute',
        bottom: 20,
        right: 20,
        elevation: 4,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
export default Base