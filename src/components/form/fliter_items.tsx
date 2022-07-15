import React from 'react';
import { StyleSheet, View } from 'react-native';

const FormItem: React.FC = () => { 
  return(
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
    //以下判断顺序不能动
    if (_row.hide) { //隐藏控件
      return(<FormItemsHideView row={_row} onUserInput={(key, value) => _props.onUserInput(key, value)}/>);
    }
    if(this.state.row.type === 'macros'){
      return(<FormItemsMacros {..._props} row={this.state.row} detailType={this.state.row.detailType}
        onUserInput={(key, value) => this.props.onUserInput(key, value)}/>);
    }
    if(this.state.row.type === 'text' && this.state.row.detailType === 'linked_process_no'){ //附件
      return(<FormItemsLinkView {..._props} row={this.state.row} navigator={this.props.navigator} />);
    }
    if (_row.readOnly === true) {//只读
      return(<FormItemsTextView userName={this.state.userName} row={_row}/>);
    }
    if(_row.type == 'textarea'){
      return(<FormItemsTextareaView row={_row} onUserInput={(key, value) => _props.onUserInput(key, value)}/>);
    }else if(_row.type === 'select'){
      return(<FormItemsSpinnerView row={_row} onUserInput={(key, value) => _props.onUserInput(key, value)} refs={_props.refs}/>);
    }else if(_row.type === 'radios'){
      return(<FormItemsRadioView row={_row} onUserInput={(key, value) => _props.onUserInput(key, value)}/>);
    }else if(_row.type === 'checkboxs'){
      return(<FormItemsCheckBoxView row={_row} onUserInput={(key, value) => _props.onUserInput(key, value)}/>);
    }else if(_row.type === 'selectPerson'){
      return(<FormItemsSelectStaff {..._props} row={_row} onUserInput={(key, value) => _props.onUserInput(key, value)}/>);
    }else if(_row.type === 'text' && _row.detailType === 'text'){ //普通文本
      return(<FormItemsTextInputView row={_row} onUserInput={(key, value) => _props.onUserInput(key, value)}/>);
    }else if(_row.type === 'text' && _row.detailType === 'email'){ //邮箱地址
      return(<FormItemsTextEmail row={_row} onUserInput={(key, value) => _props.onUserInput(key, value)}/>);
    }else if(_row.type === 'text' && _row.detailType === 'int'){ //整数
      return(<FormItemsTextInt row={_row} onUserInput={(key, value) => _props.onUserInput(key, value)}/>);
    }else if(_row.type === 'text' && _row.detailType === 'float'){ //小数
      return(<FormItemsTextFloat row={_row} onUserInput={(key, value) => _props.onUserInput(key, value)}/>);
    }else if(_row.type === 'text' && _row.detailType === 'idcard'){ //身份证号码
      return(<FormItemsTextIdcard row={_row} onUserInput={(key, value) => _props.onUserInput(key, value)}/>);
    }else if(_row.type === 'text' && _row.detailType === 'standardDate'){ //日期(yyyy-MM-dd)
      return(<FormItemsDatePickerView row={_row} onUserInput={(key, value) => _props.onUserInput(key, value)} refs={_props.refs} />);
    }else if(_row.type === 'text' && _row.detailType === 'fullDate'){ //日期(yyyy-MM-dd HH:mm:ss)
      return(<FormItemsDateTimeView row={_row} onUserInput={(key, value) => _props.onUserInput(key, value)} refs={_props.refs} />);
    }else if(_row.type === 'text' && _row.detailType === 'file'){ //附件
      return(<FormItemsFileUploadView {..._props} row={_row} onUserInput={(key, value, extraData) => _props.onUserInput(key, value, extraData)}
        navigator={_props.navigator} onChooseFile={(key, value) => _props.onChooseFile(key, value)} refs={_props.refs}/>);
    }else{
      return(<View/>)
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
});