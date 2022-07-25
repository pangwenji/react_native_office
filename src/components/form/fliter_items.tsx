import React from 'react';
import { StyleSheet, View } from 'react-native';
import Spinner from '../spinner';
import CheckBoxs from './components/checkbox';
import Datepicker from './components/datepickerview';
import DateTime from './components/datetime';
import FileUpLoad from './components/fileupload';
import Hide from './components/hide';
import Link from './components/link';
import Macros from './components/macros';
import RadioView from './components/radioview';
import SelectStaff from './components/selectstaff';
import Texts from './components/text';
import TextArea from './components/textarea';
import TextMail from './components/textemail';
import TextFloat from './components/textfloat';
import TextCard from './components/textIdcard';
import TextInputs from './components/textinput';
import TextInt from './components/textint';

const FormItem: React.FC = (props: any) => {
	return (
		<View style={styles.container}>
			{
				renderItem(props)
			}
		</View>
	);
}
const renderItem = (props: any) => {
	let { onUserInput,row ,navigator,userName} = props;
	// //以下判断顺序不能动
	if (row.hide) { //隐藏控件
		return (<Hide row={row} onUserInput={(key:any, value:any) => onUserInput(key, value)} />);
	}
	if (row.type === 'macros') {
		return (<Macros {...props} row={row} detailType={row.detailType}
			onUserInput={(key:any, value:any) => props.onUserInput(key, value)} />);
	}
	if (row.type === 'text' && row.detailType === 'linked_process_no') { //附件
		return (<Link {...props} row={row} navigator={navigator} />);
	}
	if (row.readOnly === true) {//只读
		return (<Texts userName={userName} row={row} />);
	}
	switch (row.type) {
		case 'textarea':
			return (<TextArea  row={row} onUserInput={(key:any, value:any) => onUserInput(key, value)} />);
		case 'select':
			return (<Spinner   row={row} onUserInput={(key:any, value:any) => onUserInput(key, value)} refs={refs} />);
		case 'radios':
			return (<RadioView row={row} onUserInput={(key:any, value:any) => onUserInput(key, value)} />);
		case 'checkboxs':
			return (<CheckBoxs row={row} onUserInput={(key:any, value:any) => onUserInput(key, value)} />);
		case 'selectPerson':
			return (<SelectStaff {...props} row={row} onUserInput={(key, value) => onUserInput(key, value)} />);
	}
	if (row.type === 'text') {
		switch (row.detailType) {
			case 'text':
				return (<TextInputs row={row} onUserInput={(key, value) => _props.onUserInput(key, value)} />);
			case 'email':
				return (<TextMail row={row} onUserInput={(key, value) => _props.onUserInput(key, value)} />);
			case 'int':
				return (<TextInt row={row} onUserInput={(key, value) => _props.onUserInput(key, value)} />);
			case 'float':
				return (<TextFloat row={row} onUserInput={(key, value) => _props.onUserInput(key, value)} />);
			case 'idcard':
				return (<TextCard row={row} onUserInput={(key, value) => _props.onUserInput(key, value)} />);
			case 'standardDate':
				return (<Datepicker row={row} onUserInput={(key, value) => _props.onUserInput(key, value)} refs={_props.refs} />);
			case 'fullDate':
				return (<DateTime row={row} onUserInput={(key, value) => _props.onUserInput(key, value)} refs={_props.refs} />);
			case 'file':
				return (<FileUpLoad {..._props} row={_row} onUserInput={(key, value, extraData) => _props.onUserInput(key, value, extraData)}
					navigator={_props.navigator} onChooseFile={(key, value) => _props.onChooseFile(key, value)} refs={_props.refs} />)
			default:
				return <View />
		}
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
	},
});

export default FormItem;