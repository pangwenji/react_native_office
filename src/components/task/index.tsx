import { Colors } from '@/utils/colors';
import React, { useState } from 'react';
import { TextInput, View, StyleSheet, Platform, TouchableOpacity, Text, Image, Modal } from 'react-native';
import NavigationBar from '../navigationbar';
import Spinner from '../spinner';
import { Picker } from '@react-native-picker/picker';
import { FlatList } from 'react-native-gesture-handler';
import PostCell from '../postcell_todo';
import TaskDetail from './components/taskdetail';
import LoadMoreFooter from '@/pages/loadmore';
import { ViewWidth,ViewHeight } from '@/utils/index';

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

const renderSelect = (setShowModel:Function) => {
	if (Platform.OS == 'ios') {
		return (
			<View>
				<TouchableOpacity onPress={() => setShowModel(true)} style={{ alignItems: 'center', marginTop: 10 }}>
					<Text style={{ textAlign: 'center' }}>
						{/* {this.state.selectedValue} */}
					</Text>
				</TouchableOpacity>
			</View>)
	} else {
		return (renderPick())
	}
}

const onPress = (post:any,props:any) => { 
	const {navigator, route} = props;
    let type = (route.navBarTitle == '待办') ? 'approval' : 'detail';
      navigator.push({
        name: "TaskDetail",
        component: TaskDetail,
        processInstanceId: post.processInstanceId,
        taskId: post.taskId,
        processNo: post.processNo,
        processTitle: post.processTitle,
        type: type,
    });
}

const _renderItem = (props:any) => {
	const {route,post} = props;
    return (<PostCell post={post} type={route.navBarTitle} onSelect={async () => onPress(post, props)}/>);
 }

const onScroll = () => {
	// if (!onEndReach)
	// onEndReach = true;
 }

const onEndReach = () => {
	// const {dispatch, route, login, taskList} = this.props;
    // if (canLoadMore && onEndReach) {
    //   if(taskList.taskListHasMore)
    //     page ++;
    //   dispatch(fetchTaskList(route.url + 'userId=', login.rawData.userId, this.state.searchId, this.state.searchTitle, '', page));
    //   canLoadMore = false;
    // }
 }

const renderFooter = (props:any) => { 
	const {taskList} = props;
    return	taskList.taskListFetchingMore ? <LoadMoreFooter /> : null;
}

const renderListView = (props:any) => {
	const {taskList} = props;
    if(taskList.taskListData.length <= 0) {
      return (
        <View style={ styles.imagecontainer}>
          <Image source={require('@/assets/img/icon/app_panel_expression_icon.png')} style={{width: 120, height: 120,}}/>
          <Text style={ styles.imageTitle}>当前没有对应数据～</Text>
        </View>
      )
    } else {
       return (
        <FlatList
			data={taskList.taskListData}
			renderItem={_renderItem}
			onScroll={onScroll}
			onEndReached={onEndReach}
			onEndReachedThreshold={10}
			ListFooterComponent={renderFooter}
			style={styles.postsListView}/>
      )
    }
}

const renderModel = (showModel:boolean,setShowModel:Function) => {
	return(
		<Modal visible={showModel} transparent = {true}>
		  <View style={{backgroundColor:'rgba(0, 0, 0, 0.5)', height:ViewHeight, width: ViewWidth,}}>
			<View style={styles.modelStyle}>
			  <View style={styles.calendarContainer}>
				<Text style={styles.textStyle}>请选择类型</Text>
				<View style={{flex:1, justifyContent: 'center',}}>
				{renderPick()}
				</View>
				<View style={styles.calendar}>
					<TouchableOpacity style={styles.button} onPress={()=>setShowModel(false)} >
						<Text style={styles.buttonText}>取 消</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.button} onPress={()=>setShowModel(false)}>
						<Text style={styles.buttonText}>确 定</Text>
					</TouchableOpacity>
				</View>
			  </View>
			</View>
		  </View>
		</Modal>
	  )
 }

const Task: React.FC = (props: any) => {
	let [searchTitle, setSerarchTitle] = useState('');
	let [showModel,setShowModel] = useState(false)
	let { title,taskList} = props;
	return (
		<View style={styles.container}>
			<NavigationBar
				title={title}
				titleColor={Colors.WHITE}
				backgroundColor={Colors.ORANGE}
				onLeftButtonPress={goBack}
				leftButtonIcon={require('@/aasets/office/icon-backs.png')}
				rightButtonTitle={'搜索'}
				rightButtonTitleColor={'#fff'}
				onRightButtonPress={()=>onSearch(props)}
			/>
			<View style={styles.searchContainer}>
				<View style={styles.searchInputContainer}>
					<View style={styles.pickerContainer}>
						{renderSelect(setShowModel)}
					</View>
					<View style={styles.textInputContainer}>
						<TextInput
							style={styles.textInput}
							placeholder='请输入标题关键字搜索...'
							onChangeText={(searchTitle) => setSerarchTitle(searchTitle)}
							returnKeyType={'search'} />
					</View>
				</View>
			</View>
			{renderListView(props)}
			<View>
				<Spinner visible={taskList.taskListFetching} text={'加载中,请稍后...'} />
			</View>
			{renderModel(showModel,setShowModel)}
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
		backgroundColor: Colors.LIGHT_GREY,
	},
	textInputContainer: {
		flex: 4,
		height: 35,
		margin: 5,
		elevation: 2,
		borderRadius: 2,
		backgroundColor: Colors.WHITE,
		borderColor: Colors.LIGHT_GREY,
		borderWidth: 1,
	},
	textInput: {
		flex: 1,
		fontSize: 14,
		backgroundColor: Colors.WHITE,
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
		backgroundColor: Colors.WHITE,
		borderColor: Colors.LIGHT_GREY,
	},
	modelStyle: {
		flexDirection: 'column',
		position: 'absolute',
		backgroundColor: '#fdfcf5',
		opacity: 0.98,
		borderRadius: 10,
		overflow: 'hidden',
		marginLeft: ViewHeight / 8,
		width: ViewWidth - ViewWidth / 4,
		height: ViewHeight - ViewHeight / 3,
		marginTop: ViewHeight / 8,
	},
	picker: {
		flex: 1,
	},
	postsListView: {
		backgroundColor: Colors. GRAY_GAY,
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
	imagecontainer: {
		height: ViewHeight - 250,
		alignItems: 'center',
		justifyContent: 'center'
	},
	imageTitle: {
		textAlign: 'center',
		fontSize: 15,
		color: Colors.GREY,
	}
});

export default Task;