import Calendars from '@/components/calender';
import NavigationBar from '@/components/navigationbar';
import Spinner from '@/components/spinner';
import React from 'react';
import { Alert, ScrollView, StyleSheet, View } from 'react-native';
import ContactListIitem from '@/utils/contacts_list_item'
import { Colors } from '@/utils/colors';
import FormItem from '@/components/form/fliter_items';
import { goBack} from '@/utils/index';
import ToastTip from '@/components/notification';
const commit = (props:any) => {
    if(checkData(props)){
        // const {dispatch, contactListBase} = this.props;
        // dispatch(fetchContacCreate(CONTACT_CREAT_URL, contactListBase.contactListCreateInputData));
        // dispatch(startHandleTimeConsuming());
      }
}

const goBacks = (props:any) => {
    goBack(props)
}

const checkData = (props:any) => {
    const { contactListBase } = props;
    let json = eval('(' + contactListBase.contactListCreateInputData + ')');
    for (let item of ContactListIitem.CONTACT_LIST_BUILDER_ITEMS) {
        if (item.required) {
            if (!json[item.name] || json[item.name] == '') {
                <ToastTip message={`${item.title} 为必填项,请填写后再提交!` } />
                return false;
            }
        }
    }
    return true;
}

const Builder: React.FC = (props:any) => {
    const { contactListBase } = props;
    return (
        <View style={styles.container}>
            <NavigationBar title='创建' titleColor={Colors.WHITE}
                backgroundColor={Colors.ORANGE} onLeftButtonPress={()=>goBacks(props)}
                leftButtonIcon={require('@/assets/office/icon-backs.png')}
                rightButtonTitle={'提交'} rightButtonTitleColor={'#fff'}
                onRightButtonPress={()=>commit(props)} />
            <ScrollView style={styles.formViewContainer}
                automaticallyAdjustContentInsets={false}
                showsHorizontalScrollIndicator={true}
                ref='keyboardView'
                keyboardDismissMode='interactive'>
                {
                    ContactListIitem.CONTACT_LIST_BUILDER_ITEMS.map(function (row) {
                        return <FormItem  row={row}  onUserInput={(userInputKey:any, userInputValue:any) => {
                            if (userInputKey === "type") {
                                let newUserInputValue = {};
                                // for (let item of contactListBase.contactBusinessTypeData) {
                                //     if (item.name === userInputValue) {
                                //         newUserInputValue.id = item.id;
                                //         break;
                                //     }
                                // }
                                // nextProps.dispatch(handleUserInput(userInputKey, newUserInputValue, common.CONTACT_INUPT_TYPE_CREATE));
                            } else if (userInputKey === "chargePerson") {
                                let newUserInputValue = {};
                                // newUserInputValue.id = userInputValue;
                                // nextProps.dispatch(handleUserInput(userInputKey, newUserInputValue, common.CONTACT_INUPT_TYPE_CREATE));
                                // let createPerson = {};
                                // createPerson.id = nextProps.login.rawData.userId;
                                // nextProps.dispatch(handleUserInput('createPerson', createPerson, common.CONTACT_INUPT_TYPE_CREATE));
                            } else {
                                // nextProps.dispatch(handleUserInput(userInputKey, userInputValue, common.CONTACT_INUPT_TYPE_CREATE));
                            }
                        }} />
                    })
                }
            </ScrollView>
            <Calendars />
            <View>
                <Spinner visible={contactListBase.contactBusinessTypeFetching} text={'加载中,请稍后...'} />
                <Spinner visible={contactListBase.contactCreateCommitting} text={'提交中,请稍后...'} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    formViewContainer: {
        flex: 1,
        flexDirection: 'column'
    },
});


export default Builder;