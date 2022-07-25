import { ViewHeight } from "@/utils/index";
import { Colors } from "@/utils/colors";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import commonStyles from "./commonstyle";

const TextInputs: React.FC<Form.IProps> = (props: Form.IProps) => {
  let { row} = props;
	let _maxLength = 500;
	let [text, setText] = useState('');
	useEffect(() => { 
		setText(text)
	},[])
  if (row.maxLength&&row.maxLength != '') {
      _maxLength = Number(row.maxLength);
  }
  return(
    <View style={commonStyles.container}>
      <View style={commonStyles.titleContainer}>
        <Text style={commonStyles.title}>
          {row.title}
        </Text>
      </View>
      <View style={[commonStyles.contentContainer,{height: 48, marginRight: 4,}]}>
        <TextInput
          style={{height: 48, textAlign:'right', fontSize: 14,}}
          placeholder={'请输入' + row.title}
          underlineColorAndroid={'transparent'}
          value={text}
          maxLength={_maxLength}
		  onChangeText={(text) => setText(text)} />
      </View>
    </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.ORANGE
    },
    main: {
        marginTop: 16,
        marginLeft: 16,
        marginRight: 16,
        height: ViewHeight / 5,
        backgroundColor: Colors.WHITE,
        borderColor: Colors.LIGHT_GREY,
        borderWidth: 1,
    },
});
export default TextInputs;