import Line from '@/components/line';
import WebViews from '@/components/webview';
import { Colors } from '@/utils/colors';
import { NetWork } from '@/utils/network';
import React, { useEffect } from 'react';
import {
	View,
	Text,
	TouchableOpacity, Image, StyleSheet, InteractionManager, Alert, Linking, Platform
} from 'react-native';
import Login from '../login';
import store from '@/utils/storage';
import JPush from 'jpush-react-native';
import UserInfo from '../userinfo';
import ChangePassword from '../changepassword';
import ToastTip from '@/components/notification';

interface IProps {
	login: any,
	userInfo: any,
	top: any
}

const commonRenderLine = (
	type: string,
	text: string,
	top?: string,
	onClick?: Function,
	icon?: string,
	fontColor?: string,
	fontSize?: string) => {
	return (
		<Line
			type={type}
			top={top}
			text={text}
			onClick={async () => onClick}
			icon={icon}
			fontColor={fontColor}
			fontSize={fontSize}
		/>
	)
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

const SettingsScreen: React.FC<IProps> = (props) => {
	const { login, userInfo, top } = props;
	useEffect(() => {
		if (userInfo.avatarGot && !userInfo.avatarData) {
			<ToastTip message={'????????????????????????!'} />
		}
	}, [])
	return (
		<View style={styles.background}>
			<View style={styles.containers}>
				<TouchableOpacity style={{ marginTop: top, }} onPress={() => onUserInfo(props)}>
					<View style={styles.bgAvatar}>
						<Image style={styles.avatar} source={userInfo.avatarData ? userInfo.avatarData : require('../img/icon/icon-avatar.png')} />
						<Text style={styles.userInfo}>{login.rawData.nickName}</Text>
						<Image style={styles.nextIcon} source={require('@/assets/img/icon/icon-next.png')} />
					</View>
				</TouchableOpacity>
				{                      //type
					commonRenderLine('nextIcon', '????????????', '20', onChangePassword, require('@/assets/img/icon/icon-locks.png'))
				}
				{
					commonRenderLine('nextIcon', '??????', '', onHelp, require('@/assets/img/icon/icon-locks.png'))
				}
				{
					commonRenderLine('nextIcon', '????????????', '', goVersion, require('@/assets/img/icon/icon-version.png'))
				}
				{
					commonRenderLine('text', '??????', '40', onLogout, require('@/assets/img/icon/icon-version.png'), '#ED4D4D', '16')
				}
			</View>
			<View style={styles.phone}>
				<Text style={styles.phoneText}>??????????????????????????????????????????</Text>
				<TouchableOpacity onPress={() => callPhone()}>
					<View style={{ flexDirection: 'row', }}>
						<Text style={styles.phoneNumber}>15102113061</Text>
						<Image style={{ height: 34, width: 34, }} source={require('@/assets/img/icon/telephone.png')} />
					</View>
				</TouchableOpacity>
				<Text style={styles.phoneText}>?????????????????????</Text>
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
});

export default SettingsScreen