import React, { useState } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import Modal from 'react-native-modal/dist/modal';


const Select: React.FC = () => { 
	let [isShow, setIsVisible] = useState(false);
	let [date, setDate] = useState(new Date());
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
        <Text style={styles.textStyle}>{this.state.title}</Text>
        {/* <Picker
        style = {formComponentStyles.pickerStyle}
        selectedValue={this.state.sValue}
        onValueChange={(data) => {this.handleChange(data)}}
        mode={'dropdown'}>
        {items.map((data)=>{return (
          <Picker.Item label={data} value={data}
        />);})}
        </Picker> */}
        </View>
        <View style={styles.calendar}>
		<TouchableHighlight style={styles.button} onPress={() => { setIsVisible(false); setDate(new Date())}} underlayColor={'#ffffff'}>
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
	  justifyContent: 'center',
	  marginTop: 20,
	},
	calendar: {
	  height:60,
	  justifyContent: 'center',
	  flexDirection:'row',
	  marginTop:30
	},
	button: {
	  justifyContent: 'center',
	  borderRadius: 8,
	  marginBottom: 20,
	  marginLeft: 20,
	  marginRight: 20,
	  width:70,
	  height:35,
	},
	buttonText: {
	  alignSelf: 'center',
	  fontSize: 18,
	  color:'#ff8c00'
	},
	textStyle:{
	  fontSize:20,
	  fontWeight:'500',
	  textAlign: 'center',
	  color:'#ff8c00'
	}
  });
export default Select;