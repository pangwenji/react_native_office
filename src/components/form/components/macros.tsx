import { Colors } from '@/utils/colors';
import React, { useEffect, useState } from 'react';
import { Text, View,StyleSheet} from 'react-native';

const configTemp:any = { 
	sys_userid: (login: any) => login.rawData.userid,
	sys_realname:(login:any) => login.rawData.nickName,
	sys_dept:(login:any) => login.rawData.dept,
	sys_post:(login:any) => login.rawData.post,
	sys_companyname:(login:any) => login.rawData.companyName,
	sys_phoneNumber:(login:any) => login.rawData.telephone,
	sys_email:(login:any) => login.rawData.email,
	sys_datetime: (login: any) => { 
		let date = new Date();
		let year = date.getFullYear();
		let moths = String(date.getMonth() + 1).padStart(2, '0')
		let days = String(date.getDay()).padStart(2,'0')
		let hours = String(date.getHours()).padStart(2,'0')
		let minutes = String(date.getMinutes()).padStart(2,'0')
        return `${year}-${moths}-${days} ${hours}:${minutes}`
	},
}

const getTemp = (title:any,login:any) => { 
	return configTemp[title](login)
}

const setTempValue = (props:any) => { 
	const { login,detailType} = props;
	return getTemp(detailType,login)
}

const Macros: React.FC = (props:any) => { 
	let [text, setState] = useState('');
	let {onUserInput,row } = props;
	useEffect(() => {
	let resultTemp = setTempValue(props);
		onUserInput(row.name, resultTemp);
		setState(text)
	 },[])
  return(
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          {/* {this.state.row.title} */}
        </Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={{textAlign: 'right', color: Colors.BLACK,}}>{text}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor:Colors.WHITE,
		borderBottomColor: Colors.LIGHT_GREY,
			borderBottomWidth: 1,
	  },
	  titleContainer: {
		alignItems: 'center',
		marginLeft: 16,
		marginTop: 12,
		marginBottom: 12,
	  },
	  title: {
		textAlign: 'right',
		fontSize: 16,
		color: Colors.BLACK,
	  },
	  contentContainer: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		marginLeft: 20,
		marginRight:16,
	  },
})
export default Macros;