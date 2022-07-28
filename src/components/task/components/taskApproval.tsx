import Calendars from '@/components/calender';
import DatePicker from '@/components/datepicker';
import FilePicker from '@/components/filepicker';
import StaffList from '@/components/form/components/stafflist';
import FormItem from '@/components/form/fliter_items';
import NavigationBar from '@/components/navigationbar';
import ToastTip from '@/components/notification';
import Select from '@/components/select';
import Spinner from '@/components/spinner';
import Table from '@/components/table';
import { Colors } from '@/utils/colors';
import { NaigatorTypes } from '@/utils/naigator_types';
import React, { useEffect } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
const goBack = () => { 
	// const {navigator} = this.props;
    // navigator.pop();
}

const commit = (props:any) => { 
	const {taskApproval, route, dispatch, login} = props;
    let jsonData = taskApproval.approvalInputData;
    if(!jsonData || jsonData === '' || jsonData === '{}' || !taskApproval.formData) {
		< ToastTip message={'内容为空，无法提交!'} />
      return;
    }
    // if(!this.judgeAllMustItems())
    //   return;
    // dispatch(startHandleTimeConsuming());
    // dispatch(fetchCommitApproval(taskApproval.approvalInputData, taskApproval.tableData,
    //   login.rawData.userId, route.taskId));
}

const onUserInput = (userInputKey:any, userInputValue:any) => { 
	let inputItems:Array<string> = [];
	// dispatch(handleUserInput(userInputKey, userInputValue))
	// if (inputItems.indexOf(userInputKey) === -1) {
	//   inputItems.push(userInputKey);
	// }
}

const dealWith = (dealType:string, label:string,props:any) => { 
	const {navigator, route, dispatch} = props;
    //退回、转信息办
    if(dealType == '3' || dealType == '4') {
      Alert.alert('', `确认要 ${label}?`,[{text: '确定',onPress : ()=>{
        // dispatch(startHandleTimeConsuming());
        // dispatch(fetchOtherApproval(route.taskId, dealType));
      }}, {text: "取消"}],);
    //转办、协办
    } else if(dealType == '1' || dealType == '2') {
      navigator.push({
        name: "StaffList",
        component: StaffList,
        taskId: route.taskId,
        dealType: dealType,
        type: NaigatorTypes.STAFF_LIST_NORMAL,
      });
    }
}

const TaskApproval: React.FC = (props:any) => {
	const {taskApproval,navigator} = props;
	let isShowFrom: boolean = false;
	let isTable: boolean = false;
	useEffect(() => { 
		if (taskApproval.formFetched) { 
			// dispatch(stopHandleTimeConsuming());
			if (taskApproval.error) {
				<ToastTip message={taskApproval.error} />
			} else { 
				isShowFrom = true;
				isTable = true;
			}
		}
	},[taskApproval.formFetched])
    return (
      <View style={styles.container}>
      <NavigationBar
        title='审批' titleColor={Colors.WHITE}
        backgroundColor={Colors.ORANGE} onLeftButtonPress={goBack}
        leftButtonIcon={require('@/assets/office/icon-backs.png')}
        rightButtonTitle={'提交'} rightButtonTitleColor={'#fff'}
        onRightButtonPress={()=>commit(props)}/>
        <ScrollView style={styles.formViewContainer}
          ref='keyboardView'
          keyboardDismissMode='interactive'
          automaticallyAdjustContentInsets={false}
          contentInset={{bottom: taskApproval.keyboardSpace}}>
          <View>
			{
				isShowFrom ? taskApproval.formData.content.map((row:any,idx:number) => {
					return <FormItem
						key={idx}
						{...props}
						row={row}
						// refs={_refs}
						onUserInput={(userInputKey:any, userInputValue:any) => onUserInput(userInputKey,userInputValue)}
					   />
					  }):<View />
			}
			{
				isTable ? taskApproval.formData.listctrlVoList.map((rowData:any,index:number)=>{
							return (
							  <View key={index} style={{backgroundColor:'white',height:50,}}>
								<TouchableOpacity onPress={() => {
								  navigator.push({
									name: "ReadTable",
									component: Table,
									tableData: rowData,
								  });
								  }}>
								  <Text style={styles.row}>{rowData.code}</Text>
								</TouchableOpacity>
							  </View>
							);
						  }) : <View />
			}
          </View>
			</ScrollView>
			{/* 日历 */}
        <Calendars />
        <DatePicker />
        <Select />
        <FilePicker />
        <View>
          <Spinner visible={taskApproval.formFetching} text={'加载中,请稍后...'}/>
          <Spinner visible={taskApproval.buttonFetching} text={'加载中,请稍后...'}/>
          <Spinner visible={taskApproval.approvalCommitting} text={'提交中,请稍后...'}/>
          <Spinner visible={taskApproval.otherCommitting} text={'提交中,请稍后...'}/>
        </View>
        <ActionButton buttonColor={Colors.ORANGE}>
				{
					taskApproval.buttonData.map((buttonData:any,index:any)=>{
						if (buttonData.name == 'completeTask') { return; }
						return (
						  <ActionButton.Item key={index} buttonColor={buttonData.color} title={buttonData.label} 
						      textStyle={buttonData.color} onPress={()=>dealWith(buttonData.type, buttonData.label,props)}>
							<Icon name="ios-create" style={styles.actionButtonIcon} />
						  </ActionButton.Item>
						);
					  })
		        }
        </ActionButton>
      </View>
    );
}
const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  flexDirection: 'column',
	  height: 100,
	  backgroundColor: Colors.GRAY_GAY
	},
	formViewContainer: {
	  flex: 1,
	  flexDirection: 'column'
	},
	calendarContainer: {
	  flex: 1,
	  flexDirection: 'row',
	  justifyContent: 'center',
	  marginTop: 30
	},
	button: {
	  height: 34,
	  flexDirection: 'row',
	  backgroundColor: Colors.ORANGE,
	  justifyContent: 'center',
	  borderRadius: 8,
	  margin: 5,
	  marginLeft: 30,
	  marginRight: 30
	},
	buttonText: {
	  alignSelf: 'center',
	  fontSize: 18,
	  color: Colors.WHITE
	},
	actionButtonIcon: {
	  fontSize: 20,
	  height: 22,
	  color: 'white',
	},
	row: {
		alignSelf: 'center',
		marginTop: 20,
		marginBottom: 20,
		color: '#36a9e1',
		fontSize: 16
	}
  });
  
export default TaskApproval;