import NavigationBar from '@/components/navigationbar';
import Spinner from '@/components/spinner';
import { Colors } from '@/utils/colors';
import { ContactType } from '@/utils/contact_type';
import React from 'react';
import { Alert, ScrollView, StyleSheet, View } from 'react-native';
import CONTACT_LIST_REPORT_ITEMS from '@/utils/contacts_list_item';
import CONTACT_LIST_FOLLOW_ITEMS from '@/utils/contacts_list_item';

import { NetWork } from '@/utils/network';
import FormItem from '@/components/form/fliter_items';

const goBack = () => {
	// const {navigator} = this.props;
	// navigator.pop();
}

const checkData = (items: Array<{ name: string, title: string, required: string }>, data: any) => {
	let json = eval('(' + data + ')');
	for (let item of items) {
		if (item.required) {
			if (!json[item.name] || json[item.name] == '') {
				Alert.alert('', `${item.title} 为必填项,请填写后再提交!`, [{ text: '确定' },]);
				return false;
			}
		}
	}
	return true;
}


const next = () => {
	const { route, contactListBase } = this.props;
	let url, data, items, type = route.peopleType;
	if (type === ContactType.CONTACT_PERSON_TYPE_CHARGE) {
		setArguments(NetWork.CONTACT_REPORT_URL, CONTACT_LIST_REPORT_ITEMS, contactListBase.contactListReportInputData)
	} else if (type === ContactType.CONTACT_PERSON_TYPE_FOLLOW) {
		setArguments(NetWork.CONTACT_FOLLOW_URL, CONTACT_LIST_FOLLOW_ITEMS, contactListBase.contactListFollowInputData)
	}
}

const setArguments = (url: string, items: any, data: any) => {
	// let url, data, items, type = route.peopleType;
	url = url;
	items = items;
	data = data;
	// if(checkData(items, data)){
	//   const {dispatch, contactListBase} = this.props;
	//   dispatch(fetchContacApprove(url, data));
	//   dispatch(startHandleTimeConsuming());
	// }
}

const Approve: React.FC = (props: any) => {
	const { contactListBase, route } = props;
	let rightButtonTitle;
	let type = route.peopleType;
	if (type === ContactType.CONTACT_PERSON_TYPE_CHARGE) {
		rightButtonTitle = '汇报';
	} else if (type === ContactType.CONTACT_PERSON_TYPE_FOLLOW) {
		rightButtonTitle = '跟进';
	}
	return (
		<View style={styles.container}>
			<NavigationBar title={rightButtonTitle} titleColor={Colors.WHITE}
				backgroundColor={Colors.mainColor} onLeftButtonPress={goBack}
				leftButtonIcon={require('@/assets/office/icon-backs.png')}
				rightButtonTitle='提交' rightButtonTitleColor={'#fff'}
				onRightButtonPress={next} />
			<ScrollView style={styles.formViewContainer}
				automaticallyAdjustContentInsets={false}
				showsHorizontalScrollIndicator={true}
				ref='keyboardView'
				keyboardDismissMode='interactive'>
				{

					CONTACT_LIST_FOLLOW_ITEMS.map((row: any) => {
						return <FormItem {...nextProps} row={row} onUserInput={(userInputKey, userInputValue) => {
							if (userInputKey === "taskStatus") {
								let newUserInputValue = {};
								for (let item of contactListBase.contactFollowTypeData) {
									if (item.name === userInputValue) {
										newUserInputValue.id = item.id;
										break;
									}
								}
								//   dispatch(handleUserInput(userInputKey, newUserInputValue, common.CONTACT_INUPT_TYPE_FOLLOW));
								//   dispatch(handleUserInput('id', route.contactListId, common.CONTACT_INUPT_TYPE_FOLLOW));
							} else if (userInputKey === "status") {
								let newUserInputValue = {};
								for (let item of contactListBase.contactStatusTypeData) {
									if (item.name === userInputValue) {
										newUserInputValue.id = item.id;
										break;
									}
								}
								//  dispatch(handleUserInput(userInputKey, newUserInputValue, common.CONTACT_INUPT_TYPE_FOLLOW));
							} else {
								//  dispatch(handleUserInput(userInputKey, userInputValue, common.CONTACT_INUPT_TYPE_FOLLOW));
							}
						}} />
					})
				}
			</ScrollView>
			<View>
				<Spinner visible={contactListBase.contactFollowTypeFetching} text={'加载中,请稍后...'} />
				<Spinner visible={contactListBase.contactApproveCommitting} text={'提交中,请稍后...'} />
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
		flexDirection: 'column',
	},
});

export default Approve;