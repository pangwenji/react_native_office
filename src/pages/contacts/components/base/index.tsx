import NavigationBar from "@/components/navigationbar";
import Spinner from "@/components/spinner";
import TabBar from "@/components/tarbar";
import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

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
}

const Base: React.FC = () => {
    const { contactListBase } = this.props;
    return (
        <View style={styles.container}>
            <NavigationBar title='工作联系单' titleColor={Colors.white}
                backgroundColor={Colors.mainColor} onLeftButtonPress={this.onLeftBack}
                leftButtonIcon={require('../../img/office/icon-backs.png')}
                rightButtonTitle={'新建'} rightButtonTitleColor={'#fff'}
                onRightButtonPress={this.onCreate} />
            <TabBar selected={this.state.page} style={{ backgroundColor: '#322a33', height: 50, top: 48 }}
                onSelect={el => this.setState({ page: el.props.name })}>
                <Text
                    name={CONTACTLIST_TAB_PROGRESS}
                    style={{ color: Colors.white }}
                    selectedStyle={{ color: Colors.mainColor }}
                    selectedIconStyle={{ borderBottomWidth: 2, borderBottomColor: '#ef6c00' }}>{CONTACTLIST_TAB_PROGRESS}</Text>
                <Text
                    name={CONTACTLIST_TAB_COMPLETE}
                    style={{ color: Colors.white }}
                    selectedStyle={{ color: Colors.mainColor }}
                    selectedIconStyle={{ borderBottomWidth: 2, borderBottomColor: '#ef6c00' }}>{CONTACTLIST_TAB_COMPLETE}</Text>
                <Text
                    name={CONTACTLIST_TAB_INCOMPLETE}
                    style={{ color: Colors.white }}
                    selectedStyle={{ color: Colors.mainColor }}
                    selectedIconStyle={{ borderBottomWidth: 2, borderBottomColor: '#ef6c00' }}>{CONTACTLIST_TAB_INCOMPLETE}</Text>
                <Text
                    name={CONTACTLIST_TAB_OVERDUE}
                    style={{ color: Colors.white }}
                    selectedStyle={{ color: Colors.mainColor }}
                    selectedIconStyle={{ borderBottomWidth: 2, borderBottomColor: '#ef6c00' }}>{CONTACTLIST_TAB_OVERDUE}</Text>
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
                <TouchableOpacity onPress={this.onSearch} style={styles.searchButton}>
                    <Text>搜索</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.mainPage}>
                {
                    renderPage()
                }
            </View>
            <TouchableOpacity style={styles.numberButton}>
                <Text style={{ color: Colors.white, fontSize: 20 }} source={require('../../img/icon/icon-fb-edit.png')}>0</Text>
            </TouchableOpacity>
            <View>
                <Spinner visible={contactListBase.contactListFetching} text={'加载中,请稍后...'} />
            </View>
        </View>
    );
}