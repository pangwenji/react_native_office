import Line from '@/components/line';
import { Colors } from '@/utils/colors';
import React from 'react';
import {
	View,
	Text,
	TouchableOpacity, Image, StyleSheet
} from 'react-native';

const commonRenderLine = (type: string, text: string, top?: string, onClick?: Function, icon?: string, fontColor?: string, fontSize?: string) => {
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

const onChangePassword = () => { }

const onHelp = () => { }

const onLogout = () => { }

const callPhone = () => { }

const onUserInfo=()=>{}

const SettingsScreen: React.FC = (props) => {
	const { login, userInfo,top} = props;
	return (
		<View style={styles.background}>
			<View style={styles.containers}>
				<TouchableOpacity style={{ marginTop: top, }} onPress={onUserInfo}>
					<View style={styles.bgAvatar}>
						<Image style={styles.avatar} source={userInfo.avatarData ? userInfo.avatarData : require('../img/icon/icon-avatar.png')} />
						<Text style={styles.userInfo}>{login.rawData.nickName}</Text>
						<Image style={styles.nextIcon} source={require('../img/icon/icon-next.png')} />
					</View>
				</TouchableOpacity>
				{                      //type
					commonRenderLine('nextIcon', '修改密码', '20', onChangePassword, require('../img/icon/icon-locks.png'))
				}
				{
					commonRenderLine('nextIcon', '帮助', '', onHelp, require('../img/icon/icon-locks.png'))
				}
				{
					commonRenderLine('nextIcon', '版本信息', '', onHelp, require('../img/icon/icon-version.png'))
				}
				{
					commonRenderLine('text', '注销', '40', onLogout, require('../img/icon/icon-version.png'), '#ED4D4D', '16')
				}
			</View>
			<View style={styles.phone}>
				<Text style={styles.phoneText}>如有任何疑问，请拨打服务电话</Text>
				<TouchableOpacity onPress={() => callPhone()}>
					<View style={{ flexDirection: 'row', }}>
						<Text style={styles.phoneNumber}>15102113061</Text>
						<Image style={{ height: 34, width: 34, }} source={require('../img/icon/telephone.png')} />
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
});

export default SettingsScreen;