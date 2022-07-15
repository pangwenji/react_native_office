import React, { useState } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import Modal from 'react-native-modal/dist/modal';

const commonRenderMoal = (isPicker: boolean, isTouchable: boolean, isText: boolean) => { 
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
					{/* {
					  isPicker ? (<Picker
						style = {formComponentStyles.pickerStyle}
						selectedValue={this.state.sValue}
						onValueChange={(data) => {this.handleChange(data)}}
						mode={'dropdown'}>
						{items.map((data)=>{return (
						  <Picker.Item label={data} value={data}
						/>);})}
						</Picker>) :null
					}  */}
					{
						isText ? (
							<Text numberOfLines = {0} style={styles.textStyle} >未发现附件,请把文件放置于该APP的Documents/Inbox文件夹下!</Text>
					  ) :null
					}
			</View>
			<View style={styles.calendar}>
					{
						isText ? (
						  <TouchableHighlight style={styles.button} onPress={this.passSelectDate.bind(this)} underlayColor={'#ffffff'}>
				           <Text style={styles.buttonText}>确 定</Text>
					      </TouchableHighlight>
					  ):null
					} 
			<TouchableHighlight style={styles.button} onPress={this.cancel.bind(this)} underlayColor={'#ffffff'}>
				<Text style={styles.buttonText}>取 消</Text>
			</TouchableHighlight>
			</View>
		  </View>
		</Modal>
	  );
}

const FilePicker: React.FC = () => { 
  var items = fileArr;
  return items.length ? commonRenderMoal(true,true,false) : commonRenderMoal(false,false,true)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  calendarContainer: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 30,
    // marginBottom: 10,
  },
  calendar: {
    height:60,
    justifyContent: 'center',
    flexDirection:'row',
    marginTop:30
  },
  button: {
    // backgroundColor: Colors.white,
    justifyContent: 'center',
    borderRadius: 8,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    // borderColor: Colors.mainColor,
    borderWidth: 1,
    flex:1,
  },
  buttonText: {
    alignSelf: 'center',
    fontSize: 18,
    // color: Colors.mainColor
  },
  textStyle:{
    marginLeft:10,
    marginRight:10,
    fontSize:16,
    fontWeight:'500',
    textAlign: 'center',
    color:'#ff8c00',
  }
});

export default FilePicker;