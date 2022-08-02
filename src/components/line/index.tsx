import { ViewHeight, ViewWidth } from '@/utils/index';
import React from 'react';
import { Image, StyleSheet, Text, Touchable, TouchableHighlight, View } from 'react-native';


interface IProps {
	top?: string,
	type: string,
	text: string,//
	fontColor?: string,
	fontSize?: string,
	onClick: () => {} //
	iconRadius?: number,
	icon?: string,
	bg?: string
}

const commonTouchable = (props: IProps, type: string) => {
	let { bg, fontColor, text, iconRadius, icon, onClick, top } = props;
	return (
		<TouchableHighlight style={{ marginTop: top ? top : 1 }} onPress={() => onClick()} >
			<View style={
				{
					height: ViewHeight / 14,
					backgroundColor: bg ? bg : '#ffffff',
					flexDirection: 'row',
					alignItems: 'center',
				}}>
				{type === 'nextIcon' ? <Image style={{ marginLeft: 10, width: (ViewHeight / 14) * 0.5, height: (ViewHeight / 14) * 0.5, borderRadius: iconRadius ? iconRadius : 4 }} source={icon} /> : <View />}
				<Text style={{ marginLeft: 10, flex: 1, color: fontColor ? fontColor : '#333', }}>{text}</Text>
				<Image style={styles.nextIcon} source={require('@/assets/img/icon/icon-next.png')} />
			</View>
		</TouchableHighlight>
	)
}

const Line: React.FC<IProps> = (props: IProps) => {
	console.log(props, 'props')
	// let { type } = props;
	// switch (type) {
	// 	case 'nextIcon':
	// 		commonTouchable(props, 'nextIcon')
	// 		break;
	// 	case 'next':
	// 		commonTouchable(props, 'next')
	// 		break;
	// 	case 'text':
	// 		commonTouchable(props, 'text')
	// 		break;
	// }
	return (
		<View>
			<View>
				<TouchableHighlight style={styles.btn} onPress={() => this.props.onClick()} >
					<View style={styles.btn}>
						<Image style={styles.image} source={icon} />
						<Text style={styles.btnContent}>{'修改密码'}</Text>
						<Image style={styles.nextIcon} source={require('../img/icon/icon-next.png')} />
					</View>
				</TouchableHighlight>
			</View>
			<View>
				<TouchableHighlight style={styles.btn} onPress={() => this.props.onClick()}>
					<View style={styles.btn}>
						<Text style={styles.btnContent}>{'帮助'}</Text>
						<Image style={styles.nextIcon} source={require('../img/icon/icon-next.png')} />
					</View>
				</TouchableHighlight>
			</View>
			<View>
				<TouchableHighlight style={styles.btn} onPress={() => this.props.onClick()}>
					<View style={styles.btn}>
						<Text style={[styles.btnContent, { textAlign: 'center' }]}>{this.props.text}</Text>
					</View>
				</TouchableHighlight>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	nextIcon: {
		width: 8,
		height: 14,
		marginRight: 10,
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
	text: {

	}
});
export default Line;