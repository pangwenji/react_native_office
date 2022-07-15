import React, { useState } from 'react';
import {  StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import Modal from 'react-native-modal/dist/modal';
import DatePickerIOS from '@react-native-community/datetimepicker';
import { ViewHeight } from '@/utils/index';

const cancel = () => { 
	let [date, setDate] = useState(new Date());
	let [isShow,setIsVisible] = useState(false);
	setDate(new Date());
	setIsVisible(false);
}

const DatePicker: React.FC = () => { 
	let [date, setDate] = useState(new Date());
	let [isShow,setIsVisible] = useState(false);
  return(
    <Modal
	  ref={'modal'}
	  isVisible={isShow}
	  animationInTiming={ 10}
	  animationIn={'bounceInUp'}
		  style={{ borderRadius: 10 }}
	  >
      <View style={styles.container}>
        <View style={styles.calendarContainer}>
          <Text style={styles.textStyle}>请选择日期</Text>
				  <DatePickerIOS
					  value={}
					  style={styles.datePicker}
					  date={date}
					  mode={'date'}
					  onChange={(date)=>setDate}
        />
        </View>
        <View style={styles.calendar}>
        <TouchableHighlight style={styles.button} onPress={cancel} underlayColor={'#ffffff'}>
            <Text style={styles.buttonText}>取 消</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button} onPress={()=>setIsVisible(false)} underlayColor={'#ffffff'}>
            <Text style={styles.buttonText}>确 定</Text>
        </TouchableHighlight>
        </View>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  flexDirection: 'column',
	  justifyContent: 'center',
	},
	calendarContainer: {
	  flex: 1,
	  justifyContent: 'flex-start',
	  marginTop:ViewHeight < 500?20:ViewHeight/8.5,
	},
	calendar: {
	  height:60,
	  justifyContent: 'center',
	  flexDirection:'row',
	  marginTop:20,
	},
	datePicker:{
	  flex:1,
	  marginTop:10,
	  justifyContent: 'center',
	},
	button: {
	  // backgroundColor: Colors.white,
	  justifyContent: 'center',
	  borderRadius: 8,
	  marginBottom: 20,
	  marginLeft: 20,
	  marginRight: 20,
	  // borderWidth: 1,
	  flex:1,
	},
	buttonText: {
	  alignSelf: 'center',
	  fontSize: 18,
	  color:'#ff8c00',
	  // color: Colors.mainColor
	},
	textStyle:{
	  fontSize:20,
	  fontWeight:'500',
	  textAlign: 'center',
	  color:'#ff8c00'
	}
  });
  
export default DatePicker;