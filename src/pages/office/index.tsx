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
import { useSelector } from 'react-redux';

const onCreated = (props: any) => {
	goToTask(NetWork.OFFICE_CREATED, '我的申请', props);
}

const onApproval = (props: any) => {
	goToTask(NetWork.OFFICE_IAPPROVALLIST, '已办任务', props);
}

const onProxy = (props: any) => {
	goToTask(NetWork.SEARCH_AGENT_URL, '代理任务', props);
}

const goToTask = (url: string, title: string, props: any) => {
	const { navigator } = props;
	navigator.push({
		name: "Task",
		component: Task,
		url: url,
		navBarTitle: title,
	});
}

const onClick = (templateOption: any, props: any) => {
	if (templateOption.id == 25) {
		Alert.alert('', '功能研发中，敬请期待！', [{ text: '确定', onPress: () => { } }]);
		return;
	}
	const { navigator } = props;
	navigator.push({
		name: 'OfficeList',
		templateOption: templateOption,
		component: OfficeList,
	});
}

const commonRender = (title: string, fn: Function) => {
	let imageUrl;
	switch (title) {
		case '我的申请':
			imageUrl = require('@/assets/office/office_sq.png');
			break;
		case '已办任务':
			imageUrl = require('@/assets/office/office_sp.png');
			break;
		case '代理任务':
			imageUrl = require('@/assets/office/office_proxy.png');
			break;
	}
	return (
		<TouchableOpacity onPress={() => fn}>
			<View style={styles.topItem}>
				<Image style={styles.itemIcon} source={imageUrl} />
				<Text style={[styles.itemText, { color: '#FFFFFF' }, { backgroundColor: 'transparent' },]}>{title}</Text>
			</View>
		</TouchableOpacity>
	)
}

interface IProp {
	tabOffice: any,
	top: any,
	children?: React.ReactNode
}
const OfficeScreen: React.FC<IProp> = (props: IProp) => {
	let { tabOffice, top } = props;
	let result: { images: Array<{url:string,title:string}> } | any= useSelector<any>(state => state.office);
	let {images } = result;
	
	return (
		<View style={styles.background}>
			<View style={[styles.mainBack, { marginTop: top }]}>
				<ImageBackground style={styles.mainBack} source={require('@/assets/office/office_bg.jpg')} >
					<View style={styles.topBg}>
						{/* 待办 */}
						{commonRender('我的申请', onCreated)}
						{/* 同意 */}
						{commonRender('已办任务',  onApproval)}
						{/* 代理 */}
						{commonRender('代理任务', onProxy)}

					</View>
				</ImageBackground >
			</View>
			<ScrollView>
				<View style={styles.scrollBg}>
					{
					images.map((data: any,index:number) => {
							return <GridItem {...data}  key={index} onClick={async () => onClick(data,props)} />
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
