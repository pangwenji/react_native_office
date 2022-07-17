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

const FormItem: React.FC = () => {
	return (
		<View style={styles.container}>
			{
				renderItem()
			}
		</View>
	);
}
const renderItem = () => {
	let _props = this.props;
	let _row = this.state.row;
	// //以下判断顺序不能动
	if (_row.hide) { //隐藏控件
		return (<Hide row={_row} onUserInput={(key, value) => _props.onUserInput(key, value)} />);
	}
	if (this.state.row.type === 'macros') {
		return (<Macros {..._props} row={this.state.row} detailType={this.state.row.detailType}
			onUserInput={(key, value) => this.props.onUserInput(key, value)} />);
	}
	if (this.state.row.type === 'text' && this.state.row.detailType === 'linked_process_no') { //附件
		return (<Link {..._props} row={this.state.row} navigator={this.props.navigator} />);
	}
	if (_row.readOnly === true) {//只读
		return (<Texts userName={this.state.userName} row={_row} />);
	}
	switch (_row.type) {
		case 'textarea':
			return (<TextArea row={_row} onUserInput={(key, value) => _props.onUserInput(key, value)} />);
		case 'select':
			return (<Spinner row={_row} onUserInput={(key, value) => _props.onUserInput(key, value)} refs={_props.refs} />);
		case 'radios':
			return (<RadioView row={_row} onUserInput={(key, value) => _props.onUserInput(key, value)} />);
		case 'checkboxs':
			return (<CheckBoxs row={_row} onUserInput={(key, value) => _props.onUserInput(key, value)} />);
		case 'selectPerson':
			return (<SelectStaff {..._props} row={_row} onUserInput={(key, value) => _props.onUserInput(key, value)} />);
	}
	if (_row.type === 'text') {
		switch (_row.detailType) {
			case 'text':
				return (<TextInputs row={_row} onUserInput={(key, value) => _props.onUserInput(key, value)} />);
			case 'email':
				return (<TextMail row={_row} onUserInput={(key, value) => _props.onUserInput(key, value)} />);
			case 'int':
				return (<TextInt row={_row} onUserInput={(key, value) => _props.onUserInput(key, value)} />);
			case 'float':
				return (<TextFloat row={_row} onUserInput={(key, value) => _props.onUserInput(key, value)} />);
			case 'idcard':
				return (<TextCard row={_row} onUserInput={(key, value) => _props.onUserInput(key, value)} />);
			case 'standardDate':
				return (<Datepicker row={_row} onUserInput={(key, value) => _props.onUserInput(key, value)} refs={_props.refs} />);
			case 'fullDate':
				return (<DateTime row={_row} onUserInput={(key, value) => _props.onUserInput(key, value)} refs={_props.refs} />);
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