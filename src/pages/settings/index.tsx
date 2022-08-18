import WebViews from '@/components/webview';
import { Colors } from '@/utils/colors';
import { NetWork } from '@/utils/network';
import React, { useEffect } from 'react';
import {
	View,
	Text,
	TouchableOpacity, Image, StyleSheet, InteractionManager, Alert, Linking, Platform, TouchableHighlight
} from 'react-native';
import Login from '../login';
import store from '@/utils/storage';
import JPush from 'jpush-react-native';
import UserInfo from '../userinfo';
import ChangePassword from '../changepassword';
import ToastTip from '@/components/notification';
import { useSelector } from 'react-redux';
import { FlatList } from 'react-native-gesture-handler';
import { ViewWidth,ViewHeight} from '@/utils/index';

interface IProps {
	login: any,
	userInfo: any,
	top: any
}


const onChangePassword = (props: any) => {
	const { navigator } = props;
	navigator.push({
		name: "ChangePassword",
		component: ChangePassword,
	});
}

const changeWebviewUrl = (help: string) => { }

const onHelp = (props: any) => {
	const { navigator, dispatch } = props;
	dispatch(changeWebviewUrl(NetWork.ME_HELP));
	commonPage(props);
}

const goVersion = (props: any) => {
	const { navigator, dispatch } = props;
	// dispatch(changeWebviewUrl(ME_VERSION));
	commonPage(props);
}

const commonPage = (props: any) => {
	let { navigator } = props;
	navigator.push({
		name: "WebView",
		component: WebViews,
	});
}

const onLogout = (props: any) => {
	const { navigator, dispatch } = props;
	JPush.clearAllNotifications();
	InteractionManager.runAfterInteractions(() => {
		store.setValue('userName', { rowData: {} });
		store.setValue('gesture', { rowData: { gesture: '' } })
		// dispatch(changeLoginAuth({ username: '', password: '', rawData: undefined }));
		navigator.resetTo({
			component: Login,
			name: 'Login'
		});
	});
}

const callPhone = () => {
	Linking.openURL(Platform.OS !== 'android' ? 'telprompt:' : 'tel:' + '18521059559');
}

const onUserInfo = (props: any) => {
	const { navigator } = props;
	navigator.push({
		name: "UserInfo",
		component: UserInfo,
	});

}

const _onPress = () => { }

const _renderItem = ({ item }: any) => {
	console.log(item,'item')
	return (
		<View>
			{/* <TouchableHighlight style={styles.btn} onPress={() =>_onPress} >
				<View style={styles.btn}>
					<Image style={styles.image} source={icon} />
					<Text style={styles.btnContent}>{'修改密码'}</Text>
					<Image style={styles.nextIcon} source={require('@/assets/img/icon/icon-next.png')} />
				</View>
			</TouchableHighlight> */}
		</View>
	)
}
const itemData: Array<any> = [
	{ title: '修改密码', type: 'pasd' },
	{title:'帮助',type:'help'},
	{title:'版本信息',type:'veriosn'},
]
const SettingsScreen: React.FC<IProps> = (props) => {
	const { login, userInfo, top } = props;
	let result: { userInfo: { username: string } } | any = useSelector<any>(state => state.setings);
	let { username } = result;
	useEffect(() => {
		if (!username) {
			<ToastTip message={'个人信息获取失败!'} />
		}
	}, [])
	return (
		<View style={styles.background}>
			<View style={styles.containers}>
				<TouchableOpacity style={{ marginTop: top, }} onPress={() => onUserInfo(props)}>
					<View style={styles.bgAvatar}>
						<Image style={styles.avatar} source={require('@/assets/img/icon/icon-avatar.png')} />
						<Text style={styles.userInfo}>{username}</Text>
						<Image style={styles.nextIcon} source={require('@/assets/img/icon/icon-next.png')} />
					</View>
				</TouchableOpacity>
				<FlatList
					data={itemData}
					renderItem={_renderItem}
				/>
			</View>
			<View style={styles.phone}>
				<Text style={styles.phoneText}>如有任何疑问，请拨打服务电话</Text>
				<TouchableOpacity onPress={() => callPhone()}>
					<View style={{ flexDirection: 'row', }}>
						<Text style={styles.phoneNumber}>15102113061</Text>
						<Image style={{ height: 34, width: 34, }} source={require('@/assets/img/icon/telephone.png')} />
					</View>
				</TouchableOpacity>
				<Text style={styles.phoneText}>或者发送邮件至</Text>
				<Text style={styles.phoneNumber}>429718074@qq.com</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	background: {
		flex: 1,
		backgroundColor: Colors.GRAY_GAY,
	},
	containers: {
		flex: 3,
	},
	phoneText: {
		marginTop: 5,
		color: '#999',
		fontSize: 12,

	},
	phone: {
		flex: 1,
		alignItems: 'center',
	},
	bgAvatar: {
		flexDirection: 'row',
		height: 96,
		backgroundColor: '#FFFFFF',
		alignItems: 'center',
	},
	phoneNumber: {
		color: '#999',
		fontSize: 14,
		marginTop: 10,
	},
	avatar: {
		width: 80,
		height: 80,
		borderRadius: 40,
		marginLeft: 8,
		marginRight: 8,
	},
	userInfo: {
		flex: 1,
		marginLeft: 8,
	},
	nextIcon: {
		width: 8,
		height: 14,
		marginRight: 8,
	},
	btn: {
		marginTop: 1
	},
	btnContent: {
		marginLeft: 10,
		flex: 1,
		color: '#333',
		fontSize: 14
	},
	image: {
		marginLeft: 10,
		width: ViewWidth * 0.5,
		height: ViewHeight * 0.5,
		borderRadius:  4,
	},
});

export default SettingsScreen