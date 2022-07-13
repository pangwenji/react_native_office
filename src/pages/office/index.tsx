import GridItem from '@/components/griditem';
import OfficeList from '@/components/officelist';
import Task from '@/components/task';
import React from 'react';
import { NetWork } from '@/utils/network'
import {
	View,
	Text,
	Image,
	TouchableOpacity,
	ScrollView,
	StyleSheet,
	Alert,
	ImageBackground
} from 'react-native';
import { ViewWidth } from '@/utils/index';

const onCreated = (props: any) => {
	goToTask(NetWork.OFFICE_CREATED, '我的申请');
}

const onApproval = () => {
	goToTask(NetWork.OFFICE_IAPPROVALLIST, '已办任务');
}

const onProxy = () => {
	goToTask(NetWork.SEARCH_AGENT_URL, '代理任务');
}

const goToTask = (url: string, title: string) => {
	// const {navigator} = this.props;
	// navigator.push({
	//   name: "TaskListContainer",
	//   component: Task,
	//   url: url,
	//   navBarTitle: title,
	// });
}

const onClick = (templateOption: any) => {
	if (templateOption.id == 25) {
		Alert.alert('', '功能研发中，敬请期待！', [{ text: '确定', onPress: () => { } }]);
		return;
	}
	//   const {navigator} = props;
	//   navigator.push({
	//     name: 'officeTemplateList',
	//     templateOption: templateOption,
	//     component: OfficeList,
	//   });
}
interface IProp {
	tabOffice: any,
	top: any,
	children?: React.ReactNode
}
const OfficeScreen: React.FC<IProp> = (props: IProp) => {
	let { tabOffice, top } = props
	return (
		<View style={styles.background}>
			<View style={[styles.mainBack, { marginTop: top }]}>
				<ImageBackground style={styles.mainBack} source={require('../img/office/office_bg.jpg')} >
					<View style={styles.topBg}>
						{/* 待办 */}
						<TouchableOpacity onPress={onCreated}>
							<View style={styles.topItem}>
								<Image style={styles.itemIcon} source={require('../img/office/office_sq.png')} />
								<Text style={[styles.itemText, { color: '#FFFFFF' }, { backgroundColor: 'transparent' },]}>我的申请</Text>
							</View>
						</TouchableOpacity>
						{/* 同意 */}
						<TouchableOpacity onPress={onApproval}>
							<View style={styles.topItem} >
								<Image style={styles.itemIcon} source={require('../img/office/office_sp.png')} />
								<Text style={[styles.itemText, { color: '#FFFFFF' }, { backgroundColor: 'transparent' },]}>已办任务</Text>
							</View>
						</TouchableOpacity >
						{/* 代理 */}
						<TouchableOpacity onPress={onProxy}>
							<View style={styles.topItem} >
								<Image style={styles.itemIcon} source={require('../img/office/office_proxy.png')} />
								<Text style={[styles.itemText, { color: '#FFFFFF' }, { backgroundColor: 'transparent' },]}>代理任务</Text>
							</View>
						</TouchableOpacity >

					</View>
				</ImageBackground >
			</View>
			<ScrollView>
				<View style={styles.scrollBg}>
					{
						tabOffice.officeItemData.map((row: any) => {
							return <GridItem row={row} onClick={async () => onClick(row)} />
						})
					}
				</View>
			</ScrollView>
		</View>
	);
}

const ITEM_HEIGHT = ViewWidth / 3 - 11;
const ITEM_ICON = ITEM_HEIGHT * 0.6;
const styles = StyleSheet.create({
	background: {
		flex: 1,
		backgroundColor: '#EFEFF4',
	},
	mainBack: {
		height: 200,
		elevation: 5,
	},
	topBg: {
		flex: 1,
		width: ViewWidth,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
	},
	topItem: {
		width: ITEM_HEIGHT,
		height: ITEM_HEIGHT,
		alignItems: 'center',
		justifyContent: 'space-around',
	},
	itemIcon: {
		width: ITEM_ICON,
		height: ITEM_ICON,
	},
	itemText: {
	},
	scrollBg: {
		flexDirection: 'row',
		flexWrap: 'wrap',
	}
});


export default OfficeScreen;
