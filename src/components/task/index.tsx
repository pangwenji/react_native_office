import { Colors } from '@/utils/colors';
import React, { useState } from 'react';
import { TextInput, View, StyleSheet, Platform, TouchableOpacity, Text } from 'react-native';
import NavigationBar from '../navigationbar';
import Spinner from '../spinner';
import { Picker } from '@react-native-picker/picker';

const goBack = () => {
	// const {navigator} = this.props;
	//   navigator.pop();
}

const onSearch = (props: any) => {
	const { dispatch, route, login } = props;
	const dismissKeyboard = require('dismissKeyboard');
	dismissKeyboard();
	// page = 1;
	// canLoadMore = false;
	// onEndReach = false;
	// dispatch(fetchTaskList(route.url + 'userId=', login.rawData.userId, this.state.searchId, this.state.searchTitle, '', page));
	// dispatch(startHandleTimeConsuming());
}

const renderPick = () => {
	return (<View></View>
		// const {taskList, login, route, dispatch} = this.props;
		// let searchArr = [];
		// let itemAll = {};
		// itemAll.id = '';
		// itemAll.name = '全部';
		// searchArr.push(itemAll);
		// Array.prototype.push.apply(searchArr, taskList.taskSearchList);
		// return(
		//   <Picker
		//     style={styles.picker}
		//     mode="dropdown"
		//     selectedValue={this.state.searchId}
		//     itemStyle={{backgroundColor:'#fdfcf5',}}
		//     onValueChange={(id) => {
		//       for (var i = 0; i < searchArr.length; i++) {
		//         if (searchArr[i].id == id) {
		//             this.setState({selectedValue: searchArr[i].name,});
		//         }
		//       }
		//       page = 1;
		//       canLoadMore = false;
		//       onEndReach = false;
		//       dispatch(fetchTaskList(route.url + 'userId=', login.rawData.userId, id, '', '', page));
		//       dispatch(startHandleTimeConsuming());
		//       this.setState({searchId: id, isSelect:true});
		//     }}>
		//     {searchArr.map(function(row) {
		//       return <Picker.Item label={row.name} value={row.id} />
		//     })}
		//   </Picker>
	)
}

const renderSelect = () => {
	let [showModel, setState] = useState(false);
	if (Platform.OS == 'ios') {
		return (
			<View>
				<TouchableOpacity onPress={() => setState(true)} style={{ alignItems: 'center', marginTop: 10 }}>
					<Text style={{ textAlign: 'center' }}>
						{/* {this.state.selectedValue} */}
					</Text>
				</TouchableOpacity>
			</View>)
	} else {
		return (renderPick())
	}
}

const renderListView = () => {

}

const renderModel = () => { }

const Task: React.FC = (props: any) => {
	return (
		<View style={styles.container}>
			<NavigationBar
				title={title}
				titleColor={Colors.WHITE}
				backgroundColor={Colors.ORANGE}
				onLeftButtonPress={goBack}
				leftButtonIcon={require('../img/office/icon-backs.png')}
				rightButtonTitle={'搜索'}
				rightButtonTitleColor={'#fff'}
				onRightButtonPress={onSearch(props)}
			/>
			<View style={styles.searchContainer}>
				<View style={styles.searchInputContainer}>
					<View style={styles.pickerContainer}>
						{renderSelect()}
					</View>
					<View style={styles.textInputContainer}>
						<TextInput
							style={styles.textInput}
							placeholder='请输入标题关键字搜索...'
							onChangeText={(searchTitle) => { this.setState({ searchTitle: searchTitle }); }}
							returnKeyType={'search'} />
					</View>
				</View>
			</View>
			{renderListView()}
			<View>
				<Spinner visible={taskList.taskListFetching} text={'加载中,请稍后...'} />
			</View>
			{renderModel()}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
	},
	searchContainer: {
		flexDirection: 'column',
	},
	searchInputContainer: {
		flexDirection: 'row',
		flex: 1,
		backgroundColor: Colors.lightgrey,
	},
	textInputContainer: {
		flex: 4,
		height: 35,
		margin: 5,
		elevation: 2,
		borderRadius: 2,
		backgroundColor: Colors.white,
		borderColor: Colors.lightgrey,
		borderWidth: 1,
	},
	textInput: {
		flex: 1,
		fontSize: 14,
		backgroundColor: Colors.white,
		height: 26,
		borderWidth: 0.5,
		borderColor: '#0f0f0f',
		padding: 4,
	},
	pickerContainer: {
		flex: 3,
		margin: 5,
		marginBottom: 7,
		height: 35,
		elevation: 2,
		borderRadius: 2,
		backgroundColor: Colors.white,
		borderColor: Colors.lightgrey,
	},
	modelStyle: {
		flexDirection: 'column',
		position: 'absolute',
		backgroundColor: '#fdfcf5',
		opacity: 0.98,
		borderRadius: 10,
		overflow: 'hidden',
		marginLeft: deviceWidth / 8,
		width: deviceWidth - deviceWidth / 4,
		height: deviceHeight - deviceHeight / 3,
		marginTop: deviceHeight / 8,
	},
	picker: {
		flex: 1,
	},
	postsListView: {
		backgroundColor: Colors.mainBackground,
	},
	textStyle: {
		marginTop: 5,
		fontSize: 20,
		fontWeight: '500',
		textAlign: 'center',
		color: '#ff8c00'
	},
	calendar: {
		height: 60,
		justifyContent: 'center',
		flexDirection: 'row',
	},
	button: {
		justifyContent: 'center',
		borderRadius: 8,
		marginBottom: 20,
		marginLeft: 20,
		marginRight: 20,
		width: 70,
		height: 35,
	},
	buttonText: {
		alignSelf: 'center',
		fontSize: 18,
		color: '#ff8c00'
	},
	calendarContainer: {
		flex: 1,
		justifyContent: 'center',
		marginTop: 30,
	},
});

export default Task;