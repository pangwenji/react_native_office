import React from 'react';
import { Text, TouchableOpacity, View, Image, StyleSheet, Alert } from 'react-native';
import commonStyles from './commonstyle';

const onPress = (props: any) => {
	let { row, navigator } = props;
	if (row.readOnly) {
		if (row.content && row.content != '') {
			navigator.push({
				name: 'taskDetail',
				component: TaskDetail,
				type: 'link',
				linkedProcessNo: row.content,
			});
		}
	} else {
		Alert.alert('', '抱歉!现在移动端的关联单不提供输入.', [{ text: '确定', onPress: () => { } }])
	}
}

const Link: React.FC = (props: any) => {
	let { row } = props;
	return (
		<View style={styles.contentContainer}>
			<View style={commonStyles.titleContainer}>
				<Text style={commonStyles.title}>
					{row.title}
				</Text>
			</View>
			<View style={styles.contentContainer}>
				<TouchableOpacity style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }} onPress={onPress}>
					<Text numberOfLines={1} allowFontScaling={true} style={styles.content}>
						{row.content}
					</Text>
					<Image source={require('../../img/icon/link.png')} style={styles.pic} />
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	contentContainer: {
		flex: 1,
		marginLeft: 8,
		marginTop: 8,
		marginBottom: 8,
		marginRight: 10,
		borderRadius: 5,
	},
	content: {
		textAlign: 'center',
		fontSize: 16,
		color: 'gray',
		flex: 1,
	},
	pic: {
		alignSelf: 'flex-end',
		height: 32,
		width: 32,
	},
})

export default Link;