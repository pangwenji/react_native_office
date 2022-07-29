import Attachment from '@/components/attachment';
import NavigationBar from '@/components/navigationbar';
import Spinner from '@/components/spinner';
import Table from '@/components/table';
import { Colors } from '@/utils/colors';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import TaskApproval from './taskApproval';

const onPress = (props: any) => {
	const { navigator, route } = props;
	// navigator.push({
	// 	name: "TaskApproval",
	// 	component: TaskApproval,
	// 	taskId: route.taskId,
	// 	processInstanceId: route.processInstanceId,
	// });
}

const renderFAB = (props: any) => {
	const { route } = props;
	if (route.type === 'approval') {
		return (
			<TouchableOpacity style={styles.btnStyle}
				onPress={onPress}
				onLongPress={() => console.log('长按隐藏图标,未处理')}>
				<Image
					style={{ width: 32, height: 32 }}
					source={require('@/assets/img/icon/icon-fb-edit.png')} />
			</TouchableOpacity>
		);
	} else {
		return (<View />);
	}
}

const renderHistoricView = (props: any) => {
	const { taskDetail } = props;
	return taskDetail.historicTasks.map((rowData: any) => {
		if (rowData.deleteReason === '跳过')
			return;
		return (
			<View style={{ flexDirection: 'row', }}>
				<View style={{ position: 'absolute', flex: 1, width: 1, height: 1000, marginLeft: 27, backgroundColor: '#ccc', }} />
				<View style={{ width: 56, alignItems: 'center', elevation: 2 }}>
					<Image style={{ marginTop: 8, width: 48, height: 48, borderRadius: 24, borderWidth: 2, borderColor: '#fff', }} source={require('@/assets/img/icon/icon-avatar.png')} />
				</View>
				<View style={{ marginTop: 14, elevation: 2 }}>
					<Image source={require('@/assets/img/icon/icon-arrow.png')} style={{ width: 5, height: 10, }} />
				</View>
				<View style={{ flex: 1, marginTop: 8, marginBottom: 8, marginRight: 8, padding: 8, backgroundColor: '#fff', borderRadius: 2, elevation: 2 }}>
					<View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
						<View style={{ flexDirection: 'row', alignItems: 'center', }}>
							<Text style={{ color: '#333', fontSize: 15, }}>{rowData.assignee}</Text>
						</View>
						<Text style={{ fontSize: 15, marginTop: 2, color: '#999', }}>{rowData.endTime}</Text>
					</View>
					<View style={{ marginTop: 4, }}>
						<Text style={{ fontSize: 12, marginRight: 8 }}>{rowData.approvalRemark}</Text>
						<Text style={{ fontSize: 13, color: '#444', alignSelf: 'flex-end' }}>{rowData.approvalComments}</Text>
					</View>
				</View>
			</View>
		);
	});
}

const commonRenderText = (title: string) => {
	return <Text style={{ color: '#999', fontSize: 14 }}>单号:{title}</Text>
}

const processNo = (props: any) => {
	let { route } = props;
	return route.type === 'link' ? commonRenderText(route.linkedProcessNo) : commonRenderText(route.processNo)
}

const goBack = () => {
	// const {navigator} = this.props;
	// navigator.pop();
}

const renderTableView = (props: any) => {
	const { taskDetail, navigator } = props;
	return taskDetail.tableList.map((rowData: any) => {
		return (
			<TouchableOpacity onPress={() => {
				navigator.push({
					name: "Table",
					component: Table,
					tableData: rowData,
				});
			}}>
				<Text style={styles.tabText}>{rowData.code}&gt&gt</Text>
			</TouchableOpacity>
		);
	});
}

const renderTaskView = (props: any) => {
	const { taskDetail, route, navigator } = props;
	return taskDetail.content.map((rowData: any) => {
		rowData.hide ? <View /> : null
		if (rowData.type === 'text' && rowData.detailType === 'file') {
			//屏蔽模板下载 仅web端需要
			if (rowData.title === ' ')
				return;
			return (<Attachment {...props} row={rowData} processInstanceId={route.processInstanceId}/>);
		} else if (rowData.type === 'text' && rowData.detailType === 'linked_process_no') {
			return (
				<View style={{ flexDirection: 'row' }}>
					<Text style={styles.link}>{rowData.title}:</Text>
					<TouchableOpacity onPress={() => {
						// navigator.push({
						// 	name: "TaskDetail",
						// 	component: TaskDetail,
						// 	type: 'link',
						// 	linkedProcessNo: rowData.content,
						// 	processNo: route.processNo,
						// 	processTitle: route.processTitle,
						// });
					}}>
						<Text style={styles.text1 }>{rowData.content}</Text>
					</TouchableOpacity>
				</View>);
		} else {
			return (
				<View style={{ flexDirection: 'row' }}>
					<Text style={ styles.rowTitle}>{rowData.title}:</Text>
					<Text style={ styles.rowContent} >{rowData.content}</Text>
				</View>
			);
		}
	});
}

const TaskDetail: React.FC = (props: any) => {
	const { taskDetail, route } = props;
	return (
		<View style={styles.container}>
			<NavigationBar
				title={'任务详情'} titleColor={Colors.WHITE}
				backgroundColor={Colors.ORANGE} onLeftButtonPress={goBack}
				leftButtonIcon={require('@/assets/office/icon-backs.png')} onRightButtonPress={() => { }} />

			<ScrollView style={{ backgroundColor: '#EFEFEF', }}>
				<View style={styles.Scrollview}>
					{processNo(props)}
					<Text style={styles.name}>{taskDetail.name}</Text>
					<View>
						{renderTaskView(props)}
					</View>
					{renderTableView(props)}
				</View>
				{renderHistoricView(props)}
				<View style={styles.box}>
					<View style={styles.boxView} />
					<Text style={styles.applcation}>发起申请</Text>
				</View>
			</ScrollView>
			{renderFAB(props)}
			<View>
				<Spinner visible={taskDetail.taskDetailFetching} text={'加载中,请稍后...'} />
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column'
	},
	postsListView: {
		backgroundColor: Colors.GRAY_GAY,
	},
	tableCell: {
		height: 48,
		width: 96,
		borderWidth: 1,
		borderColor: '#ccc',
		justifyContent: 'center',
		alignItems: 'center',
	},
	btnStyle: {
		width: 56,
		height: 56,
		borderRadius: 28,
		backgroundColor: Colors.ORANGE,
		position: 'absolute',
		bottom: 10,
		right: 10,
		elevation: 4,
		justifyContent: 'center',
		alignItems: 'center'
	},
	tabText: {
		alignSelf: 'center',
		marginTop: 8,
		marginBottom: 8,
		color: '#36a9e1',
		ontSize: 16,
	},
	link: {
		marginLeft: 8,
		marginRight: 4,
		marginTop: 5,
		textAlign: 'right',
		color: '#333',
		fontSize: 15,
	},
	text1: {
		marginLeft: 4,
		color: '#317ef3',
		marginRight: 8,
		fontSize: 15,
		marginTop: 5,
		flex: 1,
	},
	rowTitle: {
		marginLeft: 8,
		marginRight: 4,
		marginTop: 5,
		textAlign: 'right',
		color: '#333',
		fontSize: 15,
	},
	rowContent: {
		marginLeft: 4,
		color: '#999', 
		marginRight: 8,
		fontSize: 15,
		marginTop: 5,
		flex: 1, 
	},
	Scrollview: {
		backgroundColor: 'white',
		margin: 8,
		borderRadius: 2,
		elevation: 3,
		padding: 8 
	},
	name: {
		color: '#111',
		margin: 8,
		marginTop: 16, 
		fontSize: 20,
		textAlign: 'center',
	},
	box: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 8,
	},
	boxView: {
		width: 10,
		height: 10,
		borderRadius: 5,
		borderWidth: 2,
		borderColor: Colors.GRAY_GAY,
		backgroundColor: '#ccc',
		marginLeft: 22, 
	},
	applcation: {
		marginLeft: 8,
		color: '#333',
		fontSize: 15,
	}
});

export default TaskDetail;