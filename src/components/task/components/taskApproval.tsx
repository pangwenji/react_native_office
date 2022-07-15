import Calendars from '@/components/calender';
import DatePicker from '@/components/datepicker';
import NavigationBar from '@/components/navigationbar';
import Spinner from '@/components/spinner';
import { Colors } from '@/utils/colors';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import ActionButton  from 'react-native-action-button';
const commit = () => { 
	
}

const TaskApproval: React.FC = (props) => { 
  const {taskApproval} = props;
    return (
      <View style={styles.container}>
      <NavigationBar
        title='审批' titleColor={Colors.white}
        backgroundColor={Colors.mainColor} onLeftButtonPress={this.onLeftBack}
        leftButtonIcon={require('../img/office/icon-backs.png')}
        rightButtonTitle={'提交'} rightButtonTitleColor={'#fff'}
        onRightButtonPress={commit}/>
        <ScrollView style={styles.formViewContainer}
          ref='keyboardView'
          keyboardDismissMode='interactive'
          automaticallyAdjustContentInsets={false}
          contentInset={{bottom: taskApproval.keyboardSpace}}>
          <View>
            {formView}
            {tableView}
          </View>
			</ScrollView>
			{/* 日历 */}
        <Calendars />
        <DatePicker />
        <SelectItem ref={'selectItem'}/>
        <FilePicker ref={'filePicker'}/>
        <View>
          <Spinner visible={taskApproval.formFetching} text={'加载中,请稍后...'}/>
          <Spinner visible={taskApproval.buttonFetching} text={'加载中,请稍后...'}/>
          <Spinner visible={taskApproval.approvalCommitting} text={'提交中,请稍后...'}/>
          <Spinner visible={taskApproval.otherCommitting} text={'提交中,请稍后...'}/>
        </View>
        <ActionButton buttonColor={Colors.mainColor}>
				{
					taskApproval.buttonData.map((buttonData:any)=>{
						if(buttonData.name == 'completeTask')
						  return;
						return (
						  <ActionButton.Item buttonColor={buttonData.color} title={buttonData.label} buttonTextColor={Colors.white}
							titleBgColor={buttonData.color} onPress={this.onDealWith.bind(this, buttonData.type, buttonData.label)}>
							<Icon name="ios-create" style={styles.actionButtonIcon} />
						  </ActionButton.Item>
						);
					  });
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
	  backgroundColor: Colors.mainBackground
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
	  backgroundColor: Colors.mainColor,
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
  });
  
export default TaskApproval;