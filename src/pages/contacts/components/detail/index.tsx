import FormItem from "@/components/form/fliter_items";
import NavigationBar from "@/components/navigationbar";
import Spinner from "@/components/spinner";
import { Colors } from "@/utils/colors";
import ContactListIitem from "@/utils/contacts_list_item";
import { ContactType } from "@/utils/contact_type";
import { NaigatorTypes } from "@/utils/naigator_types";
import React, { useMemo } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Contracts from "../..";

const goBack = () => {
    // const {navigator} = this.props;
    // navigator.pop();
}

const next = (props:any) => {
    const { navigator, route, contactListBase } = props;
    navigator.push({
        name: "ContactListContainer",
        component: Contracts,
        type: NaigatorTypes.CONTACT_LIST_APPROVE,
        peopleType: route.peopleType,
        contactListId: route.contactListId,
        reportDescription: contactListBase.contactDetailData[0].REPORT_DESCRIPTION + "\r\n",
    });
}

const Detail: React.FC = (props:any) => {

    const { contactListBase, route } = props;
    let rightButtonTitle;
    let type = route.peopleType;
    if (type === ContactType.CONTACT_PERSON_TYPE_CREATE) {
        rightButtonTitle = '';
    } else if (type === ContactType.CONTACT_PERSON_TYPE_CHARGE) {
        rightButtonTitle = '汇报';
    } else if (type === ContactType.CONTACT_PERSON_TYPE_FOLLOW) {
        rightButtonTitle = '跟进';
    }
    return (
        <View style={styles.container}>
            <NavigationBar title='详情' titleColor={Colors.WHITE}
                backgroundColor={Colors.ORANGE} onLeftButtonPress={goBack}
                leftButtonIcon={require('@/assets/office/icon-backs.png')}
                rightButtonTitle={rightButtonTitle} rightButtonTitleColor={'#fff'}
                onRightButtonPress={()=>next(props)} />
            <ScrollView style={styles.formViewContainer}
                automaticallyAdjustContentInsets={false}
                showsHorizontalScrollIndicator={true}
                ref='keyboardView'
                keyboardDismissMode='interactive'>
                {
                    // ContactListIitem.CONTACT_LIST_DETAIL_ITEMS.map(function (row) {
                    //     return <FormItem {...nextProps} row={row} />
                    // })
                }
            </ScrollView>
            <View>
                <Spinner visible={contactListBase.contactFollowTypeFetching} text={'加载中,请稍后...'} />
                <Spinner visible={contactListBase.contactDetailFetching} text={'提交中,请稍后...'} />
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


export default Detail;